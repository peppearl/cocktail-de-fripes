import React from 'react';
import HorizontalList from "./HorizontalList";

export default function BreakingNews({data}) {
    return (
        <HorizontalList
            title='Breaking News'
            data={data}
        />
    )
}