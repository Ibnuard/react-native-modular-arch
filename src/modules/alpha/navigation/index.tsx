import {Stack} from '../../../service/NavigationServices';
import AlphaProfileDetailScreen from '../screens/ProfileDetail';
import AlphaProfileSelectorScreen from '../screens/ProfileSelector';

// create alpha module navigator
const ModuleAlphaNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AlphaProfileSelector"
        component={AlphaProfileSelectorScreen}
        options={{
          title: 'Module Alpha',
        }}
      />
      <Stack.Screen
        name="AlphaProfileDetail"
        component={AlphaProfileDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ModuleAlphaNavigator;
