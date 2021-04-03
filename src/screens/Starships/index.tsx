import React, {useEffect, useState, useCallback} from 'react';
import {View, ActivityIndicator} from 'react-native';

import api from '../../services/api';
import IStarshipDTO from '../../dtos/IStarshipDTO';
import BoxInfoStarships from '../../components/BoxInfoStarships/index';

import {Container, List, Title} from './styles';

interface IStarshipProps {
  item: IStarshipDTO;
}

interface IStarshipsRequestProps {
  count: number;
  next: string;
  previous: string | null;
  results: IStarshipProps[];
}

const Starships: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [pageCounter, setPageCounter] = useState(1);
  const [starships, setStarships] = useState<IStarshipsRequestProps | null>(
    null,
  );

  useEffect(() => {
    (async () => {
      await api.get<IStarshipsRequestProps>('/starships/').then(({data}) => {
        setStarships(data);
        setLoading(false);
      });
    })();
  }, []);

  const handleLoadMoreData = useCallback(() => {
    if (starships?.next) {
      api
        .get<IStarshipsRequestProps>(`/starships/?page=${pageCounter + 1}`)
        .then(({data}) => {
          setStarships(prevState => {
            const oldStarships = starships.results;
            const newStarships = data.results;
            const results = oldStarships.concat(newStarships);
            return {
              ...prevState,
              results,
            };
          });
          setPageCounter(pageCounter + 1);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [starships, pageCounter]);

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
        <Title>Carregando viagens estelares...</Title>
      </View>
    );
  }

  return (
    <Container>
      <List
        data={starships?.results}
        keyExtractor={() => Math.floor(Math.random() * 10000)}
        ListHeaderComponent={() => (
          <Title>{starships?.count} Naves estelares</Title>
        )}
        ListFooterComponent={() => (
          <View
            style={{width: '100%', height: 25, backgroundColor: '#231c2e'}}
          />
        )}
        onEndReached={() => handleLoadMoreData()}
        onEndReachedThreshold={0.5}
        renderItem={(value: IStarshipProps) => {
          return (
            <BoxInfoStarships
              screenName="StarshipDetails"
              values={value.item}
            />
          );
        }}
      />
    </Container>
  );
};

export default Starships;
