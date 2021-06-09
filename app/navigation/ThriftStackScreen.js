import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

//import ThriftListStyle from '../thrifting/lists/ThriftListStyle';
//import ThriftListCity from '../thrifting/lists/ThriftListCity';
import ThriftScreen from '../screens/ThriftScreen';
import ThriftDetail from '../screens/ThriftDetail';
import CarteScreen from "../screens/CarteScreen";
import NewsList from "../friperie/lists/NewsList";

const StackThrift = createStackNavigator();

export default function ThriftStackScreen() {
    return (
        <StackThrift.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: '',
                headerTintColor: '#354362',
                headerLeftContainerStyle: {
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    marginLeft: 10,
                },
            }}
        >
            <StackThrift.Screen
                options={{ headerShown: false }}
                name='Carte'
                component={CarteScreen}
            />
            <StackThrift.Screen
                options={{ headerShown: false }}
                name='Friperies'
                component={ThriftScreen}
            />
            <StackThrift.Screen name='ThriftDetail' component={ThriftDetail} />
            <StackThrift.Screen name='NewsList' component={NewsList} />
        </StackThrift.Navigator>
    );
};
