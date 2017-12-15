"use strict";

import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  Picker,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";

import { NavBar } from "@components";

import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";


export default class NotificationScreen extends Component {
  hourList = [];
  minuteList = [];

  constructor() {
    super();
    this.state = {
      affirmationHours: "00",
      affirmationMinutes: "00",
      imageHours: "00",
      imageMinutes: "00",
    };

    for (var i = 0; i <= 23; i++) {
      if (i < 10)
        this.hourList.push("0" + i);
      else
        this.hourList.push(i);
    }
    for (var i = 0; i <= 59; i++) {
      if (i < 10)
        this.minuteList.push("0" + i);
      else
        this.minuteList.push(i);
    } 
  }

  affirmationHoursChanged = (key, value) => {
    this.setState({
      ...this.state,
      affirmationHours: key
    });
  }

  affirmationMinutesChanged = (key, value) => {
    this.setState({
      ...this.state,
      affirmationMinutes: key
    });
  }

  imageHoursChanged = (key, value) => {
    this.setState({
      ...this.state,
      imageHours: key
    });
  }

  imageMinutesChanged = (key, value) => {
    this.setState({
      ...this.state,
      imageMinutes: key
    });
  }

  reset = () =>  {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="Notifications"
          left="Back"
          onLeft={ () => this.props.navigation.goBack() }
          right="Reset"
          onRight={ this.reset }
        />
        <View style={{flex: 1, width: Metrics.screenWidth}}>
          <View style={{flex: 0.5, width: Metrics.screenWidth, alignItems: "center", justifyContent: "center"}}>
            <Text style={{marginTop: 20, fontSize: 16, fontWeight: "bold", lineHeight: 40}}>
              Set daily reminder - affirmation
            </Text> 
            <View style={{flex: 1, flexDirection: "row"}}>
              <Picker
                style={{flex: 0.3}}
                selectedValue={this.state.affirmationHours}
                onValueChange={this.affirmationHoursChanged}
              >
                {this.hourList.map((value, index) => {
                  if (value === this.state.affirmationHours) {
                    return (
                      <Picker.Item
                        key={index}
                        label={"" + value}
                        value={value}
                        color={Colors.btnColor}
                      />
                    );
                  }
                  return <Picker.Item key={index} label={"" + value} value={value} />;
                })}
              </Picker>

              <Picker
                style={{flex: 0.3}}
                selectedValue={this.state.affirmationMinutes}
                onValueChange={this.affirmationMinutesChanged}
              >
                {this.minuteList.map((value, index) => {
                  if (value === this.state.affirmationMinutes) {
                    return (
                      <Picker.Item
                        key={index}
                        label={"" + value}
                        value={value}
                        color={Colors.btnColor}
                      />
                    );
                  }
                  return <Picker.Item key={index} label={"" + value} value={value} />;
                })}
              </Picker>
            </View>
          </View>
          <View style={{flex: 0.5, width: Metrics.screenWidth, alignItems: "center", justifyContent: "center"}}>
            <Text style={{marginTop: 20, fontSize: 16, fontWeight: "bold", lineHeight: 40}}>
              Set daily reminder - image
            </Text> 
            <View style={{flex: 1, flexDirection: "row"}}>
              <Picker
                  style={{flex: 0.3}}
                  selectedValue={this.state.imageHours}
                  onValueChange={this.imageHoursChanged}
                >
                  {this.hourList.map((value, index) => {
                    if (value === this.state.imageHours) {
                      return (
                        <Picker.Item
                          key={index}
                          label={"" + value}
                          value={value}
                          color={Colors.btnColor}
                        />
                      );
                    }
                    return <Picker.Item key={index} label={"" + value} value={value} />;
                  })}
                </Picker>

                <Picker
                  style={{flex: 0.3}}
                  selectedValue={this.state.imageMinutes}
                  onValueChange={this.imageMinutesChanged}
                >
                  {this.minuteList.map((value, index) => {
                    if (value === this.state.imageMinutes) {
                      return (
                        <Picker.Item
                          key={index}
                          label={"" + value}
                          value={value}
                          color={Colors.btnColor}
                        />
                      );
                    }
                    return <Picker.Item key={index} label={"" + value} value={value} />;
                  })}
                </Picker>
              </View>
          </View>
        </View>
      </View>
    );
  }
}
