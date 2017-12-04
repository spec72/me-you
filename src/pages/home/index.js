"use strict";

import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Alert,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import Button from "react-native-button";

import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";
import { NavBar } from "../../components/index";
import ActionSheet from "react-native-actionsheet";
import ImagePicker from "react-native-image-picker";

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarSource: ""
    };

  }

  componentDidMount() {
    Alert.alert(
      "Hang on in there",
      "You will receive your first message tomorrow morning. Looking forward to kicking off this journey with you.",
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    );
  }

  menuClicked() {
    this.ActionSheet.show();
  }

  onMenuItemPressed(index) {
    let navigation = this.props.navigation;

    switch (index) {
    case 0:
      break;
    case 1:
      navigation.navigate("About");
      break;
    case 2:
      navigation.navigate("You");
      break;
    case 3:
      break;
    case 4:
      navigation.navigate("TermsAndPrivacy");
      break;
    default:
      break;
    }
  }

  avatarClicked() {
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);
      
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
    
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <View style={styles.noimgContainer}>
            <Text
              style={{
                width: Metrics.screenWidth * 0.6,
                height: Metrics.screenHeight * 0.1,
                textAlign: "center"
              }}
            >
              Your favorite photo can be here. Add them in options.
            </Text>
          </View>
        </View>
        <View style={styles.bottombarContainer}>
          <View style={styles.actions}>
            <TouchableOpacity
              style={{
                width: Metrics.screenHeight * 0.075,
                height: Metrics.screenHeight * 0.075,
                borderRadius: Metrics.screenHeight * 0.0375,
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={this.menuClicked.bind(this)}
            >
              <Image
                source={Assets.menu}
                style={{ flex: 1 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: Metrics.screenHeight * 0.1,
                bottom: 0,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 10 }}>Actions</Text>
            </View>
          </View>
          <Image
            source={Assets.logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.profile}>
            <TouchableOpacity
              style={{
                width: Metrics.screenHeight * 0.075,
                height: Metrics.screenHeight * 0.075,
                borderRadius: Metrics.screenHeight * 0.0375,
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={this.avatarClicked.bind(this)}
            >
              <Image
                source={this.state.avatarSource == "" ? Assets.avatar : this.state.avatarSource}
                style={{
                  width: Metrics.screenHeight * 0.075,
                  height: Metrics.screenHeight * 0.075,
                  borderRadius: Metrics.screenHeight * 0.0375,
                  backgroundColor: "red",
                }}
                resizeMode="center"
              />
            </TouchableOpacity>
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: Metrics.screenHeight * 0.1,
                bottom: 0,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 10 }}>James</Text>
            </View>
          </View>
        </View>
        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          options={[
            "Actions",
            "About",
            "You",
            "Rate this app",
            "Terms & Conditions / Privacy Policy",
            "Give Feedback",
            "Cancel"
          ]}
          cancelButtonIndex={6}
          onPress={this.onMenuItemPressed.bind(this)}
        />
      </View>
    );
  }
}
