import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CardGrid } from '../Components/CardGrid';
import { VectorBackground } from '../Components/VectorBackground';
import { useNFTs } from '../Hooks/useNFTs';
import { useOwnNFTs } from '../Hooks/useOwnNFTs';

export const Marketplace: React.FC = () => {
  const nfts = useNFTs();
  const ownedNfts = useOwnNFTs();
  console.log('ownedNfts', ownedNfts);

  return (
    <Container>
      <VectorBackground title={'Marketplace'}>
        <CardGrid nfts={nfts} ownedNfts={ownedNfts} />
      </VectorBackground>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`;
