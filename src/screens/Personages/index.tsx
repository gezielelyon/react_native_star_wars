import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';

import api from '../../services/api';
import BoxInfoPersonages from '../../components/BoxInfoPersonages/index';

import {Container, List, Title} from './styles';

interface IPersonageProps {
  item: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  };
}

interface IPersonagesRequestProps {
  count: number;
  next: string;
  previous: string | null;
  results: IPersonageProps[];
}

const Personages: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [personages, setPersonages] = useState<IPersonagesRequestProps | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      await api.get<IPersonagesRequestProps>('/people/').then(({data}) => {
        setPersonages(data);
        setLoading(false);
      });
    })();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#231c2e',
        }}>
        <ActivityIndicator color="#aaa0bb" size={50} />
        <Title>Carregando personagens...</Title>
      </View>
    );
  }

  return (
    <Container>
      <List
        data={personages?.results}
        keyExtractor={() => Math.floor(Math.random() * 10000)}
        ListHeaderComponent={() => (
          <Title>{personages?.count} personagens</Title>
        )}
        ListFooterComponent={() => (
          <View
            style={{width: '100%', height: 25, backgroundColor: '#231c2e'}}
          />
        )}
        renderItem={(value: IPersonageProps) => {
          return (
            <BoxInfoPersonages
              screenName="PersonageDetails"
              values={value.item}
            />
          );
        }}
      />
    </Container>
  );
};

export default Personages;
