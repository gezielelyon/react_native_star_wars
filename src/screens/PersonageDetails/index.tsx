import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, ScrolView, Title, BoxInfoEspecific, Name} from './styles';

interface IPersonageProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

const PersonageDetails: React.FC = ({route}) => {
  const {value} = route.params;
  const [personage, setPersonage] = useState<IPersonageProps>(
    value || ({} as IPersonageProps),
  );

  return (
    <Container>
      <ScrolView>
        <Title>Name</Title>
        <BoxInfoEspecific>
          <Name>{personage.name}</Name>
        </BoxInfoEspecific>
        <Title>Altura</Title>
        <BoxInfoEspecific>
          <Name>{personage.height} cm</Name>
        </BoxInfoEspecific>
        <Title>Massa</Title>
        <BoxInfoEspecific>
          <Name>{personage.mass} Kg</Name>
        </BoxInfoEspecific>
        <Title>Cor do cabelo</Title>
        <BoxInfoEspecific>
          <Name>{personage.hair_color}</Name>
        </BoxInfoEspecific>
        <Title>Cor da pele</Title>
        <BoxInfoEspecific>
          <Name>{personage.skin_color}</Name>
        </BoxInfoEspecific>
        <Title>Cor dos olhos</Title>
        <BoxInfoEspecific>
          <Name>{personage.eye_color}</Name>
        </BoxInfoEspecific>
        <Title>Ano de aniversário</Title>
        <BoxInfoEspecific>
          <Name>{personage.birth_year}</Name>
        </BoxInfoEspecific>
        <Title>Gênero</Title>
        <BoxInfoEspecific style={{marginBottom: 40}}>
          <Name>{personage.gender}</Name>
        </BoxInfoEspecific>
      </ScrolView>
    </Container>
  );
};

export default PersonageDetails;
