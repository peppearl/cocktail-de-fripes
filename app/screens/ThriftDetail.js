import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, ScrollView, Text, Dimensions, Pressable} from "react-native";
import thriftApi from "../api/thriftApi";
import {useNavigation} from '@react-navigation/native';
import ActivityIndicatorThrift from "../friperie/common/ActivityIndicator";
import CustomModal from "../modals/CustomModal";
import Title from "../friperie/common/Title";
import {Button} from 'react-native-paper';
import {Icon} from "react-native-elements";
import * as WebBrowser from 'expo-web-browser';

const {width, height} = Dimensions.get('window');

export default function ThriftDetail({route, setModalVisible, modalVisible}) {

    const navigation = useNavigation();

    const [iconName, setIconName] = useState("hearto");
    const [thrift, setThrift] = useState({});
    const {id: thriftStoreId} = route.params.item;
    const {
        thumbnail,
        name,
        content,
        city,
        address,
        hours,
        instagram,
        facebook,
        tel,
        style,
        desc,
        pic1,
        pic2,
        pic3,
        pic4
    } = thrift;
    const [loading, setLoading] = useState(false)

    const fetchThrift = async (id) => {
        setLoading(true);
        const result = await thriftApi.getSingle(id);
        setThrift(result);
        setLoading(false);
    }

    useEffect(() => {
        fetchThrift(thriftStoreId);
    }, [])
    return (
        <>
            <ActivityIndicatorThrift visible={loading}/>
            <ScrollView style={[styles.container, styles]}>
                <Image
                    source={{uri: thumbnail}}
                    style={styles.image}
                />
                <View style={styles.contentContainer}>
                    <Title size={36}>{name}</Title>
                    <Title size={18}>{city}</Title>
                    <Text style={styles.style}>{style}</Text>
                </View>
                <View style={styles.contentContainer2}>
                    <Title size={18}>Ambiance et style</Title>
                    <Text style={styles.text}>{desc}</Text>
                    <Pressable style={[styles.button, styles.buttonOpen]}>
                        <Text style={styles.textStyle}>En savoir plus</Text>
                    </Pressable>
                    <Title size={18}>Galerie photos</Title>
                    <View style={{flex: 1, marginBottom: 25}}>
                        <ScrollView
                            style={styles.scrollView}
                            contentContainerStyle={{flexGrow: 1}}
                            horizontal={true}
                            scrollEnabled={true}
                        >
                            <Image
                                style={styles.images}
                                source={{
                                    uri: pic1,
                                    width: 140,
                                    height: 140
                                }}
                            />
                            <Image
                                style={styles.images}
                                source={{
                                    uri: pic2,
                                    width: 140,
                                    height: 140
                                }}
                            />
                            <Image
                                style={styles.images}
                                source={{
                                    uri: pic3,
                                    width: 140,
                                    height: 140
                                }}
                            />
                            <Image
                                style={styles.images}
                                source={{
                                    uri: pic4,
                                    width: 140,
                                    height: 140
                                }}
                            />
                        </ScrollView>
                    </View>
                    <Title size={18}>Infos Pratiques</Title>
                    <View style={{alignItems: "flex-start", flexDirection: "row", marginTop: 10}}>
                        <Icon
                            style={{marginRight: 10}}
                            name='map-pin'
                            type='feather'
                            color='#fff'
                            size={20}
                        />
                        <Text style={styles.text}>{address}</Text>
                    </View>
                    <View style={{alignItems: "flex-start", flexDirection: "row"}}>
                        <Icon
                            style={{marginRight: 10}}
                            name='clock'
                            type='feather'
                            color='#fff'
                            size={20}
                        />
                        <Text style={styles.text}>{hours}</Text>
                    </View>
                    <View style={{alignItems: "flex-start", flexDirection: "row"}}>
                        <Icon
                            style={{marginRight: 10}}
                            name='smartphone'
                            type='feather'
                            color='#fff'
                            size={20}
                        />
                        <Text style={styles.text}>{tel}</Text>
                    </View>
                    <Title size={18}>Reseaux Sociaux</Title>
                    <View style={{marginTop: 10}}>
                        {instagram !== ''
                            ?
                            <Button
                                title='Instagram'
                                onPress={ ()=>{ WebBrowser.openBrowserAsync(`${instagram}`)}}
                                color="#354362"
                                icon="instagram"
                                mode="contained"
                                style={styles.socialMedia}
                                uppercase={false}
                                accessibilityLabel="Compte Instagram de la friperie"
                            >
                                Instagram
                            </Button>
                            : null
                        }
                        {facebook !== ''
                            ?
                            <Button
                                title='Facebook'
                                icon="facebook"
                                mode="contained"
                                style={styles.socialMedia}
                                uppercase={false}
                                onPress={ ()=>{ WebBrowser.openBrowserAsync(`${facebook}`)}}
                                color="#354362"
                                accessibilityLabel="Page Facebook de la friperie"
                            >
                                Facebook
                            </Button>
                            : null
                        }
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height / 2,
    },
    contentContainer: {
        padding: 20,
    },
    style: {
        fontSize: 14,
        color: 'rgba(53, 67, 98, 0.5)'
    },
    text: {
        fontSize: 16,
        color: '#354362',
        marginBottom: 25
    },
    relatedPosts: {
        padding: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    button: {
        borderRadius: 6,
        padding: 10,
        elevation: 2,
        backgroundColor: '#354362',
        marginBottom: 20
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
    },
    buttonOpen: {
        backgroundColor: '#354362',
    },
    container: {
        backgroundColor: '#fff'
    },
    contentContainer2: {
        backgroundColor: '#F0D97B',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 30,
    },
    images: {
        borderRadius: 8,
        marginRight: 10
    },
    socialMedia: {
        marginBottom: 10,
        borderRadius: 6
    }
})