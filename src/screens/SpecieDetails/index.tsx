import React, {useState} from 'react';

import ISpecieDTO from '../../dtos/ISpecieDTO';

import {Container, ScrolView, Title, BoxInfoEspecific, Name} from './styles';

const PlanetDetails: React.FC = ({route}) => {
  const {value} = route.params;
  const [specie, setSpecies] = useState<ISpecieDTO>(
    value || ({} as ISpecieDTO),
  );

  return (
    <Container>
      <ScrolView>
        <Title>Name</Title>
        <BoxInfoEspecific>
          <Name>{specie.name}</Name>
        </BoxInfoEspecific>
        <Title>Classificação</Title>
        <BoxInfoEspecific>
          <Name>{specie.classification}</Name>
        </BoxInfoEspecific>
        <Title>Designação</Title>
        <BoxInfoEspecific>
          <Name>{specie.designation}</Name>
        </BoxInfoEspecific>
        <Title>Altura média</Title>
        <BoxInfoEspecific>
          <Name>{specie.average_height} cm</Name>
        </BoxInfoEspecific>
        <Title>Cores de pele</Title>
        <BoxInfoEspecific>
          <Name>{specie.skin_colors}</Name>
        </BoxInfoEspecific>
        <Title>Cores de cabelo</Title>
        <BoxInfoEspecific>
          <Name>{specie.hair_colors}</Name>
        </BoxInfoEspecific>
        <Title>Cores dos olhos</Title>
        <BoxInfoEspecific>
          <Name>{specie.eye_colors}%</Name>
        </BoxInfoEspecific>
        <Title>Língua</Title>
        <BoxInfoEspecific style={{marginBottom: 40}}>
          <Name>{specie.language}</Name>
        </BoxInfoEspecific>
      </ScrolView>
    </Container>
  );
};

export default PlanetDetails;
