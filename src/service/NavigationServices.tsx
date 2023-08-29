import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IMAGES_ASSETS} from './AssetsLoader';
import {Image, ImageSourcePropType} from 'react-native';
import {Size} from '../styles';

// create navigation stack
export const Stack = createNativeStackNavigator();

// create bottom tab
export const Tab = createBottomTabNavigator();

// =====================================================
//
// ================ Functional & Render ================
//
// =====================================================

// Render navigation tab icon
interface INavigationProps {
  route: any;
  focused: boolean;
  color?: string;
  size?: number;
}
export const renderBottomTabIcon = ({route, focused}: INavigationProps) => {
  let icon: ImageSourcePropType;

  if (route.name == 'Home') {
    // Home Icon
    icon = IMAGES_ASSETS.bottomTabIcon.home[focused ? 'active' : 'inactive'];
  } else {
    // Profile Icon
    icon = IMAGES_ASSETS.bottomTabIcon.profile[focused ? 'active' : 'inactive'];
  }

  return (
    <Image source={icon} style={{height: Size.SIZE_20, width: Size.SIZE_20}} />
  );
};
