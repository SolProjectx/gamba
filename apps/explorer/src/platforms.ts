import { PublicKey } from '@solana/web3.js'

interface PlatformMeta {
  address: string
  name: string
  url: string
  image?: string
}

export const PLATFORMS = [
  {
    address: '6SaxsBTCRRK1xFT2c7iPSirx2aSZLsuY28S28shmLm11',
    name: 'Beebets',
    url: 'https://www.beebets.net/',
    image: '/logos/beebets.png',
  },
]

const PLATFORMS_BY_ADDRESS = PLATFORMS.reduce((prev, meta) => ({
  ...prev,
  [meta.address]: meta,
}), {} as Record<string, PlatformMeta>)

export const getPlatformMeta = (address: string | PublicKey) => {
  return PLATFORMS_BY_ADDRESS[address.toString()] ?? { address: address.toString(), name: address.toString().substring(0, 9) }
}
