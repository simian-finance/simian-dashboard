// Based on this YouTube tutorial on Vuex 4 + Typescript:
// https://www.youtube.com/watch?v=EeaYWLNXAwQ

import { MutationTree } from 'vuex'
import { State, TokenState } from '@/store/state'

export enum MutationType {
  setLoading = 'setLoading',
  setTokenState = 'setTokenState',
  toggleDrawerState = 'toggleDrawerState',
}

export type Mutations = {
  [MutationType.setLoading](state: State, value: boolean): void
  [MutationType.setTokenState](state: State, value: TokenState): void
  [MutationType.toggleDrawerState](state: State, value: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.setLoading](state, value) {
    state.isLoading = value
  },
  [MutationType.setTokenState](state, value) {
    state.token = value
  },
  [MutationType.toggleDrawerState](state, data) {
    state.drawerState = data
  },
}
