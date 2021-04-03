import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';

import api from '../../services/api';
import BoxInfoFilms from '../../components/BoxInfoFilms/index';

import {Container, List, Title} from './styles';
import IFilmDTO from '../../dtos/IFilmDTO';

interface IFilmProps {
  item: IFilmDTO;
}

interface IFilmsRequestProps {
  count: number;
  next: string;
  previous: string | null;
  results: IFilmProps[];
}

const Films: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState<IFilmsRequestProps | null>(null);

  useEffect(() => {
    (async () => {
      await api.get<IFilmsRequestProps>('/films/').then(({data}) => {
        setFilms(data);
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
        <Title>Carregando Filmes...</Title>
      </View>
    );
  }

  return (
    <Container>
      <List
        data={films?.results}
        keyExtractor={() => Math.floor(Math.random() * 10000)}
        ListHeaderComponent={() => <Title>{films?.count} Filmes</Title>}
        ListFooterComponent={() => (
          <View
            style={{width: '100%', height: 25, backgroundColor: '#231c2e'}}
          />
        )}
        renderItem={(value: IFilmProps) => {
          return <BoxInfoFilms screenName="FilmDetails" values={value.item} />;
        }}
      />
    </Container>
  );
};

export default Films;
