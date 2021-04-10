import React from 'react';
import {FlatList} from "react-native";
import Title from "../common/Title";
import SmallCard from "../cards/SmallCard";

export default function HorizontalList({title, data}) {
    return (
        <>
            <Title size={20}>{title}</Title>
            <FlatList
                data={data}
                keyExtrator={item => item.id}
                horizontal
                showHorizontalScrollIndicator={false}
                renderItem={({item}) => <SmallCard item={item}/>}
            />
        </>
    )
}