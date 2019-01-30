import React, { Component } from 'react';
import {
  Image,
  Dimensions
} from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Images from '@assets/images'

import LoginActivity from '../activities/AuthActivity/LoginActivity/LoginActivity'
import OTPActivity from '../activities/AuthActivity/LoginActivity/OTPActivity'

import OfferActivity from '../activities/OfferActivity/OfferActivity'
import StartActivity from '../activities/OrderActivity/StartActivity/StartActivity'
import SummaryActivity from '../activities/OrderActivity/SummaryActivity/SummaryActivity'
import MenuActivity from '../activities/MenuActivity/MenuActivity'

const {height,width} = Dimensions.get('window')

export const authNavigator = createStackNavigator({
  Login: LoginActivity,
  OTP: OTPActivity,

})

export const mainNavigator = createBottomTabNavigator ({
  Pesanan: {
    screen: OfferActivity
  },
  Performa: {
    screen: StartActivity
  },
  Menu: {
    screen: MenuActivity
  },
  Pengaturan: {
    screen: SummaryActivity
  }
},

{
  tabBarOptions: {
    activeTintColor: '#FB4A6F',
    inactiveTintColor: '#424242',
    style: {
      backgroundColor: '#ffff',
      elevation: 15,
    }
  }
})