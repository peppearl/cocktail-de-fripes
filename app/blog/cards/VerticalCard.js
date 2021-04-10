import React from 'react';
import FlatCard from "./FlatCard";
import ViewMore from "../common/ViewMore";

export default function VerticalCard({item, onPress}) {
    if(item.type === 'viewMore'){
        return <ViewMore/>
    }
    return (
        <FlatCard
            item={item}
            onPress={onPress}
        />
    )
}