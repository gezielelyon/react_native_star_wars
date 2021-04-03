import React, {useCallback, useEffect, useState} from 'react';
import {View, ActivityIndicator, Image} from 'react-native';

import api from '../../services/api';
import IPersonageDTO from '../../dtos/IPersonageDTO';
import LogoStarWars from '../../assets/logo.png';
import BoxInfoPersonages from '../../components/BoxInfoPersonages/index';

import {
  Container,
  List,
  Title,
  ModalPayment,
  ContainerPayment,
  ButtonViewPayment,
  ButtonPayment,
  ButtonPaymentText,
} from './styles';

interface IPersonageProps {
  item: IPersonageDTO;
}

interface IPersonagesRequestProps {
  count: number;
  next: string;
  previous: string | null;
  results: IPersonageProps[];
}

const Personages: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [pageCounter, setPageCounter] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [personages, setPersonages] = useState<IPersonagesRequestProps | null>(
    null,
  );

  // Api request on load
  useEffect(() => {
    (async () => {
      await api.get<IPersonagesRequestProps>('/people/').then(({data}) => {
        setPersonages(data);
      });
      setLoading(false);
    })();
  }, []);

  // Counter to show payment screen
  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      counter += 1;
      if (counter === 45) {
        setShowPayment(true);
      }
    }, 1000);
  }, []);

  const handleLoadMoreData = useCallback(() => {
    if (personages?.next) {
      api
        .get<IPersonagesRequestProps>(`/people/?page=${pageCounter + 1}`)
        .then(({data}) => {
          setPersonages(prevState => {
            const oldPersonages = personages.results;
            const newPersonages = data.results;
            const results = oldPersonages.concat(newPersonages);
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
  }, [personages, pageCounter]);

  async function handleDoPayment(payment: string) {
    if (payment === 'after') {
      // Here do payment after
      return setShowPayment(false);
    }
    // Here do payment after
    return setShowPayment(false);
  }

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
    <>
      <Container>
        <List
          data={personages?.results}
          keyExtractor={() => Math.floor(Math.random() * 10000000)}
          ListHeaderComponent={() => (
            <Title>{personages?.count} Personagens</Title>
          )}
          ListFooterComponent={() => (
            <View
              style={{width: '100%', height: 25, backgroundColor: '#231c2e'}}
            />
          )}
          onEndReached={() => handleLoadMoreData()}
          onEndReachedThreshold={0.5}
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

      {showPayment && (
        <ModalPayment style={{flex: 1, backgroundColor: '#231c2e'}}>
          <ContainerPayment>
            <Image source={LogoStarWars} style={{height: 130, width: 350}} />

            <Title style={{textAlign: 'center', fontSize: 26}}>
              ATENÇÃO: Você precisa realizar o pagamento para continuar usando o
              App Star Wars!!!
            </Title>

            <ButtonViewPayment>
              <Title>Você deseja pagar agora:</Title>
              <ButtonPayment
                style={{backgroundColor: '#aaa0bb'}}
                onPress={() => handleDoPayment('now')}>
                <ButtonPaymentText style={{color: '#3a3049'}}>
                  PAGAR AGORA
                </ButtonPaymentText>
              </ButtonPayment>

              <Title style={{marginTop: 20}}>Você deseja pagar depois:</Title>
              <ButtonPayment onPress={() => handleDoPayment('after')}>
                <ButtonPaymentText>PAGAR DEPOIS</ButtonPaymentText>
              </ButtonPayment>
            </ButtonViewPayment>
          </ContainerPayment>
        </ModalPayment>
      )}
    </>
  );
};

export default Personages;
