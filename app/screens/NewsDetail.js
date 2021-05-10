import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, ScrollView, Text, Dimensions} from "react-native";
import newsApi from "../api/newsApi";
import HorizontalList from "../blog/lists/HorizontalList";
import Close from '../blog/common/Close'
import {useNavigation} from '@react-navigation/native';
import ActivityIndicator from "../blog/common/ActivityIndicator";
import Title from "../blog/common/Title";

const {width, height} = Dimensions.get('window');

export default function NewsDetail({route}) {

    const navigation = useNavigation();

    const [news, setNews] = useState({});
    const [relatedNews, setRelatedNews] = useState([]);
    const {id: postId, category: postCategory} = route.params.item;
    const {thumbnail, title, content, date, category} = news;
    const [loading, setLoading] = useState(false)

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
                    <Text style={styles.contentCat}>{category}</Text>
                    <Title style={styles.title} size={30} numberOfLines={4}>{title}</Title>
                    <Text style={styles.date}>Posté le {date}</Text>
                </View>
                <View style={styles.contentPost}>
                    <Text style={styles.content}>{content}</Text>


                    <View style={styles.relatedPosts}>
                        <HorizontalList data={relatedNews} title='Vous aimerez aussi...'/>
                    </View>
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
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    content: {
        fontSize: 18,
        color: '#354362',
        padding: 30,
    },
    contentCat: {
        fontSize: 18,
        color: '#8e96a7',
        marginBottom: 10
    },
    relatedPosts: {
        padding: 30
    },
    contentPost: {
        backgroundColor: '#F0D97B',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#fff'
    },
    date: {
        marginBottom: 20,
        fontSize: 14,
        color: '#8e96a7'
    }
})