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
});
