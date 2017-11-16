"use strict";

import { StackNavigator } from "react-navigation";
import { Platform } from 'react-native';
// Import Pages
import WelcomeScreen from "@pages/welcome";
import TermsScreen from "@pages/terms";
import PrivacyPolicyScreen from "@pages/privacy";
import ProfileScreen from "@pages/profile";

const RootNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerTitle: "Welcome"
    }
  },
  Terms: {
    screen: TermsScreen,
    navigationOptions: {
      headerTitle: "Terms & Conditions",
      headerLeft: null,
    }
  }, 
  Privacy: {
    screen: PrivacyPolicyScreen,
    navigationOptions: {
      headerTitle: "Privacy Policy",
      headerLeft: null,
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: "Let's begin",
      headerLeft: null,
    },
  },
}, {
  navigationOptions: {
    gesturesEnabled: false,
  },
  initialRouteName: "Welcome",
  headerMode: Platform.OS=='ios' ? 'float' : 'screen',
});

export default RootNavigator;
