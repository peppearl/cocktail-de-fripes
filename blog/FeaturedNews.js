import React from 'react';
import BlockCard from "./BlockCard"

export default function FeaturedNews({item}) {
    return (
        <BlockCard item={item} style={{ marginVertical: 15}}/>
    )
}