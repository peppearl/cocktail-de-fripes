import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

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
        paddingHorizontal: 5,
        backgroundColor: '#FFF',
        flex: 1,
    },
});