export interface OPENSEA_NFT {
  name: string;
  imageUrlOriginal: string;
  tokenId: string;
  description: string;
  owner: string;
  creator: string;
  price: number;
  buyOrder: any;
  sold: boolean;
  soldFor: number | undefined;
  openSeaUrl: string;
  raw: any;
}

export interface NFT {
  imageUrl?: string;
  id: number;
}

export interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}

export interface NFTS {
  [key: string]: NFT;
}
