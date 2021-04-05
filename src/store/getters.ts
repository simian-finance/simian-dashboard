// Based on this YouTube tutorial on Vuex 4 + Typescript:
// https://www.youtube.com/watch?v=EeaYWLNXAwQ

import { GetterTree } from 'vuex'
import { State } from '@/store/state'

export type Getters = {
  drawerState(state: State): boolean
  remainingSupply(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
  drawerState(state: State) {
    return state.drawerState
  },
  remainingSupply(state) {
    return state.token.totalSupply - state.token.totalBurned
  },
}
