<template>
  <v-container>
    <v-layout row wrap v-if="!newCustomer">
      <v-flex xs12>
        <h4>Shipping Information</h4>
      </v-flex>
      <v-flex xs12>
        <span>{{customer.shippingAddress.line1}}</span>
      </v-flex>
      <v-flex xs12 v-if="!!customer.shippingAddress.line2">
        <span>{{customer.shippingAddress.line2}}</span>
      </v-flex>
      <v-flex xs12>
        <span>{{customer.shippingAddress.city}}, {{customer.shippingAddress.state}} {{customer.shippingAddress.postalCode}} {{customer.shippingAddress.country}}</span>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      New Customer
      <!-- TODO -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    /**
     * True if the user is a new customer and doesn't have an account.
     */
    newCustomer() {
      return !this.$store.getters.customerExists;
    },

    customer() {
      return this.$store.getters.customer;
    },
  },
};
</script>
