"use strict";

import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback, 
  Keyboard
} from "react-native";
import Button from "react-native-button";
import Mailer from "react-native-mail";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";
import { NavBar } from "../../components/index";

const DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};

const DismissKeyboardView = DismissKeyboardHOC(View)

class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
  }

  onSendBtnClicked() {
    Mailer.mail(
      {
        subject: "Me&You",
        recipients: ["sonyapecorella@hotmail.com"],
        body: "<b>A Bold Body</b>",
        isHTML: true
      },
      (error, event) => {
        this.props.navigation.goBack();
      }
    );
  }

  goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar title="Feedback" left="Back" onLeft={() => this.goBack()} />
          <View style={{flex: 0.9, width: Metrics.screenWidth}}>
            <DismissKeyboardView
              style={{
                flex: 0.5,
                width: Metrics.screenWidth,
                padding: Metrics.padding                  
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold", lineHeight: 40 }}>
                {" "}
                What features would you like to see?{" "}
              </Text>
              <TextInput
                style={{
                  flex: 1,
                  backgroundColor: Colors.barColor,
                  fontSize: 14,
                }}
                placeholder="Tap to Write"
                multiline={true}
                numberOfLines={10}
              />
            </DismissKeyboardView>
            <DismissKeyboardView
              style={{
                flex: 0.5,
                width: Metrics.screenWidth,
                padding: Metrics.padding
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold", lineHeight: 40 }}>
                {" "}
                What do you like at least about this app?{" "}
              </Text>
              <TextInput
                style={{
                  flex: 1,
                  backgroundColor: Colors.barColor,
                  fontSize: 14
                }}
                placeholder="Tap to Write"
                multiline={true}
                numberOfLines={10}
              />
            </DismissKeyboardView>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              containerStyle={styles.saveBtn}
              style={{ fontSize: 20, color: "white" }}
              onPress={() => this.onSendBtnClicked()}
            >
              Send
            </Button>
          </View>
        </View>
    );
  }
}

export default FeedbackScreen;
