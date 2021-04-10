import React from 'react';
import VerticalList from "./lists/VerticalList";

export default function PoliticalNews({data}) {
    return (
        <VerticalList
            title='Political News'
            data={data}
        />
    )
}