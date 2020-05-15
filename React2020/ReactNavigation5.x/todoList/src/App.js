import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoute from '../src/routes/Main.routes';

// import { Container } from './styles';

export default function src() {
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
}
