import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 1.4rem 3% 0 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TitleHeader = styled.h1`
  color: ${colors.green};
  font-size: 2.8rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media(max-width: 620px) {
    justify-content: flex-start;
  }
`

export const Text = styled.h1`
  color: ${colors.gray};
  font-size: 4.8rem;
  margin-bottom: 2rem;

  @media(max-width: 620px) {
    margin: 2rem 0;
  }
`

export const TimeContent = styled.div`
  display: grid;
  width: 100%;
  height: 15rem;
  max-width: 800px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 0 1rem;

  @media(max-width: 620px) {
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: .3fr .3fr;
    gap: .8rem;
  }
`

export const TimeSingle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`

export const ValueText = styled.span`
  color: ${colors.white};
  margin-bottom: .4rem;
  font-size: 7.8rem;
`

export const ValueDescription = styled.span`
  color: ${colors.green};
  font-size: 1.6rem;
`