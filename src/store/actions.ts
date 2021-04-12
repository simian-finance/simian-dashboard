// Based on this YouTube tutorial on Vuex 4 + Typescript:
// https://www.youtube.com/watch?v=EeaYWLNXAwQ

import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from '@/store/mutations'
import { State } from '@/store/state'
import axios from 'axios'

const dashboardUrl = 'https://api.thegraph.com/subgraphs/name/simian-finance/simian-finance'

export enum ActionTypes {
  FetchTokenInfo = 'FETCH_TOKEN_INFO',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.FetchTokenInfo](context: ActionAugments): void
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.FetchTokenInfo]({ commit }) {
    commit(MutationType.setLoading, true)

    const query = `{
      tokens {
        name
        symbol
        decimals
        totalSupply
        totalBurned
        remainingSupply
        totalHolders
        totalTransfers
        totalFees
      }
    }`
    const response = await axios.post(dashboardUrl, {
      query: query,
      variables: null,
    })
    const tokenData = response.data.data.tokens[0]
    tokenData['remainingSupply'] = Number(tokenData['remainingSupply']).toFixed(2)
    tokenData['totalBurned'] = Number(tokenData['totalBurned']).toFixed(2)

    commit(MutationType.setTokenState, tokenData)

    commit(MutationType.setLoading, false)
  },
}
