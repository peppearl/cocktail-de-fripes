import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from "react-native";
import SearchModel from "../friperie/common/SearchModel";
import thriftApi from "../api/thriftApi";

let timeOutId;

const debounce = (func, delay) => {
    return (...args) => {
        if(timeOutId) clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            func.apply(null, args)
        }, delay);
    }
}

export default function SearchBar({setSearchFocused}) {
    const [query, setQuery] = useState('');
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);
    const [notFound, setNotFound] = useState('');

    const handleChange = ({nativeEvent}) => {
        const {text} = nativeEvent;
        setQuery(text);
        setVisible(true);
        //handleSearch(query);
        debounceSearch(query);
    }

    const handleSearch = async (value) => {
        const res = await thriftApi.searchThriftStore(value);
        if(res.success) {
            setNotFound('')
            setData(res.thrift);
        }

        if(!res.success) {
            setNotFound(res.message)
        }
    }

    const debounceSearch = debounce(handleSearch, 500);

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    style={styles.searchInput}
                    value={query}
                    placeholder='Que cherches-tu ?'
                    onChange={handleChange}
                    onFocus={() => {
                        setSearchFocused(true)
                    }}
                    onBlur={() => {
                        setSearchFocused(false)
                        setQuery('')
                        setVisible(false)
                        setData([])
                        setNotFound('')
                    }}
                />
            </View>
            <SearchModel
                visible={visible}
                data={data}
                notFound={notFound}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 100,
        justifyContent: 'center',
        paddingLeft: 8,
        borderColor : '#F0D97B',
        borderWidth: 3,
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16
    }
})