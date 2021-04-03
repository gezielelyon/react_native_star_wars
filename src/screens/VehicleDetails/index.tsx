import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import IVehicleDTO from '../../dtos/IVehicleDTO';

import {Container, ScrolView, Title, BoxInfoEspecific, Name} from './styles';

const VehicleDetails: React.FC = ({route}) => {
  const navigation = useNavigation();
  const {value} = route.params;
  const [vehicle, setVehicle] = useState<IVehicleDTO>(
    value || ({} as IVehicleDTO),
  );

  return (
    <Container>
      <ScrolView>
        <Title>Name</Title>
        <BoxInfoEspecific>
          <Name>{vehicle.name}</Name>
        </BoxInfoEspecific>
        <Title>Modelo</Title>
        <BoxInfoEspecific>
          <Name>{vehicle.model}</Name>
        </BoxInfoEspecific>
        <Title>Fabricante</Title>
        <BoxInfoEspecific>
          <Name>{vehicle.manufacturer}</Name>
        </BoxInfoEspecific>
        <Title>Custo</Title>
        <BoxInfoEspecific>
          <Name>{vehicle.cost_in_credits}</Name>
        </BoxInfoEspecific>
        <Title>Passageiros</Title>
        <BoxInfoEspecific>
          <Name>{vehicle.passengers}</Name>
        </BoxInfoEspecific>
        <Title>Capacidade</Title>
        <BoxInfoEspecific>
          <Name>{vehicle.cargo_capacity}</Name>
        </BoxInfoEspecific>
        <Title>Consumíveis</Title>
        <BoxInfoEspecific>
          <Name>{vehicle.consumables}</Name>
        </BoxInfoEspecific>
        <Title>Tamanho</Title>
        <BoxInfoEspecific style={{marginBottom: 40}}>
          <Name>{vehicle.length} metros</Name>
        </BoxInfoEspecific>
      </ScrolView>
    </Container>
  );
};

export default VehicleDetails;
