import { autorun } from 'mobx';
import { useEffect, useState } from 'react';
import { MainStore } from '../Store/mainStore';
import { NFTS } from '../types';

export const useNFTs = (): NFTS => {
  const [nfts, setNFTs] = useState<NFTS>({});
  const [update, setUpdate] = useState(0);
  const mainStore = MainStore.getInstance();

  useEffect(() => {
    mainStore.on('Transfer', () => {
      setUpdate(current => current + 1);
    });

    mainStore.on('DrawPack', () => {
      setUpdate(current => current + 1);
    });
  }, [update]);

  useEffect(
    () =>
      autorun(async () => {
        console.log('Contracts ready', mainStore.contractsReady);
        if (!mainStore.contractsReady) return;
        console.log('Awaiting tokens');
        const ids = (await mainStore.getTokenIds()) || [];
        const uris = (await mainStore.getTokenUris()) || [];
        console.log('Done awaiting tokens', ids, uris);
        setNFTs({});
        for (let i = 0; i < ids.length; i++) {
          const id = ids[i];
          const uri = uris[i];
          const nft = await mainStore.getTokenData(id, uri);
          console.log('NFT Data', nft);
          if (!nft) continue;
          setNFTs(curr => ({ ...curr, [id]: nft }));
        }
      }),
    []
  );

  return nfts;
};
