import React from 'react';
import { Appbar } from 'react-native-paper';
//import SearchBar from '../components/SearchBar'

export default function AppBar() {

    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header>
            <Appbar.Content title='Cocktail de Fripes' />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
};