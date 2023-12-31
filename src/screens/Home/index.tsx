import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ApplicationScreenProps} from '../../../@types/navigation';
import styles from './styles';
import {IMAGES_ASSETS} from '../../service/AssetsLoader';

const HomeScreen = ({navigation}: ApplicationScreenProps) => {
  // dummy modules

  interface IModulesList {
    name: string;
    icon: ImageSourcePropType;
    navId: string;
  }

  const MODULES_LIST: IModulesList[] = [
    {
      name: 'Alpha Module',
      icon: IMAGES_ASSETS.modules.alpha,
      navId: 'Module.Aplha',
    },
    {
      name: 'Beta Module',
      icon: IMAGES_ASSETS.modules.beta,
      navId: 'Module.Beta',
    },
  ];

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  type TRenderModuleButton = {
    item: IModulesList;
    index: number;
  };

  function renderModuleButton({item, index}: TRenderModuleButton) {
    return (
      <TouchableOpacity
        style={styles.moduleButtonContainer}
        activeOpacity={0.8}
        onPress={() => navigation.navigate(item.navId)}>
        <Image source={item.icon} style={styles.moduleIcon} />
        <Text style={styles.textModule}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={MODULES_LIST}
        renderItem={renderModuleButton}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
