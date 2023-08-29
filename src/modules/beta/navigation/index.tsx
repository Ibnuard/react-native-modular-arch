import {Stack} from '../../../service/navigation';
import BetaUserListScreen from '../screens/UserList';

// create beta module navigator
const ModuleBetaNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BetaUserList"
        component={BetaUserListScreen}
        options={{
          headerTitle: 'Beta Module',
        }}
      />
    </Stack.Navigator>
  );
};

export default ModuleBetaNavigator;
