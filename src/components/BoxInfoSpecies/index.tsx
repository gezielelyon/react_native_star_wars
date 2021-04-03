import React from 'react';
import {useNavigation} from '@react-navigation/native';

import ISpecieDTO from '../../dtos/ISpecieDTO';

import {Container, Name, BoxInfoDetails, Description} from './styles';

interface IBoxInfoProps {
  screenName: string;
  values: ISpecieDTO;
}

const BoxInfoSpecies: React.FC<IBoxInfoProps> = ({screenName, values}) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => {
        navigation.navigate(screenName, {
          value: values,
        });
      }}>
      <Name>{values.name}</Name>
      <BoxInfoDetails>
        <Description>Classificação: {values.classification}</Description>
        <Description>Designação: {values.designation}</Description>
      </BoxInfoDetails>
    </Container>
  );
};

export default BoxInfoSpecies;
