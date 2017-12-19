"use strict";

import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from "react-native";
import Button from "react-native-button";
import { NavBar } from "@components";
import ImagePicker from "react-native-image-picker";
import { connect } from "react-redux";

import { imageSet, affirmationSet } from "@actions/you";

import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";

let options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class YouScreen extends Component {
  constructor(props) {
    super(props);

    let userInfo = props.navigation.state.params.userInfo;
    
    this.state = {
      avatarSource: "",
      imageSource: "",
      userInfo: userInfo
    };

    if (userInfo && userInfo.avatar) {
      this.state = {
        ...this.state,
        avatarSource: userInfo.avatar
      };
    }

    if (userInfo && userInfo.image) {
      this.state = {
        ...this.state,
        imageSource: userInfo.image
      };
    }
  }

  description = "Change them as often as you need and set up a reminder to remind you daily.  Put the focus on what you want in life and add your affirmation as though you already have it – feel it and the happiness it is giving you because you have achieved it.\n\nInsert an image that makes you feel happy and that you can visualise in your mind when your mind needs to focus on something positive.  This could be your vision board too.";

  avatarClicked() {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can also display the image using data:
        this.setState({
          ...this.state,
          avatarSource: `data:image/jpg;base64,${response.data}`,
        });
      }
    });
  };

  selectImage() {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.setState({
          imageSource: `data:image/jpg;base64,${response.data}`
        });
      }
    });
  }

  goToNotification(){
    this.props.navigation.navigate("Notification");
  }

  goBack() {
    var userInfo = Object.assign({}, this.props.navigation.state.params.userInfo);
    if (this.state.imageSource)
      userInfo.image = this.state.imageSource;
    if (this.state.avatarSource)
      userInfo.avatar = this.state.avatarSource;

    AsyncStorage.setItem("userinfo", JSON.stringify(userInfo), (error) => {
      if (error) {
        Alert.alert(
          "Error",
          "Failed to save to the local storage.",
          [
            { 
              text: 'OK', 
              onPress: () => {
                console.log("You - localstorage saving error");
              }
            }
          ],
          { cancelable: false }
        );
        return;
      }
      this.props.navigation.state.params.refresh();
      this.props.navigation.goBack();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title={this.state.userInfo.name}
          left="Back"
          onLeft={ () => this.goBack() }
          right="Set time"
          onRight={ this.goToNotification.bind(this) }
        />
        <View style={{flex: 1, width: Metrics.screenWidth}}>
          <ScrollView style={{paddingHorizontal: Metrics.padding}}>
            <View style={styles.avatarContainer}>
              <TouchableOpacity
                style={styles.avatar}
                onPress={this.avatarClicked.bind(this)}
              >
                <Image
                  source={{uri: this.state.avatarSource}}
                  resizeMode="cover"
                  style={styles.avatar}
                />      
              </TouchableOpacity>
              <Text style={{ fontSize: 14, marginLeft: 10, color: "#2a2a2a" }}>
                Tap to add your photo
              </Text>
            </View>
            <Text style={{fontSize: 16, fontWeight: "600", marginTop: 10, lineHeight: 40}}>
              Only use positive words/images
            </Text>
            <Text style={{fontSize: 14}}>
              {this.description}
            </Text>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent:"space-between", marginTop: 10}}>
              <Text style={{fontSize: 16, fontWeight: "600"}}>
                Add your own affirmation:
              </Text>
              <Text style={{fontSize: 12, fontWeight: "bold"}}>
                {"Remind me: "}
                <Text style={{fontSize: 12, fontWeight: "normal"}}>
                  10:00
                </Text>
              </Text>
            </View>
            <TextInput 
              multiline={true}
              numberOfLines={10}
              placeholder="For example, I am fulfilled inside or I’ve got what it takes or I’ve let it go and I am happy"
              style={{ height: 100, marginTop: 10, fontStyle: "italic"}}
              />
            <View style={{flexDirection: "row", alignItems: "center", justifyContent:"space-between", marginTop: 10}}>
              <Text style={{fontSize: 16, fontWeight: "600"}}>
                Add your own image:
              </Text>
              <Text style={{fontSize: 12, fontWeight: "bold"}}>
                {"Remind me: "}
                <Text style={{fontSize: 12, fontWeight: "normal"}}>
                  12:00
                </Text>
              </Text>
            </View>
            {
              this.state.imageSource
              ?
              <TouchableOpacity onPress={this.selectImage.bind(this)}>
                <Image source={{uri: this.state.imageSource}} style={ styles.image } resizeMode="cover" />
              </TouchableOpacity>
              :
              <View style={ styles.imageContainer }>
                <TouchableOpacity onPress={this.selectImage.bind(this)}>
                  <Text style={{fontSize: 16, color: Colors.btnColor}}>
                    Tap here to add an image
                  </Text>
                </TouchableOpacity>
              </View>
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return ({
    // setImage: image => dispatch(imageSet(image)),
    // setAffirmation: affirmation => dispatch(affirmationSet(affirmation))
  });
}

export default connect(null, mapDispatchToProps) (YouScreen);

