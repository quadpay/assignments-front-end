import Vue from 'vue';
import Vuex from 'vuex';
import api from './services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    order: {
      id: 'c96c4df9-589b-4cb1-ac2d-7996ed175833',
      amount: 123.45,
      merchantName: 'The Store',
      status: 'Started',
    },
    customer: {},
    paymentSources: [],
  },

  mutations: {
    setCustomer(state, customer) {
      state.customer = customer;
    },

    setPaymentSources(state, paymentSources) {
      state.paymentSources = paymentSources;
    },

    markOrderAsCompleted(state) {
      state.order.status = 'Completed';
    },
  },

  getters: {
    isOrderCompleted: (state) => {
      return state.order.status === 'Completed';
    },

    customerExists: (state) => {
      return !!state.customer;
    }
  },

  actions: {
    async completeOrder({commit, state}, {customerId, paymentSourceId} ) {
      await api.completeOrder(state.order.id, customerId, paymentSourceId);
      commit('markOrderAsCompleted');
    },

    async loginCustomer({commit}, {phoneNumber, password}) {
      var customer = await api.login(phoneNumber, password);
      if (customer) {
        commit('setCustomer', customer);
        var paymentSources = await api.retrievePaymentSources();
        commit('setPaymentSources', paymentSources);
      }
    },

    async addPaymentSource() {
      // TODO
    },

    async addOrUpdateCustomer() {
      // TODO
    },
  },
});
