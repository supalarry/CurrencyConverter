import Axios from 'axios';

/* eslint-disable */

const state = {
  rates: {},
};

const getters = {
  getRates(state) {
    return state.rates;
  },
};

const mutations = {
  fetchRate(state, { currency, exchangeRate }) {
    state.rates[currency] = exchangeRate;
  },
};

const actions = {
  async fetchRate(state, currency) {
    const response = await Axios.get(process.env.VUE_APP_EXCHANGE_RATES_API + currency);
    await state.commit('fetchRate', { currency, exchangeRate: response.data });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
