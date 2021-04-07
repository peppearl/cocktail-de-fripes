import React from 'react';
import {StyleSheet, View} from 'react-native';
//import FeaturedNews from "../blog/FeaturedNews";
//import SmallCard from "../blog/SmallCard";
import BreakingNews from "../blog/BreakingNews";
import data from '../fakeData'
import TechNews from "../blog/TechNews";
//import EntertainmentNews from "../blog/EntertainmentNews";
//import FlatCard from "../blog/FlatCard";

export default function BlogScreen() {

    const breakingNews = data.filter(item => item.category === 'breaking-news');
    const techNews = data.filter(item => item.category === 'tech');
    const entertainmentNews = data.filter(item => item.category === 'entertainment');
    //const flatCard = data.filter(item => item.id === '8');

    return (
        <View style={styles.container}>
            {/*<FeaturedNews/>*/}
            <BreakingNews data={breakingNews}/>
            <TechNews data={techNews}/>
            {/*<EntertainmentNews data={entertainmentNews}/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15
    }
})