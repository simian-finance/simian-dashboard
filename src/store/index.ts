// Based on this YouTube tutorial on Vuex 4 + Typescript:
// https://www.youtube.com/watch?v=EeaYWLNXAwQ

import Vue from 'vue'
import Vuex from 'vuex'
import { Store as VuexStore, CommitOptions, DispatchOptions, createLogger } from 'vuex'
import { State, state } from '@/store/state'
import { Mutations, mutations } from '@/store/mutations'
import { Actions, actions } from '@/store/actions'
import { Getters, getters } from '@/store/getters'

export type Store = Omit<VuexStore<State>, 'commit' | 'dispatch' | 'getters'> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  mutations,
  actions,
  getters,
})
