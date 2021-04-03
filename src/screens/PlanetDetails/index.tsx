import React, {useState} from 'react';

import IPlanetDTO from '../../dtos/IPlanetDTO';

import {Container, ScrolView, Title, BoxInfoEspecific, Name} from './styles';

const PlanetDetails: React.FC = ({route}) => {
  const {value} = route.params;
  const [planet, setPlanet] = useState<IPlanetDTO>(value || ({} as IPlanetDTO));

  return (
    <Container>
      <ScrolView>
        <Title>Name</Title>
        <BoxInfoEspecific>
          <Name>{planet.name}</Name>
        </BoxInfoEspecific>
        <Title>Horas por dia</Title>
        <BoxInfoEspecific>
          <Name>{planet.rotation_period} horas</Name>
        </BoxInfoEspecific>
        <Title>Dias por ano</Title>
        <BoxInfoEspecific>
          <Name>{planet.orbital_period} dias</Name>
        </BoxInfoEspecific>
        <Title>Diâmetro</Title>
        <BoxInfoEspecific>
          <Name>{planet.diameter} KM</Name>
        </BoxInfoEspecific>
        <Title>Clima</Title>
        <BoxInfoEspecific>
          <Name>{planet.climate}</Name>
        </BoxInfoEspecific>
        <Title>Terreno</Title>
        <BoxInfoEspecific>
          <Name>{planet.terrain}</Name>
        </BoxInfoEspecific>
        <Title>Água na superfície</Title>
        <BoxInfoEspecific>
          <Name>{planet.surface_water}%</Name>
        </BoxInfoEspecific>
        <Title>População</Title>
        <BoxInfoEspecific style={{marginBottom: 40}}>
          <Name>{planet.population}</Name>
        </BoxInfoEspecific>
      </ScrolView>
    </Container>
  );
};

export default PlanetDetails;
