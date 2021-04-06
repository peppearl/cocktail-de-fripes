import React from 'react';
import { Appbar } from 'react-native-paper';

export default function AppBar() {

    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home'},
        { key: 'blog', title: 'Blog'},
    ]);

    return (
        <Appbar.Header>
            <Appbar.Content title='Cocktail de Fripes' />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
};