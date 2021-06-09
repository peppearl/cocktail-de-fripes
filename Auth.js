import React, {useEffect, useState} from 'react';
import * as firebase from "firebase";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyB8k0kiGxZSiJyJSpEaTqcZw-jJKN9siUY",
    authDomain: "cocktail-de-fripes.firebaseapp.com",
    projectId: "cocktail-de-fripes",
    storageBucket: "cocktail-de-fripes.appspot.com",
    messagingSenderId: "290163580844",
    appId: "1:290163580844:web:ef5ed7a9c079e1aafc2409",
    measurementId: "G-7SKC4079Q1"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        });
    }, []);


    return (
        <AuthContext.Provider value={{currentUser}} >
            {children}
        </AuthContext.Provider>
    );
};