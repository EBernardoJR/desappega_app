import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//components
import Home from './Pages/Home/index';
import Login from './Pages/Login/index';
import Signup from './Pages/Signup';
import About from './Pages/About';

const Stack = createStackNavigator();

export default function Routes_Main() {
  return (
    <NavigationContainer> 
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
            <Stack.Screen name='Index' component={Home} />
            <Stack.Screen name='About' component={About}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Signup' component={Signup}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}