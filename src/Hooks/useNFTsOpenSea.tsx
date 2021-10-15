import axios from 'axios';
import { BigNumber } from 'ethers';
import { useEffect, useState } from 'react';
import { CONFIG } from '../config';
import { OPENSEA_NFT } from '../types';

const OPENSEA_URL = `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&asset_contract_address=`;
const TESTNET_OPENSEA_URL = `https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&asset_contract_address=`;

export function useNFTs(): OPENSEA_NFT[] {
  const [fetches, setFetches] = useState(0);
  const [nfts, setNfts] = useState<OPENSEA_NFT[]>([]);

  useEffect(() => {
    (async () => {
      const newNfts: OPENSEA_NFT[] = [];
      const tokenAddress = CONFIG.TOKEN_ADDRESS;
      // TODO: type
      let assetsObjects: any;
      try {
        assetsObjects = await axios.get(OPENSEA_URL + tokenAddress);
        assetsObjects = assetsObjects.data;
      } catch (e) {
        console.log('retrying', e);
        setTimeout(() => {
          setFetches(current => current + 1);
        }, 1500);
        setNfts([]);
      }
      console.log('Asset objects', assetsObjects);
      assetsObjects.assets.reverse().forEach(async (asset: any) => {
        if (!asset.image_original_url) {
          setNfts([]);
        }
        let price = 0;
        let sold = false;
        console.log('Assets', asset);
        if (asset.sell_orders) {
          if (asset.sell_orders[0]) {
            //price = web3.utils.fromWei(`${new Bignumber(asset.sell_orders[0].base_price).toNumber()}`, 'ether');
            console.log('Baseprice', asset.sell_orders[0].base_price);
            price =
              parseInt(
                BigNumber.from(asset.sell_orders[0].base_price).toString()
              ) / 1e18;
          } else {
            price = 0;
            sold = true;
          }
        } else {
          price = 0;
          sold = true;
        }
        let owner;
        let soldFor: number | undefined;
        if (asset.owner.user) {
          if (asset.owner.user.username) {
            owner = asset.owner.user.username;
          }
        }
        if (asset.last_sale) {
          soldFor =
            parseInt(BigNumber.from(asset.last_sale.total_price).toString()) /
            1e18;
        }
        if (!owner) {
          owner = asset.owner.address;
        }
        if (owner === 'BurnAddress') {
          setNfts([]);
        }

        let creator;
        if (asset.creator.user) {
          if (asset.creator.user.username) {
            creator = asset.creator.user.username;
          }
        }
        if (!creator) {
          creator = asset.creator.address;
        }
        const buyOrder = asset.sell_orders && asset.sell_orders[0];
        console.log('buy order', buyOrder);

        newNfts.push({
          name: asset.name,
          imageUrlOriginal: asset.image_original_url,
          tokenId: asset.token_id,
          description: asset.description,
          owner,
          creator,
          price,
          buyOrder,
          sold,
          soldFor,
          openSeaUrl: asset.permalink,
          raw: asset
        });
      });
      console.log('new nfts', newNfts);
      setNfts(newNfts);
    })();
  }, [fetches]);

  return nfts;
}
