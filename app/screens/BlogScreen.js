import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import newsApi from '../api/newsApi';
import FeaturedNews from "../blog/FeaturedNews";
import BreakingNews from "../blog/BreakingNews";
import TechNews from "../blog/TechNews";
import EntertainmentNews from "../blog/EntertainmentNews";
import PoliticalNews from "../blog/PoliticalNews";


export default function BlogScreen() {

    const [featuredNews, setFeaturedNews] = useState({});
    const [breakingNews, setBreakingNews] = useState([]);
    const [politicalNews, setPoliticalNews] = useState([]);
    const [techNews, setTechNews] = useState([]);
    const [entertainmentNews, setEntertainmentNews] = useState([]);
    const qty = 5;

    const filterFeatured = (data) => {
        return [...data].filter(item => item.featured === 'on').reverse()[0];
    }

    const filterByCategory = (data, category)  => {
        return [...data].filter(item => item.category === category).reverse().splice(0, qty)
    }

    const filterMultipleNews = async () => {
        const allNews = await newsApi.getAll();

        setFeaturedNews(filterFeatured(allNews));
        setBreakingNews(filterByCategory(allNews, 'breaking-news'));
        setPoliticalNews(filterByCategory(allNews, 'political'));
        setEntertainmentNews(filterByCategory(allNews, 'entertainment'));
        setTechNews(filterByCategory(allNews, 'tech'));
    }

    useEffect(() => {
        filterMultipleNews()
    }, []);

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