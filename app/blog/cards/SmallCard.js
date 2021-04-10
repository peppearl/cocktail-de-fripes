import React from 'react';
import {StyleSheet} from "react-native";
import BlockCard from "./BlockCard";
import ViewMore from "../common/ViewMore";

export default function SmallCard({item}) {
    if(item.type === 'viewMore'){
        return <ViewMore style={styles.viewMore}/>
    }
    return (
        <BlockCard
            item={item}
            style={styles.container}
            imageStyle={styles.image}
        />
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
    },
    viewMore: {
        width: 180,
        height: 200,
    }
})