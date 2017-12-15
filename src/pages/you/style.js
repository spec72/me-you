import { StyleSheet } from "react-native";

import { Metrics, Colors } from "@theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor
  },
  avatarContainer: {
    height: Metrics.avatarWidth,
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
  imageContainer: {
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  }
});
