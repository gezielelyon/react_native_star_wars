import React, {useState} from 'react';

import IFilmDTO from '../../dtos/IFilmDTO';

import {Container, ScrolView, Title, BoxInfoEspecific, Name} from './styles';

const FilmDetails: React.FC = ({route}) => {
  const {value} = route.params;
  const [film, setFilm] = useState<IFilmDTO>(value || ({} as IFilmDTO));

  return (
    <Container>
      <ScrolView>
        <Title>Título</Title>
        <BoxInfoEspecific>
          <Name>{film.title}</Name>
        </BoxInfoEspecific>
        <Title>Diretor</Title>
        <BoxInfoEspecific>
          <Name>{film.director} horas</Name>
        </BoxInfoEspecific>
        <Title>Produção</Title>
        <BoxInfoEspecific>
          <Name>{film.producer}</Name>
        </BoxInfoEspecific>
      </ScrolView>
    </Container>
  );
};

export default FilmDetails;
