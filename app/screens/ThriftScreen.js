import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from "../components/SearchBarThrift";
import Screen from "../friperie/common/Screen";
import AllThrift from "../friperie/AllThrift";
import thriftApi from "../api/thriftApi";
import Title from "../friperie/common/Title";
import ActivityIndicator from "../friperie/common/ActivityIndicator";


export default function ThriftScreen() {
    const [isSearchFocused, setSearchFocused] = useState(false);
    const [allThrift, setAllThrift] = useState([]);
    const [loading, setLoading] = useState(false)


    //const friperies = (data) => {
    //    return data
    //}

    const allFripes = async () => {
        setLoading(true);
        const allThrifts = await thriftApi.getAll()
        setAllThrift(allThrifts);
        setLoading(false);
    }

    useEffect(() => {
        allFripes()
    }, [])

    return (
        <>
            <ActivityIndicator visible={loading}/>
            <Screen isSearchFocused={isSearchFocused}>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Title size={36}>Friperies</Title>
                    </View>
                    <SearchBar setSearchFocused={setSearchFocused}/>
                    <AllThrift data={allThrift}/>
                </View>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    title: {
        alignItems: 'center',
        flex: 1,
    }
})