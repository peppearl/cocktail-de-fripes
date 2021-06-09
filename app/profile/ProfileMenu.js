import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import FormButton from "./components/ProfileButtons";

export default function ProfileMenu() {
    return (
        <>
            <FormButton
                buttonTitle="Informations Personnelles"
                onPress={() => console.log('ok !')}
                iconName="user"
            />
            <FormButton
                buttonTitle="Favoris"
                onPress={() => console.log('ok !')}
                iconName="heart"
            />
            <FormButton
                buttonTitle="Activité"
                onPress={() => console.log('ok !')}
                iconName="clock"
            />
            <FormButton
                buttonTitle="Paramètres"
                onPress={() => console.log('ok !')}
                iconName="settings"
            />
            <FormButton
                buttonTitle="A propos de nous"
                onPress={() => console.log('ok !')}
                iconName="info"
            />
            <FormButton
                buttonTitle="Informations légales"
                onPress={() => console.log('ok !')}
                iconName="book"
            />
            <FormButton
                buttonTitle="Aide"
                onPress={() => console.log('ok !')}
                iconName="help-circle"
            />
            <FormButton
                buttonTitle="Paramètres des cookies"
                onPress={() => console.log('ok !')}
                iconName="lock"
            />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('ok !')}>
                    <Text style={styles.buttonText}>Politique de Confidentialité</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('ok !')}>
                    <Text style={styles.buttonText}>Conditions générales</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        //marginTop: 10,
        //width: '100%',
        //height: 50,
        //backgroundColor: '#fff',
        marginVertical: 15,
        justifyContent: 'center',
        marginHorizontal : 10
        //borderRadius: 6,
    },
    buttonText: {
        fontSize: 13,
        color: '#fff',
    },
});