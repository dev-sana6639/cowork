import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {rootSwitch,mainStack} from '../config/navigator';
import Home from '../screens/Home/Home';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ChatScreen from '../screens/chats/ChatScreen';
import BookingScreen from '../screens/bookings/BookingScreen';
import * as color from '../utils/colors';
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
       options={{
        tabBarLabel: 'Home',
      
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={
              focused
                ? require('../Assets/bottombaricons/Home_orange.png')
                : require('../Assets/bottombaricons/Home_icon.png')
            }
            style={{
              width: 25,
              height: 25,
            
            }}
          />
        ),

        tabBarOptions: { 
          activeTintColor: 'red',
          inactiveTintColor: '#fff',
  },
      }}
        name={mainStack.home}  component={Home} />
    <Tab.Screen
      options={{
        tabBarLabel: 'Book',
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={
              focused
                ? require('../Assets/bottombaricons/Booking_orange.png')
                : require('../Assets/bottombaricons/Booking_icon.png')
            }
            style={{
              width: 25,
              height: 25,
            
            }}
          />
        ),
      }}
    name={mainStack.book} component={BookingScreen} />
      <Tab.Screen
       options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={
              focused
                ? require('../Assets/bottombaricons/Chat_orange.png')
                // ../assets/bottombaricons/Chat_orange.png
                : require('../Assets/bottombaricons/Chat_icon.png')
            }
            style={{
              width: 25,
              height: 25,
              
            }}
          />
        ),
      }}
      name={mainStack.chat} component={ChatScreen} />
      <Tab.Screen
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused, color, size}) => (
              <Image
                source={
                  focused
                    ? require('../Assets/bottombaricons/profile_orange.png')
                    : require('../Assets/bottombaricons/Profile_icon.png')
                }
                style={{
                  width: 25,
                  height: 25,
              
                }}
              />
            ),
          }}
      name={mainStack.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default BottomTabs;