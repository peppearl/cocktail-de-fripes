import React from 'react';
import VerticalList from "./VerticalList";

export default function TechNews({data}) {
    return (
        <VerticalList
            title='Entertainment News'
            data={data}
        />
    )
}