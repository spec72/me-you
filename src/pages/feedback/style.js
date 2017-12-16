import { StyleSheet } from "react-native";

import { Metrics, Colors } from "@theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor
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
});
