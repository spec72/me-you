"use strict";

import React, { Component } from "react";

import { Platform, StyleSheet, Text, Image, View, ScrollView } from "react-native";
import Button from "react-native-button";
import { NavBar } from '@components';
import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";

export default class TermsAndPrivacyScreen extends Component {
  constructor() {
    super();
  }

  description1 = "\nTerms & Conditions\n\nWhy read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new. All of us can benefit from inspirational thoughts, so here are ten great ones.“Be more concerned with your character than with your reputation. Your character is what you really are while your reputation is merely what others think you are.” – Dale Carnegie“Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.” – Napoleon Hill“What lies behind us and what lies before us are tiny matters compared to what lies within us.” – Ralph Waldo Emerson“Some men see things as they are and say, “Why?” I dream of things that never were and say, “Why not?” – George Bernard Shaw“A small trouble is like a pebble. Hold it too close to your eye and it fills the whole world and puts everything out of focus. Hold it at a proper distance and it can be examined and properly classified. Throw it at your feet and it can be seen in its true setting, just one more tiny bump on the pathway of life.” – Celia Luce “Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.” – Carl Bard “I’m not telling you it is going to be easy – I’m telling you it’s going to be worth it” – Art Williams Motivational Sayings – AttitudeAttitude “There is little difference in people, but that little difference makes a big difference. The little difference is attitude. The big difference is whether it is positive or negative.” – W. Clement Stone“Nothing on earth can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.” – Thomas Jefferson “A person cannot directly choose his circumstances, but he can choose his thoughts, and so indirectly, yet surely, shape his circumstances.” – James Alle “Man often becomes what he believes himself to be. If I keep on saying to myself that I cannot do a certain thing, it is possible that I may end by really becoming incapable of doing it. On the contrary, if I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.” – Mohandas Karamchand (Mahatma) Gandhi These are quotes that mean something to me. Hopefully one or two of them are also inspiring to you. If not, maybe they will motivate you to create your own motivational sayings.\n"; 

  description2 = "\nPrivacy Policy\n\nWhy read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new. All of us can benefit from inspirational thoughts, so here are ten great ones.“Be more concerned with your character than with your reputation. Your character is what you really are while your reputation is merely what others think you are.” – Dale Carnegie“Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.” – Napoleon Hill“What lies behind us and what lies before us are tiny matters compared to what lies within us.” – Ralph Waldo Emerson“Some men see things as they are and say, “Why?” I dream of things that never were and say, “Why not?” – George Bernard Shaw“A small trouble is like a pebble. Hold it too close to your eye and it fills the whole world and puts everything out of focus. Hold it at a proper distance and it can be examined and properly classified. Throw it at your feet and it can be seen in its true setting, just one more tiny bump on the pathway of life.” – Celia Luce “Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.” – Carl Bard “I’m not telling you it is going to be easy – I’m telling you it’s going to be worth it” – Art Williams Motivational Sayings – AttitudeAttitude “There is little difference in people, but that little difference makes a big difference. The little difference is attitude. The big difference is whether it is positive or negative.” – W. Clement Stone“Nothing on earth can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.” – Thomas Jefferson “A person cannot directly choose his circumstances, but he can choose his thoughts, and so indirectly, yet surely, shape his circumstances.” – James Allen“Man often becomes what he believes himself to be. If I keep on saying to myself that I cannot do a certain thing, it is possible that I may end by really becoming incapable of doing it. On the contrary, if I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.” – Mohandas Karamchand (Mahatma) Gandhi These are quotes that mean something to me. Hopefully one or two of them are also inspiring to you. If not, maybe they will motivate you to create your own motivational sayings.\n\n\n"

  render() {
    return (
      <View style={styles.container}>
        <NavBar title="Terms &amp; Privacy Policy" left="Back" onLeft={() => {
          this.props.navigation.goBack();
        }} />
        <View style={styles.descContainer}>
          <ScrollView style={{paddingLeft: Metrics.padding, paddingRight: Metrics.padding}}>
            <Text style={styles.description}>{this.description1 + this.description2}</Text>
          </ScrollView>
        </View>
      </View>
    );   
  }
}
