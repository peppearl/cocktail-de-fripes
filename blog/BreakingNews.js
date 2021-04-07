import React from 'react';
import HorizontalList from "./HorizontalList";
import {StyleSheet} from "react-native";

export default function BreakingNews({data}) {
    return (
        <HorizontalList
            title='Breaking News'
            data={data}
        />
    )
}