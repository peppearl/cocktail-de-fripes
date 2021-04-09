import React from 'react';
import {StyleSheet} from "react-native";
import FlatCard from "./FlatCard";
import ViewMore from "./ViewMore";

export default function VerticalCard({item}) {
    if(item.type === 'viewMore'){
        return <ViewMore/>
    }
    return (
        <FlatCard item={item}/>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 180,
        marginRight: 15,
        height: 200,
        marginBottom: 25
    },
    image: {
        width: '100%',
        height: 100,
    },
    contentContainer: {
        padding: 5
    }
})