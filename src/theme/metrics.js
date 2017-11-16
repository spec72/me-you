'use strict';

import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  screenWidth: width,
  screenHeight: height,
  statusbarHeight: 20,
  leftPadding: 10,
  rightPadding: 10,
  topPadding: 10,
  bottomButtonWidth: width - 20,
  avatarWidth: height * 0.15 - 20,
};

export default metrics;
