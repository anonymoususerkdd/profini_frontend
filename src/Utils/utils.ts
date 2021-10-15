import { CONFIG } from '../config';

export function getOpenSeaUrl(id: number) {
  return `https://opensea.io/assets/matic/${CONFIG.TOKEN_ADDRESS}/${id}`;
}
