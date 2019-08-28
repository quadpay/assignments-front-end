<template>
  <v-container>
    <v-form @submit="submit($event)">
      <v-layout row wrap>
        <v-flex xs12>
          <h4>Payment Information</h4>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-if="hasPaymentSources">
        <v-radio-group v-model="selectedPaymentSource" :mandatory="true">
          <v-radio
            v-for="source in paymentSources"
            :label="formatPaymentSourceLabel(source)"
            :key="source.id"
            :value="source.id"
            color="blue darken-2"
          ></v-radio>
        </v-radio-group>
      </v-layout>
      <v-layout row wrap v-else>
        <!-- TODO -->
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <p class="qp-invalid" v-if="isError">Sorry, there was an error confirming your order.</p>
        </v-flex>
        <v-flex xs12>
          <v-btn block large depressed type="submit" class="qp-primary" @click="submit($event)">
            <span>Confirm Order</span>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedPaymentSource: this.hasPaymentSources
        ? this.paymentSources[0].id
        : undefined,
      isError: false,
    };
  },

  computed: {
    hasPaymentSources() {
      return (
        this.$store.state.paymentSources &&
        this.$store.state.paymentSources.length > 0
      );
    },

    paymentSources() {
      return this.$store.state.paymentSources;
    }
  },

  methods: {
    formatPaymentSourceLabel(paymentSource) {
      return `${paymentSource.name} - ${paymentSource.lastFour} - ${paymentSource.brand}`;
    },
    
    /**
     * Confirm the order
     */
    async submit(event) {
      if (event) {
        event.preventDefault();
      }

      var customerId = this.$store.state.customer.id;
      var paymentSourceId = this.selectedPaymentSource;

      await this.$store.dispatch('completeOrder', {customerId, paymentSourceId});
      if (this.$store.getters.isOrderCompleted) {
        this.$router.push({name: 'successful-order'});
      } else {
        this.isError = true;
      }
    },
  }
};
</script>
