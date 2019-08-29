<template>
  <v-container>
    <v-form @submit="submit($event)">
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="login-header">Login</h1>
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
        <v-flex xs12>
          <p class="qp-invalid" v-if="invalidCredentials">Sorry, your username or password is incorrect.</p>
        </v-flex>
      </v-layout>
      <v-btn block large depressed type="submit" class="qp-primary" @click="submit($event)">
        <span>Login</span>
      </v-btn>
      <v-layout row wrap>
        <v-flex xs12 class="create-account-link">
          <a @click="createAccount">New user?  Create an account</a>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
/**
 * This component handles the login process to the application
 */
export default {
  data () {
    return {
      password: '',
      phoneNumber: '',
      invalidCredentials: false,
    };
  },

  computed: {
    /**
     * True if the user logged in successfully and has an account
     */
    loginSuccessful() {
      return this.$store.getters.customerExists;
    },
  },

  methods: {
    /**
     * Attempt to login
     */
    async submit(event) {
      if (event) {
        event.preventDefault();
      }

      var phoneNumber = this.phoneNumber;
      var password = this.password;

      await this.$store.dispatch('loginCustomer', {phoneNumber, password});
      if (this.loginSuccessful) {
        this.$router.push({name: 'confirm-order'});
      } else {
        this.invalidCredentials = true;
      }
    },

    createAccount() {
      // TODO
    }
  }
};
</script>

<style lang="scss" scoped>

.create-account-link {
  text-align: center;
  margin-top: 3rem;
}

.login-header {
  text-align: center;
}
</style>

