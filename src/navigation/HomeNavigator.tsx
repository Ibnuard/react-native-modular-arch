import ModuleAlphaNavigator from '../modules/alpha/navigation';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import {Stack, Tab} from '../service/navigation';

// Screens

// Main Home Navigation
const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Nested Child

// Home Stack Screen
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeInit"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Module.Aplha"
        component={ModuleAlphaNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
