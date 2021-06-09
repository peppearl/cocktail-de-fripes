import React from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions, FlatList} from 'react-native';
import FlatCard from "../cards/FlatCard";
import {useNavigation} from '@react-navigation/native';
import SearchResult from "../cards/SearchResult";

const {height} = Dimensions.get('window');

export default function SearchModel({visible, data, notFound}) {
    const navigation = useNavigation()

    if (!visible) return null;

    if (visible && data.length === 0 && !notFound) return null;

    if (notFound) return (
        <View style={[
            styles.container,
            {justifyContent: 'center', alignItems: 'center'}
            ]}
        >
            <Text
                style={{color: "#fff", fontSize: 20, fontWeight: 'bold'}}
            >
                {notFound}
            </Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={(item) => {
                    return (<SearchResult
                        item={item.item}
                        key={item.id}
                        onPress={() => navigation.navigate('ThriftDetail', {item})}
                    />)
                }}/>

            {/*
            <ScrollView
                keyboardDismissMode='on-drag'
                keyboardShouldPersistTaps='always'
            >
                {
                    data.map(item => (
                            <FlatCard
                                item={{item}}
                                key={item.id}
                                onPress={() => navigation.navigate('ThriftDetail', {item})}
                            />
                    ))
                }
            </ScrollView>
            */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: 100,
        backgroundColor: 'rgba(0,0,0,0.5)',
        maxHeight: height,
        zIndex: 1,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
});