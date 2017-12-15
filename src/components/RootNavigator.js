"use strict";

import { StackNavigator } from "react-navigation";
import { Platform } from 'react-native';
// Import Pages
import WelcomeScreen from "@pages/welcome";
import TermsScreen from "@pages/terms";
import PrivacyPolicyScreen from "@pages/privacy";
import ProfileScreen from "@pages/profile";
import HomeScreen from "@pages/home";
import AboutScreen from "@pages/about";
import TermsAndPrivacyScreen from "@pages/termsandprivacy";
import YouScreen from "@pages/you";
import NotificationScreen from "@pages/notification";
import ActionsScreen from "@pages/actions";

const RootNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
  },
  Terms: {
    screen: TermsScreen,
  }, 
  Privacy: {
    screen: PrivacyPolicyScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen,
  },
  TermsAndPrivacy: {
    screen: TermsAndPrivacyScreen,
  },
  You: {
    screen: YouScreen,
  },
  Notification: {
    screen: NotificationScreen
  },
  Actions: {
    screen: ActionsScreen
  }
}, {
  navigationOptions: {
    gesturesEnabled: false,
  },
  initialRouteName: "Home",
  headerMode: 'none',
});

export default RootNavigator;