"use strict";

import React, { Component } from "react";

import { Platform, StyleSheet, Text, Image, View, ScrollView } from "react-native";
import Button from "react-native-button";
import { NavBar } from '@components';
import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";

export default class AboutScreen extends Component {
  constructor() {
    super();
  }

  description = "\nHello, I am here for you.  Let's do this together.	\n\nBad time, needed to change the neural pathways to stop thinking same bad thoughts; scientifically….\n\nYour affirmations and your images change as you go along.  I encourage you to change them and keep them fresh.  Evolve!\n\nwe all have our own story and reasons why we are now feeling this way.  What we feel though, can be similar in many cases.   If any of you, like me, felt loss - loss of my familiar world, loss of self-esteem, loss of confidence….If you feel fear - fear of being alone, fear of no longer knowing any single friends, fear of not going to find love again, fear of not being able to pay bills on your own…. If any of you feel lonely - not having anyone to talk to, to have dinner with, to cuddle with, to touch you, to share a smile with then perhaps I can help.  Because I used to consider myself a strong person but suddenly I felt all that… and I felt very small, very lost, very afraid.  I knew the road immediately ahead was going to be difficult, but I was just seeing darkness and was beginning to believe that the whole road for the rest of my life was going to be difficult.  So, I had to fight for myself to get unstuck from that situation.  and today, I feel that it was all so necessary to build the me who has stronger foundations…and the me who feels truly happy and content inside, even if I am still on my own.  It took a while for me to get to this truly happy state - and I am grateful for the trauma that i went through, because i doubt that i would have reached this happy state ever.  Here I am now though - and I've learnt a lot along the way and that is why I have created this app.  Number one lesson I learnt is that needed constant reminders to get out of my thinking rut.  I hope that I can help you along the way to 										"; 

  render() {
    return (
      <View style={styles.container}>
        <NavBar title="About" left="Back" onLeft={() => {
          this.props.navigation.goBack();
        }} />
        <View style={styles.descContainer}>
          <ScrollView style={{paddingLeft: Metrics.padding, paddingRight: Metrics.padding}}>
            <Text style={styles.description}>{this.description}</Text>
          </ScrollView>
        </View>
      </View>
    );   
  }
}
