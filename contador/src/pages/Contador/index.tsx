import React from 'react';

import { Container, Header, TitleHeader, Content, Text, TimeContent, TimeSingle, ValueText, ValueDescription } from './styles';

import ButtonComponent from '../../components/ButtonComponent'

const Contador: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleHeader>Contador</TitleHeader>
        <ButtonComponent value="Reiniciar" />
      </Header>
      <Content>
        <Text>Faltam</Text>
        <TimeContent>
          <TimeSingle>
            <ValueText>0</ValueText>
            <ValueDescription>Dias</ValueDescription>
          </TimeSingle>

          <TimeSingle>
            <ValueText>0</ValueText>
            <ValueDescription>Horas</ValueDescription>
          </TimeSingle>

          <TimeSingle>
            <ValueText>0</ValueText>
            <ValueDescription>Minutos</ValueDescription>
          </TimeSingle>

          <TimeSingle>
            <ValueText>0</ValueText>
            <ValueDescription>Segundos</ValueDescription>
          </TimeSingle>
        </TimeContent>
      </Content>
    </Container>
  )
}

export default Contador;