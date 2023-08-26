import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// navigator
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import {useAppSelector} from '../redux/hook';
import {select_AUTH_userToken} from '../redux/slices/authSlice';

const MainNavigator = () => {
  // get state value from redux
  const userToken = useAppSelector(select_AUTH_userToken);

  return (
    <NavigationContainer>
      {userToken ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
