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
  Clipboard
} from "react-native";
import ActionSheet from "react-native-actionsheet";
import ImagePicker from "react-native-image-picker";
import Share, { ShareSheet, Button } from "react-native-share";
import Rate from "react-native-rate";
import { connect } from "react-redux";

import {
  EMAIL_ICON,
  WHATSAPP_ICON,
  FACEBOOK_ICON,
  TWITTER_ICON,
  CLIPBOARD_ICON,
  MORE_ICON
} from "./icons";

import styles from "./style";
import Assets from "@assets";
import { Colors, Metrics } from "@theme";
import { NavBar } from "../../components/index";

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

var shareOptions = {
  title: "Me & You",
  message: "Share Message",
  url: "http://facebook.github.io/react-native/",
  subject: "Share Message", //  for email,
  excludedActivityTypes: ["email", "facebook"]
};

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarSource: "",
      userInfo: null,
      socialshare: false,
      image: "",
      profile: null
    };
  }

  componentWillMount() {
    this.refresh();
  }

  refresh() {
    AsyncStorage.getItem("userInfo", (error, result) => {
      if (error) {
        Alert.alert(
          "Error",
          "Failed to load from the local storage.",
          [
            {
              text: "OK",
              onPress: () => {
                console.log("HOME - localstorage loading error");
              }
            }
          ],
          { cancelable: false }
        );
      }
      let resultObj = JSON.parse(result);
      if (resultObj) {
        this.setState({
          ...this.state,
          userInfo: resultObj
        });
      }

      if (resultObj && resultObj.image) {
        this.setState({
          ...this.state,
          image: resultObj.image
        });
      }
      console.log("Home", this.state.userInfo);
    });
  }

  componentDidMount() {
    Alert.alert(
      "Hang on in there",
      "You will receive your first message tomorrow morning. Looking forward to kicking off this journey with you.",
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    );
  }

  menuClicked() {
    this.ActionSheet.show();
  }

  onMenuItemPressed(index) {
    let navigation = this.props.navigation;

    switch (index) {
      case 0:
        navigation.navigate("Actions");
        break;
      case 1:
        navigation.navigate("About");
        break;
      case 2:
        navigation.navigate("You", {
          refresh: this.refresh.bind(this),
          userInfo: this.state.userInfo
        });
        break;
      case 3:
        this.openRateApp();
        break;
      case 4:
        navigation.navigate("TermsAndPrivacy");
        break;
      default:
        break;
    }
  }

  shareBtnClicked() {
    // this.setState({
    //   ...this.state,
    //   socialshare: true
    // });
    Share.open(shareOptions).catch(err => {
      err && console.log(err);
    });
  }

  onCancelShare() {
    this.setState({
      ...this.state,
      socialshare: false
    });
  }

  avatarClicked() {
    ImagePicker.launchImageLibrary(options, response => {
      console.log("Response = ", response);

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

  openRateApp() {
    let options = {
      AppleAppID:"1308649398",
      GooglePackageName:"com.mywebsite.myapp",
      AmazonPackageName:"com.mywebsite.myapp",
      preferGoogle:true,
      preferInApp:true,
      fallbackPlatformURL:"http://www.mywebsite.com/myapp.html",
    };

    Rate.rate(options, (success)=>{
        if (success) {
          // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
          // this.setState({rated:true})
        }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.image ? (
          <Image
            style={{ flex: 1, width: Metrics.screenWidth }}
            resizeMode="cover"
            source={this.state.image}
          />
        ) : (
          <View style={styles.imgContainer}>
            <View style={styles.noimgContainer}>
              <Text
                style={{
                  width: Metrics.screenWidth * 0.6,
                  height: Metrics.screenHeight * 0.1,
                  textAlign: "center"
                }}
              >
                Your favorite photo can be here. Add it using menu.
              </Text>
            </View>
          </View>
        )}
        <View style={styles.bottombarContainer}>
          <View style={styles.actions}>
            <TouchableOpacity onPress={this.menuClicked.bind(this)}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={Assets.menu}
                  resizeMode="cover"
                  style={{ height: 50 }}
                />
                <Text style={{ fontSize: 10, color: "#A6A6A6" }}>Actions</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image
            source={Assets.logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.profile}>
            <TouchableOpacity onPress={this.avatarClicked.bind(this)}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={
                    this.state.avatarSource == ""
                      ? Assets.avatar
                      : this.state.avatarSource
                  }
                  resizeMode="cover"
                  style={{ height: 40, width: 40, borderRadius: 20 }}
                />
                <Text style={{ fontSize: 10, color: "#A6A6A6", marginTop: 10 }}>
                  James
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.notificationContainer}>
          <View style={styles.notification}>
            <TouchableOpacity
              onPress={this.shareBtnClicked.bind(this)}
              style={{ flexDirection: "row", alignItems: "center", height: 20 }}
            >
              <Image
                source={Assets.share}
                resizeMode="contain"
                style={{ width: 15 }}
              />
              <Text
                style={{ fontSize: 16, color: Colors.btnColor, marginLeft: 10 }}
              >
                {" "}
                Share this message{" "}
              </Text>
            </TouchableOpacity>
            <Text style={{ marginTop: 10 }}>
              “It is never too late to become what you might have been.” –
              GEORGE ELIOT I believe that we all reach certain key points in our
              lives.
            </Text>
          </View>
          <Image
            source={Assets.triangle}
            resizeMode="contain"
            style={{ height: 15 }}
          />
        </View>

        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          options={[
            "Actions",
            "About",
            "You",
            "Rate this app",
            "Terms & Conditions",
            "Privacy Policy",
            "Give Feedback",
            "Cancel"
          ]}
          cancelButtonIndex={7}
          onPress={this.onMenuItemPressed.bind(this)}
        />

        <ShareSheet
          visible={this.state.socialshare}
          onCancel={this.onCancelShare.bind(this)}
        >
          <Button
            iconSrc={{ uri: TWITTER_ICON }}
            onPress={() => {
              this.onCancelShare();
              setTimeout(() => {
                Share.shareSingle(
                  Object.assign(shareOptions, {
                    social: "twitter"
                  })
                );
              }, 300);
            }}
          >
            Twitter
          </Button>
          <Button
            iconSrc={{ uri: FACEBOOK_ICON }}
            onPress={() => {
              this.onCancelShare();
              setTimeout(() => {
                Share.shareSingle(
                  Object.assign(shareOptions, {
                    social: "facebook"
                  })
                );
              }, 300);
            }}
          >
            Facebook
          </Button>
          <Button
            iconSrc={{ uri: WHATSAPP_ICON }}
            onPress={() => {
              this.onCancelShare();
              setTimeout(() => {
                Share.shareSingle(
                  Object.assign(shareOptions, {
                    social: "whatsapp"
                  })
                );
              }, 300);
            }}
          >
            Whatsapp
          </Button>
          <Button
            iconSrc={{ uri: EMAIL_ICON }}
            onCancelShare={() => {
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(
                  Object.assign(shareOptions, {
                    social: "email"
                  })
                );
              }, 300);
            }}
          >
            Email
          </Button>
          <Button
            iconSrc={{ uri: CLIPBOARD_ICON }}
            onPress={() => {
              this.onCancelShare();
              setTimeout(() => {
                if (typeof shareOptions["url"] !== undefined) {
                  Clipboard.setString(shareOptions["url"]);
                  if (Platform.OS === "android") {
                    ToastAndroid.show(
                      "Link copiado al portapapeles",
                      ToastAndroid.SHORT
                    );
                  } else if (Platform.OS === "ios") {
                    AlertIOS.alert("Link copiado al portapapeles");
                  }
                }
              }, 300);
            }}
          >
            Copy Link
          </Button>
          <Button
            iconSrc={{ uri: MORE_ICON }}
            onPress={() => {
              this.onCancelShare();
              setTimeout(() => {
                Share.open(shareOptions);
              }, 300);
            }}
          >
            More
          </Button>
        </ShareSheet>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

export default connect(mapStateToProps, null)(HomeScreen);
