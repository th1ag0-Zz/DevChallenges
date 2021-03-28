import styled from 'styled-components';

import colors from '../../utils/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.black};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 3.4rem;
  color: ${colors.green};
  margin-bottom: 1.6rem;
`

export const Description = styled.p`
  color: ${colors.white};
  font-size: 1.8rem;
`
export const Input = styled.input`
  border: 0;
  width: 20rem;
  padding: 1rem;
  background-color: ${colors.gray};
  outline: 0;
  color: ${colors.white};
  border-radius: 20px;
  font-size: 1.4rem;
  margin: 1.2rem 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`