import React, { useEffect,useLayoutEffect } from 'react';

import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { rootSwitch, mainstack, onboardStack, authStack } from '../config/navigator'
import AuthStack from './auth-stack';

import { isLoginSelector,isAnonymousSelector } from '../modules/auth/selectors';
import {
    loadingSelector,
    isGettingStartSelector
} from '../modules/common/selectors';
const Stack = createStackNavigator();

import MainStack from './main-stack';
// import GetStartScreen from '../get-start';
import OnboardStack from './onboard-stack';


import { isgettingstart, isgettingStartended,startLoading,stopisLoading } from '../modules/common/actions';




function RootStack({ isGettingStart, isAnonymous, loading, isLogin, user }) {

//     const dispatch = useDispatch();

//    useLayoutEffect(() =>{
//     setTimeout(() => {  dispatch(isgettingStartended()) }, 3000);
//    })
 
console.log('came to root-Switch')

console.log('login is:',isLogin)
console.log('is getting start is',isGettingStart)
console.log('is Anonymous ',isAnonymous)


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {
                isGettingStart == true ? (
                    <Stack.Screen name={onboardStack.onboard} component={OnboardStack} />
                ) : isAnonymous != undefined || isLogin == true ? (
                    <Stack.Screen name={rootSwitch.main} component={MainStack} />
                     
                   
                ) :
                (
                    <Stack.Screen name={rootSwitch.auth} component={AuthStack} />      
                )

                                                        




            }

            {/* <Stack.Screen name={rootSwitch.main} component={MainStack} /> */}


        </Stack.Navigator>

    )
}

const mapStateToProps = state => {
 return {
        isGettingStart: isGettingStartSelector(state),
        // isLogin: isLoginSelector(state),
        // loading: loadingSelector(state),
        isLogin: isLoginSelector(state),
        isAnonymous: isAnonymousSelector(state)

    }

}

export default connect(mapStateToProps)(RootStack)
