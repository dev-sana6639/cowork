import React from 'react';
import {onboardStack,authStack} from '../config/navigator';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardScreen from '../screens/Onboard/Onboarding'
import OnboardScreen1 from '../screens/Onboard/pages/OnboardScreen1'
import OnboardScreen2 from '../screens/Onboard/pages/OnboardScreen2';
import OnboardScreen3 from '../screens/Onboard/pages/OnboardScreen3';
import LoginScreen from '../screens/Auth/Login';
import RegisterScreen from '../screens/Auth/Register'
import AuthScreen from '../screens/Auth/AuthScreen';



const Stack = createStackNavigator();

function OnboardStack() {
    return(
        <Stack.Navigator initialRouteName={onboardStack.onboard}>
            <Stack.Screen options={{headerShown: false}} name={onboardStack.onboard} component={OnboardScreen} />
            <Stack.Screen options={{headerShown: false}} name={onboardStack.onboard1} component={OnboardScreen1} />
            <Stack.Screen options={{headerShown: false}} name={onboardStack.onboard2} component={OnboardScreen2} />
            <Stack.Screen options={{headerShown: false}} name={onboardStack.onboard3} component={OnboardScreen3} />
            {/* <Stack.Screen options={{headerShown: false}} name={onboardStack.AuthScreen} component={AuthScreen} />
            <Stack.Screen options={{headerShown: false}} name={onboardStack.login} component={LoginScreen} />
            <Stack.Screen options={{headerShown:false}} name={onboardStack.Register} component={RegisterScreen} />
        */}
            
        </Stack.Navigator>
    )
}

export default OnboardStack;