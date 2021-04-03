import React, {useEffect, useState, useCallback} from 'react';
import {View, ActivityIndicator} from 'react-native';

import api from '../../services/api';
import ISpecieDTO from '../../dtos/ISpecieDTO';
import BoxInfoSpecies from '../../components/BoxInfoSpecies/index';

import {Container, List, Title} from './styles';

interface ISpecieProps {
  item: ISpecieDTO;
}

interface ISpeciesRequestProps {
  count: number;
  next: string;
  previous: string | null;
  results: ISpecieProps[];
}

const Species: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [pageCounter, setPageCounter] = useState(1);
  const [species, setSpecies] = useState<ISpeciesRequestProps | null>(null);

  useEffect(() => {
    (async () => {
      await api.get<ISpeciesRequestProps>('/species/').then(({data}) => {
        setSpecies(data);
        setLoading(false);
      });
    })();
  }, []);

  const handleLoadMoreData = useCallback(() => {
    if (species?.next) {
      api
        .get<ISpeciesRequestProps>(`/species/?page=${pageCounter + 1}`)
        .then(({data}) => {
          setSpecies(prevState => {
            const oldSpecies = species.results;
            const newSpecies = data.results;
            const results = oldSpecies.concat(newSpecies);
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
  }, [species, pageCounter]);

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
        <Title>Carregando espécies...</Title>
      </View>
    );
  }

  return (
    <Container>
      <List
        data={species?.results}
        keyExtractor={() => Math.floor(Math.random() * 10000)}
        ListHeaderComponent={() => <Title>{species?.count} Espécies</Title>}
        ListFooterComponent={() => (
          <View
            style={{width: '100%', height: 25, backgroundColor: '#231c2e'}}
          />
        )}
        onEndReached={() => handleLoadMoreData()}
        onEndReachedThreshold={0.5}
        renderItem={(value: ISpecieProps) => {
          return (
            <BoxInfoSpecies screenName="SpecieDetails" values={value.item} />
          );
        }}
      />
    </Container>
  );
};

export default Species;
