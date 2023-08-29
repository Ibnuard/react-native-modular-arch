import {Stack} from '../service/NavigationServices';

import SignInScreen from '../screens/SignIn';

// Auth Navigator
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
