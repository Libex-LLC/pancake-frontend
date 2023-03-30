import { libexTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  {
    pid: 2, 
    vaultPid: 2, 
    lpSymbol: 'sZAR-LBX LP',
    lpAddress: '0x517F492A54207Af948F7f068Ba5138b121b7D0E3',
    quoteToken: libexTokens.szar,
    token: libexTokens.wlbx,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms