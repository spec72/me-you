"use strict";

import React, { Component } from "react";

import { Platform, StyleSheet, Text, Image, View, ScrollView } from "react-native";
import Button from "react-native-button";

import { NavBar } from '@components';
import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";

export default class PrivacyPolicyScreen extends Component {
  constructor() {
    super();
  }

  description = "Our journey begins.  We’re together for the next 90 days. Thank you for installing. And well done – it means you’ve taken a decision to change how you are feeling about whatever is troubling you.  Good.  Very good. \n\nLike you, I’ve been through a few challenging times and fought hard to get out of them as a better person. There was one such time where I lost my self-esteem, my confidence, felt very alone, felt fear  for what lay ahead, got anxiety attacks and was stuck in a rut of thinking negative thoughts. I remember having problems sleeping.  And the more I didn't sleep, the more negative I felt.  The more negative I felt, the more these thoughts went round in my mind. Vicious circle! \n\nAnd through that, I took the opportunity to lay better foundations for who I was - lasting ones…  built on the right thoughts. \n\nDuring this time, I kept looking for ways to get myself out of the huge sadness I was feeling and to accept the situation that had made me feel this sadness.  I read many self-help books, signed up to many newsletters, anything I could get my hands on that would, in any way, help me get over that. An important turning point for me was when I was surfing the net trying to find anything that would help me change my thoughts, and I came across an article about what happens in the brain when a person is feeling depressed – negative thoughts keep lighting up the same neural pathways in the brain and, just like water makes a deeper trough if always flowing in the same place, same with these pathways.  The same (negative thoughts) electrical impulses keep lighting up and creating deeper "; 

  onAcceptBtnClicked() {
    const { navigate } = this.props.navigation;
    navigate('Terms');
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar title="Privacy Policy"/>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Before continuing, please accept the Privacy Policy. 
          </Text>
        </View>
        <View style={styles.descContainer}>
          <ScrollView style={{paddingLeft: Metrics.padding, paddingRight: Metrics.padding}}>
            <Text style={styles.description}>{this.description}</Text>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            containerStyle={styles.nextBtn}
            style={{fontSize: 20, color: 'white'}}
            onPress={() => this.onAcceptBtnClicked()}>
            Next
          </Button>
        </View>
      </View>
    );   
  }
}
