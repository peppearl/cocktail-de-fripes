import React from 'react';
import HorizontalList from "./HorizontalList";
import {StyleSheet} from "react-native";

export default function TechNews({data}) {
    return (
        <HorizontalList
            title='Tech News'
            data={data}
        />
    )
}