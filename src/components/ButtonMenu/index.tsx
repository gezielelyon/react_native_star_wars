import React from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {Container} from './styles';

const ButtonMenu: React.FC = () => {
  const navigation = useNavigation();

  function handleOpenDrawerNavigator() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <Container onPress={() => handleOpenDrawerNavigator()}>
      <FeatherIcon name="menu" color="#aaa0bb" size={30} />
    </Container>
  );
};

export default ButtonMenu;
