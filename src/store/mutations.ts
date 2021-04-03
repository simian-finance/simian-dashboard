// Based on this YouTube tutorial on Vuex 4 + Typescript:
// https://www.youtube.com/watch?v=EeaYWLNXAwQ

import { MutationTree } from 'vuex'
import { State } from '@/store/state'

export enum MutationType {
  SetLoading = 'SET_LOADING',
}

export type Mutations = {
  [MutationType.SetLoading](state: State, value: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetLoading](state, value) {
    state.isLoading = value
  },
}
