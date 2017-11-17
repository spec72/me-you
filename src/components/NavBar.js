"use strict";

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import { Metrics, Colors } from "@theme";

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.topbar}>
        <View style={{height: Metrics.statusbarHeight}} />
        <View style={styles.navbar}>
          <View style={styles.content}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topbar: {
    width: Metrics.screenWidth,
    height: Metrics.navbarHeight + Metrics.statusbarHeight,
    backgroundColor: Colors.barColor,
  },
  navbar: {
    backgroundColor: Colors.barColor,
    width: Metrics.screenWidth,
    height: Metrics.navbarHeight,
    justifyContent: "center",
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 0.5,
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: Colors.titleColor
  }
});
