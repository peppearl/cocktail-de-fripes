import React from 'react';
import HorizontalList from "./lists/HorizontalList";

export default function TechNews({data}) {
    return (
        <HorizontalList
            title='Tech News'
            data={data}
        />
    )
}