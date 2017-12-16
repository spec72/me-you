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
  TouchableOpacity,
  AsyncStorage,
  Clipboard,
  ImageBackground
} from "react-native";
import { SwipeRow } from 'react-native-swipe-list-view';

import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";
import { NavBar } from "../../components/index";

import TestData from "./testdata";

class ActionsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actionMessages: TestData
    };
  }

  goBack() {
    this.props.navigation.goBack();
  }

  actionMessageClicked(params) {
    let index = parseInt(params[0]);
    console.log(index);
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="Actions"
          left="Back"
          onLeft={ () => this.goBack() }
        />
        <ImageBackground source={Assets.actionsbg} style={ styles.banner } resizeMode="cover">
          <Text style={{fontSize: 32, lineHeight: 36, color: "white", backgroundColor: "transparent"}}> Go On! </Text>
          <Text style={{fontSize: 14, lineHeight: 24, color: "white", backgroundColor: "transparent"}}> Swipe left on action to delete </Text>
        </ImageBackground>
        <View style={{flex: 1, width: Metrics.screenWidth}}>
          <ScrollView style={{paddingHorizontal: Metrics.padding}}>
            {
              this.state.actionMessages.map((value, key) => {
                return(
                  <SwipeRow
                    key={key}
                    rightOpenValue={-80}>
                      <View style={styles.standaloneRowBack}>
                        <TouchableOpacity onPress={this.actionMessageClicked.bind(this, [key])}>  
                          <View style={{flex: 1, width: 80, backgroundColor: "red", alignItems: "center", justifyContent: "center"}}>
                            <Text style={styles.backTextWhite}>Delete</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                      <View style={ styles.messageItem }>
                        <Text style={{fontSize: 14, fontWeight: "bold", lineHeight: 20}}>
                          {value.genre}
                          <Text style={{fontSize: 14, fontWeight: "normal"}}>
                            &nbsp;{value.message}
                          </Text>
                        </Text>
                        {
                          value.title
                          ?
                          <TouchableOpacity>
                            <Text style={{ fontSize: 14, color: "blue", lineHeight: 20}}>
                              {value.title}
                            </Text>
                          </TouchableOpacity>
                          :
                          null
                        }
                      </View>
                    </SwipeRow>
                );
              })
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ActionsScreen;