"use strict";

import React, { Component } from "react";

import { Platform, StyleSheet, Text, Image, View, ScrollView, Alert, TouchableHighlight } from "react-native";
import Button from "react-native-button";

import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";
import { NavBar } from "../../components/index";

export default class HomeScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    Alert.alert("Hang on in there", "You will receive your first message tomorrow morning. Looking forward to kicking off this journey with you.", [
      {text: 'OK', onPress: () => {}},
    ], { cancelable: false } );
  }

  menuClicked() {

  }
  
  avatarClicked() {

  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.imgContainer}>
          <View style={ styles.noimgContainer }>
            <Text style={{width: Metrics.screenWidth * 0.6, height: Metrics.screenHeight * 0.1, textAlign: 'center'}}>
              Your favorite photo can be here. Add them in options.        
            </Text>
          </View>
        </View>
        <View style={styles.bottombarContainer}>
          <View style={styles.actions} >
            <TouchableHighlight style={{width: Metrics.screenHeight * 0.1, height: Metrics.screenHeight * 0.1, alignItems: 'center', justifyContent: 'center'}} onPress={this.menuClicked.bind(this)}>
              <Image source={Assets.menu} style={{flex: 1}} resizeMode="cover"/>
            </TouchableHighlight>
            <View style={{position: 'absolute',left:0, right:0, top:Metrics.screenHeight * 0.1, bottom: 0, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10}}>
                Actions
              </Text>
            </View>
          </View>
          <Image source={Assets.logo} style={ styles.logo } resizeMode="contain"/>
          <View style={styles.profile} >
            <TouchableHighlight style={{width: Metrics.screenHeight * 0.075, height: Metrics.screenHeight * 0.075, borderRadius: Metrics.screenHeight * 0.0375, alignItems: 'center', justifyContent: 'center' }} onPress={this.avatarClicked.bind(this)}>
              <Image source={Assets.avatar} style={{width: Metrics.screenHeight * 0.075, height: Metrics.screenHeight * 0.075, borderRadius: Metrics.screenHeight * 0.0375 }} resizeMode="contain"/>
            </TouchableHighlight>
            <View style={{position: 'absolute',left:0, right:0, top:Metrics.screenHeight * 0.1, bottom: 0, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 10}}>
                James
              </Text>
            </View>
          </View>
        </View>
      </View>
    );   
  }
}
