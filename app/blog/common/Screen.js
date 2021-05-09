import React from 'react';
import { StyleSheet, StatusBar, ScrollView } from 'react-native';

export default function Screen ({ children, isSearchFocused }) {
    const keyboardShouldPersistTaps = isSearchFocused ? 'always' : 'never';
    return (
        <ScrollView
            keyboardShouldPersistTaps={keyboardShouldPersistTaps}
            scrollEnabled={!isSearchFocused}
            style={styles.container}
        >
            {children}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        flex: 1,
    },
});