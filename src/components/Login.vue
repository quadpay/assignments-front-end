<template>
  <v-container>
    <v-form @submit="submit($event)">
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field
            autofocus
            type="tel"
            v-model="phoneNumber"
            outlined
            required
            autocomplete="tel"
            label="Phone Number"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            autofocus
            type="password"
            v-model="password"
            outlined
            required
            label="Password"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-btn block large depressed type="submit" class="qp-primary" @click="submit($event)">
        <span>Login</span>
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import store from '@/store';

export default {
  data () {
    return {
      password: '',
      phoneNumber: '',
    };
  },
  methods: {
    async submit(event) {
      if (event) {
        event.preventDefault();
      }

      var phoneNumber = this.phoneNumber;
      var password = this.password;

      await store.dispatch('loginCustomer', {phoneNumber, password});
      if (this.$store.getters.customerExists) {
        this.$router.push({name: 'confirm-order'});
      } else {
        // TODO - Customer doesn't exist
      }
    }
  }
};
</script>
