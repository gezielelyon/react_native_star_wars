import React, {useEffect, useState, useCallback} from 'react';
import {View, ActivityIndicator} from 'react-native';

import api from '../../services/api';
import IVehicleDTO from '../../dtos/IVehicleDTO';
import BoxInfoVehicles from '../../components/BoxInfoVehicles/index';

import {Container, List, Title} from './styles';

interface IVehicleProps {
  item: IVehicleDTO;
}

interface IVehiclesRequestProps {
  count: number;
  next: string;
  previous: string | null;
  results: IVehicleProps[];
}

const Vehicles: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [pageCounter, setPageCounter] = useState(1);
  const [vehicles, setVehicles] = useState<IVehiclesRequestProps | null>(null);

  useEffect(() => {
    (async () => {
      await api.get<IVehiclesRequestProps>('/vehicles/').then(({data}) => {
        setVehicles(data);
        setLoading(false);
      });
    })();
  }, []);

  const handleLoadMoreData = useCallback(() => {
    if (vehicles?.next) {
      api
        .get<IVehiclesRequestProps>(`/vehicles/?page=${pageCounter + 1}`)
        .then(({data}) => {
          setVehicles(prevState => {
            const oldVehicles = vehicles.results;
            const newVehicles = data.results;
            const results = oldVehicles.concat(newVehicles);
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
  }, [vehicles, pageCounter]);

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
        <Title>Carregando Veículos...</Title>
      </View>
    );
  }

  return (
    <Container>
      <List
        data={vehicles?.results}
        keyExtractor={() => Math.floor(Math.random() * 10000)}
        ListHeaderComponent={() => <Title>{vehicles?.count} Veículos</Title>}
        ListFooterComponent={() => (
          <View
            style={{width: '100%', height: 25, backgroundColor: '#231c2e'}}
          />
        )}
        onEndReached={() => handleLoadMoreData()}
        onEndReachedThreshold={0.5}
        renderItem={(value: IVehicleProps) => {
          return (
            <BoxInfoVehicles screenName="VehicleDetails" values={value.item} />
          );
        }}
      />
    </Container>
  );
};

export default Vehicles;
