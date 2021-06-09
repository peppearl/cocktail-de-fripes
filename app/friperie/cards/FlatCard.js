import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback, Text, ScrollView, TouchableOpacity} from "react-native";
import Title from "../common/Title";
import {Icon} from "react-native-elements";

export default function FlatCard({item, onPress}) {
    const {name, city, pic1, pic2, pic3, pic4} = item;

    const [iconName, setIconName] = useState("hearto");

    return (
        <View style={[styles.container, styles]}>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.contentContainer}>
                    <View style={styles.iconContainer}>
                        <Icon
                            style={{marginTop: 2}}
                            name={iconName}
                            type='antdesign'
                            color='#354362'
                            size={15}
                            onPress={() => {
                                if (iconName === "hearto") {
                                    setIconName("heart")
                                }
                                if (iconName === "heart") {
                                    setIconName("hearto")
                                }
                                console.log("favoris")
                            }
                            }
                        />
                        <Text style={styles.text}>923</Text>
                    </View>
                    <Title size={15}>{name}, {city}</Title>
                </View>
            </TouchableWithoutFeedback>
            <View style={{flex: 1}}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={{flexGrow: 1}}
                    horizontal={true}
                    scrollEnabled={true}
                >
                    <Image
                        style={styles.image}
                        source={{
                            uri: pic1,
                            width: 140,
                            height: 140
                        }}
                    />
                    <Image
                        style={styles.image}
                        source={{
                            uri: pic2,
                            width: 140,
                            height: 140
                        }}
                    />
                    <Image
                        style={styles.image}
                        source={{
                            uri: pic3,
                            width: 140,
                            height: 140
                        }}
                    />
                    <Image
                        style={styles.image}
                        source={{
                            uri: pic4,
                            width: 140,
                            height: 140
                        }}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        marginTop: 10,
        backgroundColor: '#fff'
    },
    image: {
        borderRadius: 8,
        marginRight: 10
    },
    contentContainer: {
        flex: 0.65,
    },
    iconContainer: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    text: {
        marginLeft: 10,
        color: '#354362',
        fontWeight: 'bold',
    },
    scrollView: {
        flexGrow: 0,
    }
})