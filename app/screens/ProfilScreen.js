import React, {useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Button, ScrollView} from 'react-native';
import {AuthContext} from "../../Auth";
import Title from "../friperie/common/Title";
import FormButton from "../authentification/components/FormButton";
import ProfileMenu from "../profile/ProfileMenu";

const {height} = Dimensions.get('window');

export default function ProfilScreen() {
    const {currentUser} = useContext(AuthContext);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{marginBottom: 50}}/>
                <View style={styles.contentContainer}>
                    <Title size={36}>Profil</Title>
                </View>
                <View style={[{flexDirection: "row", marginVertical: 20}, styles.contentContainer]}>
                    <Image style={styles.image} source={require('../../assets/profil.png')}/>
                    <View style={{flexDirection: "column", marginLeft: 20, justifyContent: 'center'}}>
                        <Text style={styles.name}>Bonjour ♡</Text>
                        <Text style={styles.email}>{currentUser.email}</Text>
                    </View>
                </View>
                <View style={styles.contentContainer2}>
                    <View style={styles.contentContainer}>
                        <ProfileMenu/>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        height: height,
    },
    contentContainer: {
        alignItems: 'center',
        marginHorizontal: 15,
    },
    image: {
        width: 63,
        height: 63,
    },
    email: {
        color: 'rgba(53, 67, 98, 0.5)',
        fontSize: 15,
    },
    name: {
        color: '#354362',
        fontWeight: 'bold',
        fontSize: 20,
    },
    contentContainer2: {
        backgroundColor: '#F0D97B',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 10,
    },
})