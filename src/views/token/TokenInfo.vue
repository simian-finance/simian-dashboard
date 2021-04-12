<template>
  <v-col md="4">
    <v-simple-table>
      <tbody v-if="!this.$store.state.isLoading">
        <tr v-for="item in items" :key="item.key">
          <td>{{ item.name }}</td>
          <td>{{ $store.state.token[item.key] }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
import { ActionTypes } from '@/store/actions'

export default Vue.extend({
  name: 'TokenInfo',
  data() {
    return {
      items: [
        {
          name: 'Name',
          key: 'name',
        },
        {
          name: 'Symbol',
          key: 'symbol',
        },
        {
          name: 'Total supply',
          key: 'totalSupply',
        },
        {
          name: 'Total burned',
          key: 'totalBurned',
        },
        {
          name: 'Remaining supply',
          key: 'remainingSupply',
        },
        {
          name: 'Total holders',
          key: 'totalHolders',
        },
      ],
    }
  },
  created() {
    this.$store.dispatch(ActionTypes.FetchTokenInfo)
  },
})
</script>

<style scoped></style>
