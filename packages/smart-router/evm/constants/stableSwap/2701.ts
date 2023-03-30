import { libexTokens } from '@pancakeswap/tokens'

import { StableSwapPool } from '../../types/pool'

export const pools: StableSwapPool[] = [
  {
    lpSymbol: 'LBX-sZAR LP',
    lpAddress: '0x517F492A54207Af948F7f068Ba5138b121b7D0E3', 
    token: libexTokens.wlbx,
    quoteToken: libexTokens.szar,
    stableSwapAddress: '',
    infoStableSwapAddress: '',
  },
] 