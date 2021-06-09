import React from 'react';
import {FlatList} from "react-native";
import Title from "../common/Title";
import SmallCard from "../cards/SmallCard";
import {useNavigation} from '@react-navigation/native';

export default function HorizontalList({title, data}) {
    const navigation = useNavigation();
    return (
        <>
            <Title size={20}>{title}</Title>
            <FlatList
                data={data}
                keyExtrator={item => item.id}
                horizontal
                showHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <SmallCard
                        onPress={() => navigation.push('NewsDetail', {item})}
                        item={item}
                    />
                }
            />
        </>
    )
}