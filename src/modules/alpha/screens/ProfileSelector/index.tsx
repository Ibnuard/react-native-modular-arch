import React from 'react';
import {ApplicationScreenProps} from '../../../../../@types/navigation';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Input} from '../../../../components';
import {useAppDispatch, useAppSelector} from '../../../../redux/hook';
import {generateRandomProfile} from '../../utils';
import {
  select_MDOULES_ALPHA_getGeneratedProfiles,
  setGeneratedUser,
} from '../../redux/slices/profileSlice';

const AlphaProfileSelectorScreen = ({navigation}: ApplicationScreenProps) => {
  const [name, setName] = React.useState<string>('');
  // define dispatch
  const dispatch = useAppDispatch();

  // generated profile
  const generateProfile = generateRandomProfile();

  // get generated profile from redux
  const getGeneratedProfile = useAppSelector(
    select_MDOULES_ALPHA_getGeneratedProfiles,
  );

  // handle on generate profile

  const handleOnGenerateProfile = () => {
    const profile = {
      ...generateProfile,
      name: name ?? 'alpha',
    };
    dispatch(setGeneratedUser(profile));
  };

  console.log(getGeneratedProfile);

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  return (
    <SafeAreaView style={styles.container}>
      <Input
        placeholder="Masukan Nama"
        onChangeText={text => setName(text)}
        value={name}
      />
      <Button
        title="Generate Profile"
        containerStyle={styles.buttonContainer}
        onPress={() => handleOnGenerateProfile()}
      />
    </SafeAreaView>
  );
};

export default AlphaProfileSelectorScreen;
