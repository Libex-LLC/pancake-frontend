import { ChainId, WLBX } from '@pancakeswap/sdk'
import { CAKE, SZAR_LBX } from '@pancakeswap/tokens'

export const libexTokens = {
    wlbx: WLBX[ChainId.LIBEX],
    szar: SZAR_LBX[ChainId.LIBEX],
    // cake: CAKE[ChainId.LIBEX]
}