import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface TextContainerProps {
  marginToFromTitleContainer: number;
}

export interface RedirectionButtonWrapperProps {
  marginToFromButtonContainer: number;
}

export interface TextContentProps {
  marginToFromTextContentContainer: number;
}

export interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}
