import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { Container, Description, Input, Title, Form } from './styles';

import ButtonComponent from '../../components/ButtonComponent'

const Home: React.FC = () => {

  const [dataValue, setDataValue] = useState('')

  return (
    <Container>
      <Title>Contador</Title>
      <Description>Informe uma data</Description>
      <Input
        value={dataValue}
        required
        type="date"
        onChange={e => setDataValue(e.target.value)}
      /> 
      <Link to={{ pathname: "/contador", state: dataValue}}>
        <ButtonComponent value="Iniciar contagem" />
      </Link>
    </Container>
  )
}

export default Home;