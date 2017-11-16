import { StyleSheet } from "react-native";

import { Metrics, Colors } from "@theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: Colors.bgColor
  },
  titleContainer: {
    flex: 0.15,
    // alignItems: "center",
    justifyContent: "center",
    paddingLeft: Metrics.leftPadding,
    paddingRight: Metrics.rightPadding,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  descContainer: {
    flex: 0.75,
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
    borderRadius: 5,
    backgroundColor: Colors.btnColor,
  }
});
