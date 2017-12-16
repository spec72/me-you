"use strict";

import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import Button from "react-native-button";

import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";
import { NavBar } from "../../components/index";

class FeedbackScreen extends Component {
  constructor(props) {
    super(props);
  }

  onSendBtnClicked() {

  }

  goBack() {
    this.props.navigation.goBack();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="Feedback"
          left="Back"
          onLeft={ () => this.goBack() }
        />
        <View style={{flex:0.9, width: Metrics.screenWidth}}>
          <View style={{flex: 0.5, width: Metrics.screenWidth, padding: Metrics.padding}}>
            <Text style={{fontSize: 16, lineHeight: 40}}> What features would you like to see? </Text>
            <TextInput 
              style={{flex: 1, backgroundColor: Colors.barColor, fontSize: 14}}
              placeholder="Tap to Write"
              multiline = {true}
              numberOfLines = {10}>
            </TextInput>
          </View>
          <View style={{flex: 0.5, width: Metrics.screenWidth, padding: Metrics.padding}}>
            <Text style={{fontSize: 16, lineHeight: 40}}> What do you like at least about this app? </Text>
            <TextInput 
              style={{flex: 1, backgroundColor: Colors.barColor, fontSize: 14}}
              placeholder="Tap to Write"
              multiline = {true}
              numberOfLines = {10}>
            </TextInput>
          </View>
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