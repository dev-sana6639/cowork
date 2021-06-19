import React from 'react';
import {authStack} from '../config/navigator';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/Login';
import RegisterScreen from '../screens/Auth/Register'
import AuthScreen from '../screens/Auth/AuthScreen';

const Stack = createStackNavigator();

function AuthStack() {
    console.log('Auth Stack')
    return(
        <Stack.Navigator initialRouteName={authStack.AuthScreen}>
            <Stack.Screen options={{headerShown: false}} name={authStack.AuthScreen} component={AuthScreen} />
            <Stack.Screen options={{headerShown: false}} name={authStack.login} component={LoginScreen} />
            <Stack.Screen options={{headerShown:false}} name={authStack.Register} component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack;