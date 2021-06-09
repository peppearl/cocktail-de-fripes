import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Screen from "../friperie/common/Screen";
import AllThrift from "../friperie/AllThrift";
import thriftApi from "../api/thriftApi";
import Title from "../friperie/common/Title";
import ActivityIndicator from "../friperie/common/ActivityIndicator";


export default function FavorisScreen() {
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
            <Screen>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <View style={{marginBottom: 50}}/>
                        <Title size={36}>Favoris</Title>
                    </View>
                    <AllThrift data={allThrift}/>
                </View>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    title: {
        alignItems: 'center',
        flex: 1,
    }
})