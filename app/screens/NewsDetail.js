import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, ScrollView, Text, Dimensions} from "react-native";
import newsApi from "../api/newsApi";
import HorizontalList from "../blog/lists/HorizontalList";
import Close from '../blog/common/Close'
import {useNavigation} from '@react-navigation/native';
import ActivityIndicator from "../blog/common/ActivityIndicator";

const {width, height} = Dimensions.get('window');

export default function NewsDetail({route}) {

    const navigation = useNavigation();

    const [news, setNews] = useState({});
    const [relatedNews, setRelatedNews] = useState([]);
    const {id: postId, category: postCategory} = route.params.item;
    const {thumbnail, title, content, date, category} = news;
    const [loading, setLoading] = useState(false)

    //const categoryCapitalized = news.category.toUpperCase()

    const fetchPost = async (id) => {
        setLoading(true);
        const result = await newsApi.getSingle(id);
        setNews(result);
    }

    const fetchRelatedPosts = async (category) => {
        const result = await newsApi.getByCategory(postCategory, 6);
        setRelatedNews(result.filter(item => item.id !== postId));
        setLoading(false);
    }

    useEffect(() => {
        fetchPost(postId);
        fetchRelatedPosts(postCategory)
    }, [])
    return (
        <>
            <ActivityIndicator visible={loading}/>
            <ScrollView style={[styles.container, styles]}>
                <Image
                    source={{uri: thumbnail}}
                    style={styles.image}
                />
                <View style={styles.contentContainer}>
                    <Text style={styles.content}>{category}</Text>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>Posté le {date}</Text>
                    <View style={styles.contentPost}>
                        <Text style={styles.content}>{content}</Text>
                    </View>
                </View>
                <View style={styles.relatedPosts}>
                    <HorizontalList data={relatedNews} title='Vous aimerez aussi...'/>
                </View>
            </ScrollView>
            <Close
                onPress={() => {
                    navigation.popToTop()
                }}
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
    },
    contentPost : {
        backgroundColor: '#F0D97B',
        borderRadius: 20
    }
})