import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import useNews from '../hooks/useNews';
import FeaturedNews from "../blog/FeaturedNews";
import BreakingNews from "../blog/BreakingNews";
import TechNews from "../blog/TechNews";
import EntertainmentNews from "../blog/EntertainmentNews";
import PoliticalNews from "../blog/PoliticalNews";


export default function BlogScreen() {

    const [
        featuredNews,
        politicalNews,
        entertainmentNews,
        techNews,
        breakingNews
    ] = useNews()

    return (

        <ScrollView>
            <View style={styles.container}>
                <FeaturedNews
                    item={featuredNews}
                />
                <BreakingNews data={breakingNews}/>
                <EntertainmentNews data={entertainmentNews}/>
                <TechNews data={techNews}/>
                <PoliticalNews data={politicalNews}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15
    }
})