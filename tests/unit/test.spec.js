import { mount, createLocalVue } from '@vue/test-utils';
import Login from '@/components/Login.vue';
import store, { mutations, getters } from '@/store';
import Vue from 'vue'; 
import Vuetify from 'vuetify'; 

Vue.use(Vuetify);


// destructure assign `mutations`
const { markOrderAsCompleted } = mutations;


describe('Login.vue', () => {
  const router = {
    push: jest.fn(),
  };


  it('Should mount component', () => {
    mount(Login);
  });

  it('When submitting valid data, Should redirect to confirm order page', async () => {
    // Arrange
    const wrapper = mount(Login, {
      mocks: {
        $router: router,
        $store: store,
      },
    });
    wrapper.setData({
      phoneNumber: '5551234567',
      password: 'quadpay',
    });

    // Act
    await wrapper.vm.submit();

    // Assert
    expect(router.push).toHaveBeenCalledWith({name: 'confirm-order'});
  });
});

describe('store.js', () => {
  it('When marking order as completed, Should update state', () => {
    // Arrange
    const state = {
      order: {
        status: 'Started',
      },
    };

    // Act
    markOrderAsCompleted(state);

    // Assert
    expect(getters.isOrderCompleted(state)).toBeTruthy();
  });
});
