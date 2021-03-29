import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { Container, Header, TitleHeader, Content, Text, TimeContent, TimeSingle, ValueText, ValueDescription } from './styles';

import ButtonComponent from '../../components/ButtonComponent'
import { Link } from 'react-router-dom';

const Contador: React.FC = () => {

  const { state }:any = useLocation()
  const valueInput:any = state.split('-')
  const [year, month, day] = valueInput

  const [currentDay, setCurrentDay] = useState('0')
  const [currentHour, setCurrentHour] = useState('0')
  const [currentMinute, setCurrentMinute] = useState('0')
  const [currentSecond, setCurrentSecond] = useState('0')

  useEffect(() => {

    const dataFinal = new Date(year, month - 1, day);

    setInterval(() => {
      const dataInicio = new Date()
      const ms = Math.abs(dataFinal.getTime() - dataInicio.getTime());

      const [dias,horas] = (((ms / 86400000) - 0.24).toFixed(2)).split('.');
      
      const minutos  = ( ms / 60000 ) % 60;

      const segundos = Math.floor((( ms / 1000 ) % 60));

      setCurrentDay(dias)
      setCurrentHour(horas)
      setCurrentMinute((Math.floor(minutos)).toFixed())
      setCurrentSecond(segundos.toFixed())
    }, 1000)

  }, [])

  return (
    <Container>
      <Header>
        <TitleHeader>Contador</TitleHeader>
        <Link to="/">
          <ButtonComponent value="Voltar a Home" />
        </Link>
      </Header>
      <Content>
        <Text>Faltam</Text>
        <TimeContent>
          <TimeSingle>
            <ValueText>{currentDay}</ValueText>
            <ValueDescription>Dias</ValueDescription>
          </TimeSingle>

          <TimeSingle>
            <ValueText>{currentHour}</ValueText>
            <ValueDescription>Horas</ValueDescription>
          </TimeSingle>

          <TimeSingle>
            <ValueText>{currentMinute}</ValueText>
            <ValueDescription>Minutos</ValueDescription>
          </TimeSingle>

          <TimeSingle>
            <ValueText>{currentSecond}</ValueText>
            <ValueDescription>Segundos</ValueDescription>
          </TimeSingle>
        </TimeContent>
      </Content>
    </Container>
  )
}

export default Contador;