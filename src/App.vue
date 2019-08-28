<template>
  <v-app>
    <v-content>
      <v-container class="qp-app-container">
        <v-layout justify-center row>
          <!-- Breakpoint classes control the width of the main panel across screen resolutions -->
          <v-flex md5 sm8 xs12>
            <header>
              <v-img :src="require('./assets/logo.svg')" contain height="38"></v-img>
            </header>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
      <footer>
        <div class="qp-footer-text-container">
          <span>&copy; 2019 QuadPay</span>
          <span class="qp-spacer">∙</span>
          <a
            href="https://www.quadpay.com/terms-and-conditions/"
            target="_blank"
            rel="noopener"
          >Terms</a>
          <span class="qp-spacer">∙</span>
          <a href="https://www.quadpay.com/privacy-policy/" target="_blank" rel="noopener">Privacy</a>
        </div>
      </footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>

<style lang="scss" scoped>
.qp-footer-text-container {
  font-weight: 400;
  letter-spacing: 0.07rem;
  color: #b2b7c3;
  text-align: center;
  margin: 2rem 0;
  font-size: 0.8rem;

  // Pipes between footer links
  span.qp-spacer {
    font-weight: 400;
    margin: 0 0.5rem;
  }

  a {
    color: #b2b7c3;
    text-decoration: none;
    font-weight: inherit;
  }
}

header {
  margin-bottom: 2rem;
}

.qp-app-container {
  max-width: 960px;
}
</style>
