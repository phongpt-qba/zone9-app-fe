export interface MintWeaponFromMysteryBoxResponse {
  tokenId: string;
  name: string;
  image: string;
  animationUrl: string;
  description: string;
  attributes: {
    value: string;
    trait_type: string;
  }[];
  externalUrl: string;
}
