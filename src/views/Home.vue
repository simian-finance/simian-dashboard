<template>
  <div class="text-left">
    <h1 class="text-h1">Home</h1>
    <p />
    <div class="text-body-1">
      <p>Welcome to the Simian Finance dashboard!</p>
      <p>We're happy to have you here. Have a look around and see what we got for you.</p>
    </div>
    <v-card max-width="400">
      <v-list>
        <v-list-item v-for="item in items" :key="item.name" link :to="item.path">
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Token',
          path: '/token',
        },
      ],
    }
  },
}
</script>

<style></style>
