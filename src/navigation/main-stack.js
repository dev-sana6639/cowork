import React from 'react';
import {authStack,mainStack} from '../config/navigator';
import {createStackNavigator,TransitionSpecs } from '@react-navigation/stack';
import AuthStack from './auth-stack';
// import MyTabs from '../navigation/bottom-tabs';
import BottomTabs from './bottom-tabs';
import HomeScreen from '../screens/Home/Home'

const Stack = createStackNavigator();

const config = {
    Animation:'spring',
    gestureDirection: 'vertical',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

function MainStack() {

  console.log('mainstack')
    
    return(
        <Stack.Navigator
        initialRouteName={mainStack.bottomtabs}
        
        >
    
            <Stack.Screen options={{headerShown: false}} name={mainStack.bottomtabs} component={BottomTabs} />
            {/* // <Stack.Screen options={{headerShown: false}} name={mainStack.home} component={HomeScreen} /> */}
      
        </Stack.Navigator>
    )
}

export default MainStack;