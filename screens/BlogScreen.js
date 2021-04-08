import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import FeaturedNews from "../blog/FeaturedNews";
//import SmallCard from "../blog/SmallCard";
import BreakingNews from "../blog/BreakingNews";
import data from '../fakeData'
import TechNews from "../blog/TechNews";
import EntertainmentNews from "../blog/EntertainmentNews";
import PoliticalNews from "../blog/PoliticalNews";
//import FlatCard from "../blog/FlatCard";

export default function BlogScreen() {

    const breakingNews = data.filter(item => item.category === 'breaking-news');
    const techNews = data.filter(item => item.category === 'tech');
    const entertainmentNews = data.filter(item => item.category === 'entertainment');
    const politicalNews = data.filter(item => item.category === 'political');
    //const flatCard = data.filter(item => item.id === '8');

    return (
        <ScrollView>
            <View style={styles.container}>
                <FeaturedNews
                    item={{
                        id: '8',
                        title: 'This is the title no eight.',
                        desc:
                            'Desc is the short form of description and this format is the actual same as our real database.',
                        thumbnail: 'http://lorempixel.com/400/200/',
                        category: 'tech',
                    }}
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