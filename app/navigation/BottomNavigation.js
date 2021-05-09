import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import BlogStackScreen from "./BlogStackScreen";
import FavorisScreen from "../screens/FavorisScreen";
import ThriftStackScreen from "./ThriftStackScreen";

const ThriftRoute = () => <ThriftStackScreen/>;
const BlogRoute = () => <BlogStackScreen />;
const FavorisRoute = () => <FavorisScreen />;

export default function BottomNav() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'thrift', title: 'Carte', icon: 'map', color: '#3F51B5' },
        { key: 'favoris', title: 'Favoris', icon: 'heart', color: '#e04391' },
        { key: 'blog', title: 'Blog', icon: 'pen', color: '#009688' },
    ]);

    const renderScene = ({route}) => {
        switch (route.key) {
            case 'thrift':
                return <ThriftRoute />;
            case 'favoris':
                return <FavorisRoute />;
            case 'blog':
                return <BlogRoute />;
        }
    }
    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            shifting={true}
        />
    );
}