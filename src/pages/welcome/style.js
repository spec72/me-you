import { StyleSheet } from "react-native";

import { Metrics, Colors } from "@theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.bgColor,
  },
  imgContainer: {
    flex: 0.2,
    width: Metrics.screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    flex: 1,
    width: Metrics.screenWidth,
  },
  titleContainer: {
    flex: 0.1,
    // alignItems: "center",
    justifyContent: "center",
    paddingLeft: Metrics.padding,
    paddingRight: Metrics.padding,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  descContainer: {
    flex: 0.6,
  },
  buttonContainer: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  nextBtn: {
    width: Metrics.bottomButtonWidth,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: Colors.btnColor,
  }
});
