import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Platform, StyleSheet, ScrollView, Dimensions} from 'react-native';
import FormInput from '../authentification/components/FormInput';
import FormButton from '../authentification/components/FormButton';
import SocialButton from '../authentification/components/SocialButton';
import * as firebase from "firebase";
import * as Google from "expo-google-app-auth";

const {height} = Dimensions.get('window');

export default function SingInScreen({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const Login = (email, password) => {
        try {
            if (password.length < 8) {
                alert("Votre mot de passe doit être d'au moins 8 caractères");
                return;
            }

            const {user} = firebase.auth().signInWithEmailAndPassword(email, password)
                .catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Mot de passe / email invalide(s)');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                })
                .then(navigation.replace('Home', {user}))

        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

    const GoogleLogin = async ({navigation}) => {
        console.log("LoginScreen.js 6 | loggin in");
        try {
            const {type, user} = await Google.logInAsync({
                //iosClientId: `740198353924-nh8bp8maqdm1l8p1up2uce4ou0b6pvck.apps.googleusercontent.com`,
                //androidClientId: `<YOUR_ANDROID_CLIENT_ID>`,
            });

            if (type === "success") {
                // Then you can use the Google REST API
                console.log("LoginScreen.js 17 | success, navigating to profile");
                navigation.navigate("Profil", {user});
            }
        } catch (error) {
            console.log("LoginScreen.js 19 | error with login", error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../assets/LogoCDF.png')}
                style={styles.logo}
            />

            <Text style={styles.text}>Connecte toi à ton compte</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Mot de passe"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Connecte-toi"
                onPress={() => Login(email, password)}
            />
            <TouchableOpacity style={styles.forgotButton} onPress={() => {
            }}>
                <Text style={styles.navButtonText}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>Ou connecte toi avec</Text>
            <View style={{flexDirection: 'row', marginBottom : 40}}>
                <SocialButton
                    btnType="logo-facebook"
                    color="#fff"
                    backgroundColor="#F0D97B"
                    onPress={() => fbLogin()}
                />
                <SocialButton
                    btnType="logo-google"
                    color="#fff"
                    backgroundColor="#F0D97B"
                    onPress={() => GoogleLogin()}
                />
                <SocialButton
                    btnType="logo-instagram"
                    color="#fff"
                    backgroundColor="#F0D97B"
                    onPress={() => InstaLogin()}
                />
            </View>
                <Text style={styles.text2}>Tu n'as pas de compte ?</Text>
                <FormButton
                    buttonTitle="Inscris-toi"
                    onPress={() => navigation.navigate('Sign Up')}
                />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#fff',
        height: height,
    },
    logo: {
        resizeMode: 'cover',
        width : 136,
        height : 77,
        marginBottom: 30,
        marginTop: 10,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: '#354362',
        alignItems: "flex-start",
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 15,
        marginBottom: 10,
        color: '#354362',
        alignItems: "flex-start",
        fontWeight: 'bold',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginTop: 10,
        marginBottom: 30,
    },
    navButtonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#354362',
    },
});