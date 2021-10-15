import styled from 'styled-components';
import { P } from './Text';
import { Button } from './Button';
import { NFT } from '../types';
import { useMemo } from 'react';
import { getOpenSeaUrl } from '../Utils/utils';
import { EmptyCard } from './EmptyCard';

export const ChairSection: React.FC<{
  professors: [NFT?];
  asisstants: [NFT?];
}> = ({ professors, asisstants }) => {
  return (
    <Container>
      <Title>Chair of Data Processing</Title>
      <div>
        <Title>Professors</Title>
        <CounterText>1 of 3</CounterText>
      </div>
      <CardList>
        <EmptyCard name="bro" />
        <EmptyCard name="bro2" />
      </CardList>
      <div>
        <Title>Researchers</Title>
        <CounterText>1 of 20</CounterText>
      </div>
      <CardList>
        <EmptyCard name="bro" />
        <EmptyCard name="bro2" />
      </CardList>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  width: 100%;
  position: relative;
`;

const Title = styled.h3`
  margin-top: 30px;
  display: inline;
`;

const CounterText = styled.span`
  padding-left: 10px;
`

const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 25px 0px 50px 0px;
`;
