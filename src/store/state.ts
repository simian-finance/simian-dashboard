// Based on this YouTube tutorial on Vuex 4 + Typescript:
// https://www.youtube.com/watch?v=EeaYWLNXAwQ

export type TokenState = {
  name: string
  symbol: string
  decimals: number
  totalSupply: number
  totalBurned: number
  remainingSupply: number
  totalHolders: number
  totalTransfers: number
  totalFees: number
}

export type State = {
  drawerState: boolean
  isLoading: boolean
  token: TokenState
}

export const state: State = {
  drawerState: false,
  isLoading: false,
  token: {
    name: '?',
    symbol: '?',
    decimals: 0,
    totalSupply: 0,
    totalBurned: 0,
    remainingSupply: 0,
    totalHolders: 0,
    totalTransfers: 0,
    totalFees: 0,
  },
}
