export interface MintMysteryBoxPayload {
  signature: string;
}

export interface MintWeaponFromMysteryBoxPayload {
  walletAddress: string;
  starkKey: string;
  mysteryBoxTokenId: string;
}
