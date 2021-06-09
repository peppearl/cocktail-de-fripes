import React from 'react';
import FlatCard from "./FlatCard";
import ViewMore from "../common/ViewMore";
import {useNavigation} from "@react-navigation/native";
import newsApi from "../../api/newsApi";

export default function VerticalCard({item, onPress}) {
    const navigation = useNavigation();
    const handleViewMore = async (category) => {
        const result = await newsApi.getByCategory(category);
        navigation.navigate('NewsList', result)
    }


    if (item.type === 'viewMore') {
        return <ViewMore
            onPress={() => {
                handleViewMore(item.category)
            }}
        />
    }

    return (
        <FlatCard
            item={item}
            onPress={onPress}
        />
    )
}