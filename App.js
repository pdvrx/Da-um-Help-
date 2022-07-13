import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TelaLogin from './pages/TelaLogin';
import TelaCadastro from './pages/TelaCadastro';
import Feed from './pages/Feed';


const Stack = createStackNavigator();

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Logins">
        <Stack.Screen  name="Login" component={TelaLogin}/>
        <Stack.Screen name="Cadastro" component={TelaCadastro}/>
        <Stack.Screen name="Feed" component={Feed}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

