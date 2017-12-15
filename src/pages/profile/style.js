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
    paddingLeft: Metrics.padding,
    paddingTop: Metrics.padding,
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
    paddingLeft: Metrics.padding
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
    paddingLeft: Metrics.padding,
  },
  birthyearPicker: {
    flex: 0.3,
  },
  genderContainer: {
    flex: 0.075,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: Metrics.padding,
    paddingRight: Metrics.padding,
  },
  buttonContainer: {
    flex: 0.1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: Metrics.padding,
  },
  saveBtn: {
    width: Metrics.bottomButtonWidth,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: Colors.btnColor,
  },
  progressbarContainer: {
    position:'absolute', 
		left:0, 
		right:0, 
		top:0, 
		bottom:0, 
		backgroundColor: 'rgba(246, 135, 60, 0.8)',
		flex: 1,
		alignItems: 'center', 
		justifyContent:'center' 
  },
});