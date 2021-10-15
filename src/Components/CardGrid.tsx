import styled from 'styled-components';
import { NFTS } from '../types';
import { Card } from './Card';

export const CardGrid: React.FC<{
  nfts: NFTS;
  ownedNfts: { [id: string]: number };
}> = ({ nfts, ownedNfts }) => {
  return (
    <Container>
      {Object.values(nfts).map(nft => (
        <Card
          key={'nft' + nft.id}
          nft={nft}
          grayed={!ownedNfts[nft.id] || ownedNfts[nft.id] === 0}
          num={ownedNfts[nft.id]}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: columns;
  grid-gap: 60px 20px;
`;
