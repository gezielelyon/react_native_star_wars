import React from 'react';
import {useNavigation} from '@react-navigation/native';

import IFilmDTO from '../../dtos/IFilmDTO';

import {Container, Name, BoxInfoDetails, Description} from './styles';

interface IBoxInfoProps {
  screenName: string;
  values: IFilmDTO;
}

const BoxInfoFilms: React.FC<IBoxInfoProps> = ({screenName, values}) => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => {
        navigation.navigate(screenName, {
          value: values,
        });
      }}>
      <Name>{values.title}</Name>
      <BoxInfoDetails>
        <Description>Diretor: {values.director}</Description>
      </BoxInfoDetails>
    </Container>
  );
};

export default BoxInfoFilms;
