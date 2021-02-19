import Vue from 'vue';
import Vuex from 'vuex';
import CurrencyExchange from './modules/CurrencyExchange';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    CurrencyExchange,
  },
});
