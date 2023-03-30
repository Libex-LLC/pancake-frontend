import { BLOCKS_CLIENT, BLOCKS_CLIENT_ETH, INFO_CLIENT, INFO_CLIENT_ETH } from 'config/constants/endpoints'
import { infoClientETH, infoClient, infoStableSwapClient } from 'utils/graphql'

import { ChainId } from '@pancakeswap/sdk'
import {
  ETH_TOKEN_BLACKLIST,
  PCS_ETH_START,
  PCS_V2_START,
  TOKEN_BLACKLIST,
  BSC_TOKEN_WHITELIST,
  ETH_TOKEN_WHITELIST,
} from 'config/constants/info'

export type MultiChainName = 'BNB' | 'LBX' | 'ETH'

export const multiChainQueryMainToken = {
  BSC: 'BNB',
  ETH: 'ETH',
  LBX: 'LBX'
}

export const multiChainBlocksClient = {
  BSC: BLOCKS_CLIENT,
  ETH: BLOCKS_CLIENT_ETH,
  LBX: ''
}

export const multiChainStartTime = {
  BSC: PCS_V2_START,
  ETH: PCS_ETH_START,
  LBX: ''
}

export const multiChainId = {
  BSC: ChainId.BSC,
  ETH: ChainId.ETHEREUM,
  LBX: ChainId.LIBEX
}

export const multiChainPaths = {
  [ChainId.BSC]: '',
  [ChainId.ETHEREUM]: '/eth',
  [ChainId.LIBEX]: '/lbx'
}

export const multiChainQueryClient = {
  BSC: infoClient,
  ETH: infoClientETH,
  LBX: ''
}

export const multiChainQueryEndPoint = {
  BSC: INFO_CLIENT,
  ETH: INFO_CLIENT_ETH,
  LBX: ''
}

export const multiChainScan = {
  BSC: 'BscScan',
  ETH: 'EtherScan',
  LBX: 'libex'
}

export const multiChainTokenBlackList = {
  BSC: TOKEN_BLACKLIST,
  ETH: ETH_TOKEN_BLACKLIST,
}

export const multiChainTokenWhiteList = {
  BSC: BSC_TOKEN_WHITELIST,
  ETH: ETH_TOKEN_WHITELIST,
}

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainName) => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName]
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')
