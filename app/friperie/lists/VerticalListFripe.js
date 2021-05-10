import React from 'react';
import {StyleSheet, View} from "react-native";
import Title from "../common/Title";
import VerticalCard from "../cards/VerticalCard";
import {useNavigation} from '@react-navigation/native';
import FlatCard from "../cards/FlatCard";


export default function VerticalListFripe({data}) {
    const navigation = useNavigation();
    return (
        <View>
            {data.map(item =>
                <FlatCard
                    item={item}
                    key={item.id}
                    onPress={() => navigation.push('ThriftDetail', {item})}

                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    }
})