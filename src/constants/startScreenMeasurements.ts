import { Dimensions } from 'react-native';

const MARGIN_TOP_PROCENT_TITLE = 0.0375;
const MARGIN_TOP_PROCENT_IMG = 0.06875;
const MARGIN_TOP_PROCENT_BUTTON = 0.05;
const MARGIN_TOP_PROCENT_TEXT_CONTEXT = 0.0125;

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

const MEASUREMENTS = {
  marginToFromTitleContainer: WINDOW_HEIGHT * MARGIN_TOP_PROCENT_TITLE,
  marginToFromButtonContainer: WINDOW_HEIGHT * MARGIN_TOP_PROCENT_BUTTON,
  marginToFromImageContainer: WINDOW_HEIGHT * MARGIN_TOP_PROCENT_IMG,
  marginToFromTextContentContainer:
    WINDOW_HEIGHT * MARGIN_TOP_PROCENT_TEXT_CONTEXT,
  windowWidth: WINDOW_WIDTH,
};

export default MEASUREMENTS;
