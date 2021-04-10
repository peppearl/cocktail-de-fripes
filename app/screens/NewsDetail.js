import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, ScrollView, Text, Dimensions} from "react-native";
import newsApi from "../api/newsApi";
import HorizontalList from "../blog/lists/HorizontalList";
import Close from '../blog/common/Close'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function NewsDetail({route}) {

    const navigation = useNavigation();

    const [news, setNews] = useState({});
    const [relatedNews, setRelatedNews] = useState([]);
    const {id: postId, category: postCategory} = route.params.item;
    const {thumbnail, title, content} = news;

    const fetchPost = async (id) => {
        const result = await newsApi.getSingle(id);
        setNews(result);
    }

    const fetchRelatedPosts = async (category) => {
        const result = await newsApi.getByCategory(postCategory, 6);
        setRelatedNews(result.filter(item => item.id !== postId));
    }

    useEffect(() => {
        fetchPost(postId);
        fetchRelatedPosts(postCategory)
    }, [])
    return (
        <>
            <ScrollView style={[styles.container, styles]}>
                <Image
                    source={{uri: thumbnail}}
                    style={styles.image}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>{content}</Text>
                </View>
                <View style={styles.relatedPosts}>
                    <HorizontalList data={relatedNews} title='Vous aimerez aussi...'/>
                </View>
            </ScrollView>
            <Close
                onPress={() => {navigation.popToTop()}}
            />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height / 3,
    },
    contentContainer: {
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    content: {
        fontSize: 16,
        color: '#4e4d4d'
    },
    relatedPosts: {
        padding: 10
    }
})