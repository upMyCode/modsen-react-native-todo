import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const DEVIATION_FACTOR_HEIGHT = 10;

const FIRSTCIRCLE_PROCENT = 0.3672;
const SECONDCIRCLE_PROCENT = 0.436;

const FIRST_CIRCLE_HEIGHT =
  windowHeight * FIRSTCIRCLE_PROCENT + DEVIATION_FACTOR_HEIGHT;
const SECONDCIRCLE_HEIGHT =
  windowHeight * SECONDCIRCLE_PROCENT + DEVIATION_FACTOR_HEIGHT;
const FIRST_CIRCLE_WIDTH = windowHeight * FIRSTCIRCLE_PROCENT;
const SECONDCIRCLE_WIDTH = windowHeight * SECONDCIRCLE_PROCENT;

const CIRCLES_DIMENSIONS = {
  firstCircleHeight: FIRST_CIRCLE_HEIGHT,
  secondCircleHeight: SECONDCIRCLE_HEIGHT,
  firstCircleWidth: FIRST_CIRCLE_WIDTH,
  secondCircleWidth: SECONDCIRCLE_WIDTH,
};

export default CIRCLES_DIMENSIONS;
