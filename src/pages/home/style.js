import { StyleSheet } from "react-native";

import { Metrics, Colors } from "@theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bgColor,
  },
  imgContainer: {
    flex: 0.85,
    width: Metrics.screenWidth,
    justifyContent: "center",
    paddingTop: Metrics.statusbarHeight + Metrics.padding,
    paddingLeft: Metrics.padding,
    paddingRight: Metrics.padding,
    paddingBottom: Metrics.padding,
  },
  noimgContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-end',
    borderColor: Colors.borderColor,
    borderStyle: "dashed",
    borderWidth: 0.5,
  },
  bottombarContainer: {
    flex: 0.15,
    width: Metrics.screenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    borderStyle: 'solid',
    borderTopColor: Colors.borderColor,
    borderTopWidth: 0.5,
    backgroundColor: Colors.barColor,
  },
  actions: {
    flex: 0.3,
    height: Metrics.screenHeight * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 0.4,
    height: Metrics.screenHeight * 0.15
  },
  profile: {
    flex: 0.3,
    height: Metrics.screenHeight * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
