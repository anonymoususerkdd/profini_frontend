import { TextInput } from 'grommet';
import { autorun } from 'mobx';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Components/Button';
import { Card } from '../Components/Card';
import { MainStore } from '../Store/mainStore';
import { NFT } from '../types';

export const TransferModal = () => {
  const [nft, setNft] = useState<NFT | undefined>(undefined);
  const [address, setAddress] = useState('');
  const mainStore = MainStore.getInstance();
  useEffect(
    () =>
      autorun(async () => {
        const mainStore = MainStore.getInstance();
        if (!mainStore.transferModalOpen) return;
        const nft = await mainStore.getTokenData(
          parseInt(mainStore.transferModalOpen)
        );
        nft && setNft(nft);
      }),
    []
  );

  return (
    <Container>
      <Inner>
        {nft && (
          <>
            <Card nft={nft} hideDetails />
            <InputField
              placeholder="Enter receiver address"
              value={address}
              onChange={event => setAddress(event.target.value)}
            />
            <Button onClick={() => mainStore.sendToken(nft.id, address)}>
              Send
            </Button>
          </>
        )}
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #000000aa;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Inner = styled.div`
  width: 400px;
  background-color: #fff;
  border-radius: 30px;
  padding: 30px;
`;

const InputField = styled(TextInput)`
  margin-top: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 8px;
`;
