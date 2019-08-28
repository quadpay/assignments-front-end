<template>
  <v-container>
    <v-layout v-if="!!order">
      <v-flex xs12>
        <h3 class="order-heading">Confirm order from '{{order.merchantName}}' for ${{order.amount}}</h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$store.getters.order;
    }
  },
};
</script>

<style lang="scss" scoped>
  .order-heading {
    text-align: center;
    color: #B2B7C3;
  }
</style>
