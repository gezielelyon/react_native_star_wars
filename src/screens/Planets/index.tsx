import React, {useEffect, useState, useCallback} from 'react';
import {View, ActivityIndicator} from 'react-native';

import api from '../../services/api';
import IPlanetDTO from '../../dtos/IPlanetDTO';
import BoxInfoPlanets from '../../components/BoxInfoPlanets/index';

import {Container, List, Title} from './styles';

interface IPlanetProps {
  item: IPlanetDTO;
}

interface IPlanetsRequestProps {
  count: number;
  next: string;
  previous: string | null;
  results: IPlanetProps[];
}

const Planets: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [pageCounter, setPageCounter] = useState(1);
  const [planets, setPlanets] = useState<IPlanetsRequestProps | null>(null);

  useEffect(() => {
    (async () => {
      await api.get<IPlanetsRequestProps>('/planets/').then(({data}) => {
        setPlanets(data);
        setLoading(false);
      });
    })();
  }, []);

  const handleLoadMoreData = useCallback(() => {
    if (planets?.next) {
      api
        .get<IPlanetsRequestProps>(`/planets/?page=${pageCounter + 1}`)
        .then(({data}) => {
          setPlanets(prevState => {
            const oldPlanets = planets.results;
            const newPlanets = data.results;
            const results = oldPlanets.concat(newPlanets);
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
  }, [planets, pageCounter]);

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
        <Title>Carregando Planetas...</Title>
      </View>
    );
  }

  return (
    <Container>
      <List
        data={planets?.results}
        keyExtractor={() => Math.floor(Math.random() * 10000)}
        ListHeaderComponent={() => <Title>{planets?.count} Planetas</Title>}
        ListFooterComponent={() => (
          <View
            style={{width: '100%', height: 25, backgroundColor: '#231c2e'}}
          />
        )}
        onEndReached={() => handleLoadMoreData()}
        onEndReachedThreshold={0.5}
        renderItem={(value: IPlanetProps) => {
          return (
            <BoxInfoPlanets screenName="PlanetDetails" values={value.item} />
          );
        }}
      />
    </Container>
  );
};

export default Planets;
