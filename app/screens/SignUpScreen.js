import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import FormInput from '../authentification/components/FormInput';
import FormButton from '../authentification/components/FormButton';
import SocialButton from '../authentification/components/SocialButton';
import * as firebase from "firebase";

const {height} = Dimensions.get('window');

export default function SignUpScreen({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    //const [confirmPassword, setConfirmPassword] = useState();

    const SignUp = (email, password) => {
        try {
            if (password.length < 8) {
                alert("Votre mot de passe doit être d'au moins 8 caractères");
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate("Home");
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../assets/LogoCDF.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Créer un compte</Text>
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
                buttonTitle="Inscris-toi"
                onPress={() => SignUp(email, password)}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    En t'inscrivant, tu confirmes que tu acceptes nos{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, {color: '#F0D97B', fontWeight: "bold"}]}>
                        Conditions Générales d'Utilisation
                    </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <TouchableOpacity onPress={() => alert('Privacy Clicked!')}>
                    <Text style={[styles.color_textPrivate, {color: '#F0D97B', fontWeight: "bold"}]}>
                        Politique de Confidentialité
                    </Text>
                </TouchableOpacity>
            </View>

            {Platform.OS === 'android' ? (
                <>
                    <Text style={styles.text2}>Ou inscris toi avec</Text>
                    <View style={{flexDirection: 'row', marginBottom: 40}}>
                        <SocialButton
                            btnType="logo-facebook"
                            color="#fff"
                            backgroundColor="#F0D97B"
                            onPress={() => console.log('Inscription avec Facebook')}
                        />
                        <SocialButton
                            btnType="logo-google"
                            color="#fff"
                            backgroundColor="#F0D97B"
                            onPress={() => console.log('Inscription avec Google')}
                        />
                        <SocialButton
                            btnType="logo-instagram"
                            color="#fff"
                            backgroundColor="#F0D97B"
                            onPress={() => console.log('Inscription avec Instagram')}
                        />
                    </View>
                </>
            ) : null}

            <Text style={styles.text2}>Tu as déjà un compte ?</Text>
            <FormButton
                buttonTitle="Connecte-toi"
                onPress={() => navigation.navigate('Sign In')}
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
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: '#354362',
        alignItems: "flex-start",
        fontWeight: 'bold',
    },
    navButton: {
        marginTop: 15,
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginBottom: 30,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey',
    },
    text2: {
        fontSize: 15,
        marginBottom: 10,
        color: '#354362',
        fontWeight: 'bold',
    },
    logo: {
        resizeMode: 'cover',
        width: 136,
        height: 77,
        marginBottom: 25,
        marginTop: 5,
    },
});