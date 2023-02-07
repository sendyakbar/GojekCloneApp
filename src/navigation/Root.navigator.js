import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home.screen';
import ChatScreen from '../screens/Chat.screen';
import OrdersScreen from '../screens/Orders.screen';
import PromosScreen from '../screens/Promos.screen';
import MainBottomTab from '../components/MainBottomTab.component';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <Tab.Navigator tabBar={MainBottomTab}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Promos"
        component={PromosScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
