"use strict";

import React, { Component } from "react";

import { Platform, StyleSheet, Text, Image, View, ScrollView } from "react-native";
import Button from "react-native-button";

import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";

export default class TermsScreen extends Component {
  constructor() {
    super();
  }

  description = "Our journey begins.  We’re together for the next 90 days. Thank you for installing. And well done – it means you’ve taken a decision to change how you are feeling about whatever is troubling you.  Good.  Very good. \n\nLike you, I’ve been through a few challenging times and fought hard to get out of them as a better person. There was one such time where I lost my self-esteem, my confidence, felt very alone, felt fear  for what lay ahead, got anxiety attacks and was stuck in a rut of thinking negative thoughts. I remember having problems sleeping.  And the more I didn't sleep, the more negative I felt.  The more negative I felt, the more these thoughts went round in my mind. Vicious circle! \n\nAnd through that, I took the opportunity to lay better foundations for who I was - lasting ones…  built on the right thoughts. \n\nDuring this time, I kept looking for ways to get myself out of the huge sadness I was feeling and to accept the situation that had made me feel this sadness.  I read many self-help books, signed up to many newsletters, anything I could get my hands on that would, in any way, help me get over that. An important turning point for me was when I was surfing the net trying to find anything that would help me change my thoughts, and I came across an article about what happens in the brain when a person is feeling depressed – negative thoughts keep lighting up the same neural pathways in the brain and, just like water makes a deeper trough if always flowing in the same place, same with these pathways.  The same (negative thoughts) electrical impulses keep lighting up and creating deeper troughs, and positive thoughts are needed to start lighting up other neural pathways (and get the water to flow down a different path) .\n\nThis program is designed to help you do that.  It’s based on information and tools that worked in different ways for me over the years to help me fight negative thoughts - and I’ve put this together to help me precisely take the best of all that and speed up the process by using very short targeted messages consistently. I took bits and pieces from everywhere to create this program – which I have designed mostly for myself. I quote many of the guides that have come into my life in random moments - Louise Hay, Wayne Dyer, Tony Robbins, Mike Dooley, Anthony de Mello and others. You can find your own guides… but here, I am passing on wisdom from the guides that have come to me.   There are also some actions that I recommend for you to do and you will find these messages in the Action Library when you receive them. \n\nThere is continuity in the messages, so best to read all as they come in, even if you might need to action some in your own time. I will suggest things for you to do that will require minimal effort from you - unless you think dancing to a song I recommend is an effort?   If you haven't got time to action the action items, save them until you have the time.  Do try to action immediately though. You may want to hold on to some in the Actions library and not delete them.  And by the way, I don't get commission from any of the links – they are simply there to make it easier for you to get to something I recommend.\n\nWhy have I created this app?  Because I believe that consistently receiving simple positive messages, reminders, actions and guidance can change your thoughts and hence change your life.  \n\nNegative thoughts can be powerful and can control.  No more!  Get out of the rut! \n\nI hope you will enjoy this app and our journey together.  Let’s create some good habits.  There’s something new to think about, all the way to the end. It aims to help you re-wire your neural pathways so that positive electrical impulses light up different parts of your brain. The universe doesn’t respond to words but to energy... so send it out there... fake it till you feel it. As Louis Gay said ‘your thinking can change your life’.  It can be as simple from saying ‘I can’t’ to ‘I can’.  Let me help you… a bit of handholding – me&you together.  Consider me your friend in an app. \n\nOh and by the way, I’m still learning too. This app is proof of that. As Mike Dooley says ‘we teach best what we most need to learn’.  I want you to enjoy the experience…and the soundtrack.  Move those hips    These next 90 days are just part of your journey. Enjoy it. Live it fully. Be it. Give yourself a chance and allow it to come into your life. \n\nNow let’s try and have fun with this.\nIt’s a choice."; 

  onNextBtnClicked() {
    const { navigate } = this.props.navigation;
    navigate('Profile');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Before continuing, please accept the Terms &amp; Conditions
          </Text>
        </View>
        <View style={styles.descContainer}>
          <ScrollView style={{paddingLeft: Metrics.leftPadding, paddingRight: Metrics.rightPadding}}>
            <Text style={styles.description}>{this.description}</Text>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            containerStyle={styles.nextBtn}
            style={{fontSize: 20, color: 'white'}}
            onPress={() => this.onNextBtnClicked()}>
            Accept
          </Button>
        </View>
      </View>
    );   
  }
}
