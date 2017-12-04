"use strict";

import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Picker,
  Alert,
  Platform,
  TouchableHighlight
} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Button from "react-native-button";
import ImagePicker from "react-native-image-picker";
import { Circle } from "react-native-progress";
import ImageResizer from "react-native-image-resizer";
const Item = Picker.Item;

import { FirebaseProvider } from "@provider/fireprovider";
import { NavBar } from "@components";

import Assets from "@assets";
import { Metrics, Colors } from "@theme";
import styles from "./style";

var options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

export default class ProfileScreen extends Component {
  yearList = [];

  constructor() {
    super();
    this.state = {
      curYear: new Date().getFullYear(),
      gender: 0,
      avatarSource: Assets.avatar,
      name: "",
      progress: false
    };
    for (var i = 1900; i <= 2050; i++) this.yearList.push(i);
  }

  /**
   * avatar clicked
   */
  avatarClicked() {
    ImagePicker.launchImageLibrary(options, response => {
      // Same code as in above section!
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          avatarSource: source
        });
      }
    });
  }

  /**
   * gender segmented ui state changed
   * @param {*} index 
   */
  handleGenderChange(index) {
    this.setState({
      ...this.state,
      gender: index
    });
  }

  /**
   * birthyear picker selection changed
   * @param {*} key 
   * @param {*} value 
   */
  birthyearChanged(key, value) {
    // console.log(key, value);
    this.setState({ curYear: key });
  }

  /**
   * save btn clicked to go forward
   */
  onSaveBtnClicked() {
    const { navigate } = this.props.navigation;

    // Check if username is not empty or not
    if (this.state.name.length === 0) {
      Alert.alert(
        "Error",
        "Name can't be empty!",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: false }
      );
      return;
    }
    // For Test
    navigate('Home');
    
    // this.setState({
    //   ...this.state,
    //   progress: true
    // });
    // // Resizing the image and then save to the firebase db and storage
    // var uri = "";
    // if (this.state.avatarSource.uri == undefined) {
    //   uri = this.state.avatarSource;
    // } else {
    //   uri =
    //     Platform.OS === "ios"
    //       ? this.state.avatarSource.uri.replace("file://", "")
    //       : this.state.avatarSource.uri;
    // }

    // ImageResizer.createResizedImage(uri, 300, 300, "JPEG", 80)
    //   .then(response => {
    //     console.log("response", response);
    //     this.setState({
    //       ...this.state,
    //       avatarSource: { uri: response.uri }
    //     });
    //     FirebaseProvider.addUser(
    //       response.uri,
    //       this.state.name,
    //       this.state.curYear,
    //       this.state.gender
    //     )
    //       .then(res => {
    //         this.setState({
    //           ...this.state,
    //           progress: false
    //         });
    //         navigate("Home");
    //       })
    //       .catch(error => {
    //         Alert.alert(
    //           "Error",
    //           error,
    //           [
    //             {
    //               text: "OK",
    //               onPress: () => {
    //                 console.log(error);
    //               }
    //             }
    //           ],
    //           { cancelable: false }
    //         );
    //       });
    //   })
    //   .catch(err => {
    //     Alert.alert(
    //       "Error",
    //       err,
    //       [
    //         {
    //           text: "OK",
    //           onPress: () => {
    //             console.log(err);
    //           }
    //         }
    //       ],
    //       { cancelable: false }
    //     );
    //   });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar title="Let's begin" />
        <View style={styles.avatarContainer}>
          <TouchableHighlight
            style={styles.avatar}
            onPress={this.avatarClicked.bind(this)}
          >
            <Image
              source={this.state.avatarSource == "" ? Assets.avatar : this.state.avatarSource}
              resizeMode="cover"
              style={styles.avatar}
            />
          </TouchableHighlight>
          <Text style={{ fontSize: 16, marginLeft: 10, color: "#2a2a2a" }}>
            Tap to add your photo
          </Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Name</Text>
          <TextInput
            editable
            placeholder="Name"
            placeholderTextColor="#a6a6a6"
            style={styles.nameinput}
            onChangeText={text => this.setState({ ...this.state, name: text })}
            value={this.state.name}
          />
        </View>
        <View style={styles.birthyearLabel}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Year of Birth
          </Text>
        </View>
        <Picker
          style={styles.birthyearPicker}
          selectedValue={this.state.curYear}
          onValueChange={this.birthyearChanged.bind(this)}
        >
          {this.yearList.map((value, index) => {
            if (value === this.state.curYear) {
              return (
                <Item
                  key={index}
                  label={"" + value}
                  value={value}
                  color={Colors.btnColor}
                />
              );
            }
            return <Item key={index} label={"" + value} value={value} />;
          })}
        </Picker>
        <View style={styles.birthyearLabel}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Gender</Text>
        </View>
        <View style={styles.genderContainer}>
          <SegmentedControlTab
            values={["Female", "Male"]}
            selectedIndex={this.state.gender}
            onTabPress={this.handleGenderChange.bind(this)}
            tabsContainerStyle={{ height: Metrics.screenHeight * 0.05 }}
            tabStyle={{
              borderWidth: 1,
              backgroundColor: "#ffffff",
              borderColor: Colors.btnColor
            }}
            tabTextStyle={{ color: Colors.btnColor }}
            activeTabStyle={{ backgroundColor: Colors.btnColor }}
            activeTabTextStyle={{ color: "white" }}
          />
        </View>
        <View style={{ flex: 0.15 }} />

        <View style={styles.buttonContainer}>
          <Button
            containerStyle={styles.saveBtn}
            style={{ fontSize: 20, color: "white" }}
            onPress={() => this.onSaveBtnClicked()}
          >
            Save &amp; Next
          </Button>
        </View>
        {this.state.progress ? (
          <View style={styles.progressbarContainer}>
            <Circle
              ref="progresbar"
              size={Metrics.spinnerSize}
              indeterminate={true}
              borderWidth={5}
              color="white"
            />
          </View>
        ) : null}
      </View>
    );
  }
}
