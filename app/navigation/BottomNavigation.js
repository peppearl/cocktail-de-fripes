import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { BottomNavigation } from 'react-native-paper';
import BlogStackScreen from "../stack/BlogStackScreen";

const HomeRoute = () => <HomeScreen/>;
const BlogRoute = () => <BlogStackScreen />;

export default function BottomNav() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home', color: '#3F51B5' },
        { key: 'blog', title: 'Blog', icon: 'pen', color: '#009688' },
    ]);

    const renderScene = ({route}) => {
        switch (route.key) {
            case 'home':
                return <HomeRoute />;
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