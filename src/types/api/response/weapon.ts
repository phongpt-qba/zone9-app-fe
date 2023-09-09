export interface Weapon {
  id: number;
  createdAt: string;
  updatedAt: string;
  starkKey: string;
  uri: string;
  assetType: string;
  tokenId: string;
  tokenAddress: string;
  status: string;
  name: string;
  description: string;
  imageUrl: string;
  collectionId: number;
  metadata: any;
  metadataOptional: {
    animationUrl: string;
    imageUrl: string;
  };
}

export interface GetWeaponsResponse {
  total: number;
  page: number;
  perPage: number;
  items: Weapon[];
}
