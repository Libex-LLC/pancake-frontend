import { formatEther } from '@ethersproject/units'
import { MultiCallV2, MultiCall } from '@pancakeswap/multicall'
import { ChainId } from '@pancakeswap/sdk'
import { masterChefAddresses } from './const'
import { farmV2FetchFarms, FetchFarmsParams, fetchMasterChefV2Data, fetchMasterChefData } from './fetchFarms'

const supportedChainId = [ChainId.GOERLI, ChainId.BSC, ChainId.BSC_TESTNET, ChainId.ETHEREUM, ChainId.LIBEX]
export const bCakeSupportedChainId = [ChainId.BSC, ChainId.BSC_TESTNET]

export function createFarmFetcher(multicallv2: MultiCallV2) {
  const fetchFarms = async (
    params: {
      isTestnet: boolean
    } & Pick<FetchFarmsParams, 'chainId' | 'farms'>,
  ) => {
    const { isTestnet, farms, chainId } = params
    const masterChefAddress = isTestnet ? masterChefAddresses[ChainId.BSC_TESTNET] : masterChefAddresses[ChainId.LIBEX]

    // TODO 
    // const test = await fetchMasterChefV2Data({ isTestnet, multicallv2, masterChefAddress })
    // debugger


    const { poolLength, totalRegularAllocPoint, totalSpecialAllocPoint, cakePerBlock } = await fetchMasterChefV2Data({
      isTestnet,
      multicallv2,
      masterChefAddress,
    })
    const regularCakePerBlock = formatEther(cakePerBlock)
    const farmsWithPrice = await farmV2FetchFarms({
      multicallv2,
      masterChefAddress,
      isTestnet,
      chainId,
      farms: farms.filter((f) => !f.pid || poolLength.gt(f.pid)),
      totalRegularAllocPoint,
      totalSpecialAllocPoint,
    })

    return {
      farmsWithPrice,
      poolLength: poolLength.toNumber(),
      regularCakePerBlock: +regularCakePerBlock,
    }
  }
  return {
    fetchFarms,
    isChainSupported: (chainId: number) => supportedChainId.includes(chainId),
    supportedChainId,
    isTestnet: (chainId: number) => ![ChainId.LIBEX, ChainId.ETHEREUM].includes(chainId),
  }
}

export * from './apr'
export * from './farmsPriceHelpers'
export * from './types'
export * from './deserializeFarmUserData'
export * from './deserializeFarm'
export { FARM_AUCTION_HOSTING_IN_SECONDS } from './const'
export * from './filterFarmsByQuery'
