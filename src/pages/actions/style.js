import { StyleSheet } from "react-native";

import { Metrics, Colors } from "@theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor
  },
  banner: {
    flex: 0,
    width: Metrics.screenWidth,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  messageItem: {
    borderWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.borderColor,
    padding: Metrics.padding,
    alignItems: "flex-start",
    backgroundColor: Colors.bgColor
  },
  standaloneRowBack: {
		alignItems: 'flex-end',
		flex: 1,
    justifyContent: 'center',
    paddingVertical: Metrics.padding,
	},
	backTextWhite: {
    fontSize: 16,
    color: "white",
	}
});
