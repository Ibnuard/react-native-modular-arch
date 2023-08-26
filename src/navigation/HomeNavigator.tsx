import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import {Tab} from '../service/navigation';

// Screens

// Main Home Navigation
const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
