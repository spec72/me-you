"use strict";

import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { Metrics, Colors } from "@theme";
import Assets from "@assets";

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.topbar}>
        <View style={{ height: Metrics.statusbarHeight }} />
        <View style={styles.navbar}>
          <View style={styles.content}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          {
            this.props.left 
            ?
            <TouchableOpacity style={{flexDirection: "row", alignItems: "center", width: 40}} onPress={this.props.onLeft}>
              <Image
                source={ Assets.back }
                style={{ height: 24 }}
                resizeMode="contain"
              />
              <Text style={styles.left}>{this.props.left}</Text>
            </TouchableOpacity>
            :
            null
          }
          {
            this.props.right
            ?
            <TouchableOpacity style={styles.rightBtn} onPress={this.props.onRight}>
              <Text style={styles.right}>{this.props.right}</Text>
            </TouchableOpacity>
            :
            null
          }

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topbar: {
    width: Metrics.screenWidth,
    flex: 0,
    height: Metrics.navbarHeight + Metrics.statusbarHeight,
    backgroundColor: Colors.barColor
  },
  navbar: {
    backgroundColor: Colors.barColor,
    flex: 0,
    width: Metrics.screenWidth,
    height: Metrics.navbarHeight,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    paddingLeft: 5,
    paddingRight: 10,
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: Colors.titleColor
  },
  left: {
    fontSize: 16,
    fontWeight: "400",
    color: "#9B9B9B",
  },
  right: {
    fontSize: 16,
    fontWeight: "400",
    color: "#F6873C",
  },
});
