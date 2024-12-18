import { PublicKey } from '@solana/web3.js'
import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'

export const PLATFORM_CREATOR_ADDRESS = new PublicKey('V2grJiwjs25iJYqumbHyKo5MTK7SFqZSdmoRaj8QWb9')

/** Appears in ShareModal */
export const PLATFORM_SHARABLE_URL = 'v2-play.gamba.so'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  {
    mint: new PublicKey('3YT2B16R4EsvKozxRXNuD4dvEChuxeyXLG8yG219TVMz'),
    symbol: 'BEE',
    name: 'BeeBets',
    image: 'https://play.beebets.net/logo.png',
    decimals: 9,
    baseWager: 1e9,
  },

]
