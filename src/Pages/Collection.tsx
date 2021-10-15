import { useEffect } from 'react';
import styled from 'styled-components';
import { CardGrid } from '../Components/CardGrid';
import { ChairSection } from '../Components/ChairSection';
import { VectorBackground } from '../Components/VectorBackground';
import { useOwnNFTs } from '../Hooks/useOwnNFTs';
import { MainStore } from '../Store/mainStore';
import { NFT } from '../types';

export const Collection: React.FC = () => {
  const ownNfts = useOwnNFTs();
  return (
    <VectorBackground title={'Collection'}>
      <Container>
        <Sidebar>
          <UniLink href="#">TUM</UniLink>
          <Divider />
          <UniLink href="#">LMU</UniLink>
        </Sidebar>
        <Content>
          <UniTitle>University Chairs</UniTitle>
          <ChairSection professors={[]} asisstants={[]} />
        </Content>
      </Container>
    </VectorBackground>
  );
};

const Sidebar = styled.div`
  height: auto; /* Full-height: remove this if you want "auto" height */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  text-align: left;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-gap: 40px;
`;

const Content = styled.div`
  width: 100%;
`;

const UniLink = styled.a`
  padding: 6px 8px;
  text-decoration: none;
  font-size: 20px;
  color: #000000;
  display: block;
  transition: ease-in-out 0.2s;
  :hover {
    color: #ad59f7;
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 2px solid #bbb;
  border-radius: 5px;
`;

const UniTitle = styled.h1`
  padding-bottom: 30px;
`;
