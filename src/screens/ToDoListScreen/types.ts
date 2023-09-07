import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{ params: { sortTag: string } }, 'params'>;
}
