import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home/Index';
import Settings from '../pages/Settings/Index';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
