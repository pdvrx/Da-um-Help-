import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TelaLogin from './pages/TelaLogin';
import TelaCadastro from './pages/TelaCadastro';
import Feed from './pages/Feed';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Notification from './pages/Notification';
import Tabs from './components/Tabs'



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Tabs">
        <Stack.Screen  name="Login" component={TelaLogin}/>
        <Stack.Screen name="Cadastro" component={TelaCadastro}/>
        <Stack.Screen name="Feed" component={Feed}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Notification" component={Notification}/>
        <Stack.Screen name="Tabs" component={Tabs}/>

      </Stack.Navigator>


    </NavigationContainer>


  );
}

