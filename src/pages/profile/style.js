import { StyleSheet } from "react-native";

import { Metrics, Colors } from "@theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: Colors.bgColor
  },
  avatarContainer: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: Metrics.leftPadding,
    paddingTop: Metrics.topPadding,
  },
  avatar: {
    width: Metrics.avatarWidth,
    height: Metrics.avatarWidth,
    borderRadius: Metrics.avatarWidth / 2,
  },
  nameContainer: {
    flex: 0.075,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: Metrics.leftPadding
  },
  nameinput: {
    width: Metrics.screenWidth - Metrics.avatarWidth - 40, 
    fontSize: 18, 
    marginLeft: 20, 
    color: Colors.itemColor,
  },
  birthyearLabel: {
    flex: 0.075,
    justifyContent: 'center',
    paddingLeft: Metrics.leftPadding,
  },
  birthyearPicker: {
    flex: 0.3,
  },
  genderContainer: {
    flex: 0.075,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: Metrics.leftPadding,
    paddingRight: Metrics.rightPadding,
  },
  buttonContainer: {
    flex: 0.1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: Metrics.leftPadding
  },
  saveBtn: {
    width: Metrics.bottomButtonWidth,
    padding: 10,
    overflow: "hidden",
    borderRadius: 5,
    backgroundColor: Colors.btnColor,
  }
});