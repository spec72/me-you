import { StyleSheet } from "react-native";

import { Metrics, Colors } from "@theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f9f9f9"
  },
  imgContainer: {
    flex: 1,
    width: Metrics.screenWidth,
    justifyContent: "center",
    paddingTop: Metrics.statusbarHeight + Metrics.padding,
    paddingLeft: Metrics.padding,
    paddingRight: Metrics.padding,
    paddingBottom: Metrics.padding
  },
  noimgContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    borderColor: Colors.borderColor,
    borderStyle: "dashed",
    borderWidth: 0.5
  },
  bottombarContainer: {
    width: Metrics.screenWidth,
    flex: 0,
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    borderStyle: "solid",
    borderTopColor: Colors.borderColor,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Colors.barColor
  },
  actions: {
    flex: 0.3,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 0.4,
    height: 75,
  },
  profile: {
    flex: 0.3,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: Metrics.screenHeight * 0.175,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: Metrics.padding,
  },
  notification: {
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "white",
    padding: Metrics.padding
  }
});
