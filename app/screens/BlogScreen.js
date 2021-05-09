import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import useNews from '../blog/hooks/useNews';
import FeaturedNews from "../blog/FeaturedNews";
import BreakingNews from "../blog/BreakingNews";
import TechNews from "../blog/TechNews";
import EntertainmentNews from "../blog/EntertainmentNews";
import PoliticalNews from "../blog/PoliticalNews";
import SearchBar from "../components/SearchBar";
import ActivityIndicator from "../blog/common/ActivityIndicator";
import Screen from "../blog/common/Screen";
import Title from "../blog/common/Title";


export default function BlogScreen() {
    const [isSearchFocused, setSearchFocused] = useState(false);
    const [
        featuredNews,
        politicalNews,
        entertainmentNews,
        techNews,
        breakingNews,
        loading
    ] = useNews()

    return (
        <>
            <ActivityIndicator visible={loading}/>
            <Screen isSearchFocused={isSearchFocused}>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Title size={36}>Actualites</Title>
                    </View>
                    <SearchBar setSearchFocused={setSearchFocused}/>
                    <FeaturedNews item={featuredNews}/>
                    <BreakingNews data={breakingNews}/>
                    <EntertainmentNews data={entertainmentNews}/>
                    <TechNews data={techNews}/>
                    <PoliticalNews data={politicalNews}/>
                </View>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    title: {
        alignItems: 'center',
        flex: 1,
    }
})