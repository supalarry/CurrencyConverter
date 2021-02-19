<template>
  <!-- eslint-disable max-len -->
  <section class="font-sans px-4 sm:px-0 my-8">
    <div class="flex flex-col sm:flex-row justify-between">
      <Currency
        class="rounded-t-md border-b sm:border-b-0 sm:border-r sm:rounded-tr-none"
        :currency='firstCurrency'
        :currencyAmount='firstCurrencyAmount'
        :currencyCausedChange='firstCurrencyCausedChange'
        @update-currency-type='firstCurrencyChanged'
        @update-currency-amount='firstCurrencyAmountChanged'>
      </Currency>
      <Currency
        class="sm:rounded-tr-md"
        :currency='secondCurrency'
        :currencyAmount='secondCurrencyAmount'
        :currencyCausedChange='secondCurrencyCausedChange'
        @update-currency-type='secondCurrencyChanged'
        @update-currency-amount='secondCurrencyAmountChanged'>
      </Currency>
    </div>
    <div class="text-center bg-green-ady rounded-b-md">
      <CurrencyRatio
        :firstCurrency='firstCurrency'
        :ratio='firstAgainstSecondCurrency'
        :secondCurrency='secondCurrency'>
      </CurrencyRatio>
    </div>
  </section>
</template>

<script>
import Currency from '@/components/CurrencyConverter/components/Currency.vue';
import CurrencyRatio from '@/components/CurrencyConverter/components/CurrencyRatio.vue';

/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */

export default {
  name: 'CurrencyConverter',
  components: {
    Currency,
    CurrencyRatio,
  },
  props: {
    currencies: {
      type: Array,
    },
  },
  data() {
    return {
      firstCurrency: this.currencies[0],
      secondCurrency: this.currencies[1],
      firstCurrencyAmount: 1,
      secondCurrencyAmount: 0,
      firstAgainstSecondCurrency: 0,
      secondAgainstFirstCurrency: 0,
      firstCurrencyCausedChange: false,
      secondCurrencyCausedChange: false,
    };
  },
  methods: {
    async setCurrencyRates() {
      if (this.firstCurrency === this.secondCurrency) {
        this.firstAgainstSecondCurrency = 1;
        this.secondAgainstFirstCurrency = 1;
        return;
      }
      const rates = await this.$store.getters.getRates;
      if (!rates[this.firstCurrency] && !rates[this.secondCurrency]) {
        await this.$store.dispatch('fetchRate', this.firstCurrency);
        await this.$store.dispatch('fetchRate', this.secondCurrency);
      }
      if (rates[this.firstCurrency]) {
        this.firstAgainstSecondCurrency = rates[this.firstCurrency].rates[this.secondCurrency];
        this.secondAgainstFirstCurrency = 1 / this.firstAgainstSecondCurrency;
      } else {
        this.secondAgainstFirstCurrency = rates[this.secondCurrency].rates[this.firstCurrency];
        this.firstAgainstSecondCurrency = 1 / this.secondAgainstFirstCurrency;
      }
    },
    async firstCurrencyChanged(...args) {
      this.firstCurrency = args[0];
      await this.setCurrencyRates();
      this.setSecondCurrencyAmount();
      this.secondCurrencyCausedChange = false;
      this.firstCurrencyCausedChange = true;
    },
    async firstCurrencyAmountChanged(...args) {
      const newAmount = args[0];
      this.secondCurrencyCausedChange = false;
      this.firstCurrencyCausedChange = true;
      this.firstCurrencyAmount = parseFloat(newAmount);
      this.setSecondCurrencyAmount();
    },
    setSecondCurrencyAmount() {
      this.secondCurrencyAmount = parseFloat((this.firstCurrencyAmount * this.firstAgainstSecondCurrency).toFixed(2));
    },
    async secondCurrencyChanged(...args) {
      this.secondCurrency = args[0];
      await this.setCurrencyRates();
      this.setFirstCurrencyAmount();
      this.firstCurrencyCausedChange = false;
      this.secondCurrencyCausedChange = true;
    },
    async secondCurrencyAmountChanged(...args) {
      const newAmount = args[0];
      this.firstCurrencyCausedChange = false;
      this.secondCurrencyCausedChange = true;
      this.secondCurrencyAmount = parseFloat(newAmount);
      this.setFirstCurrencyAmount();
    },
    setFirstCurrencyAmount() {
      this.firstCurrencyAmount = parseFloat((this.secondCurrencyAmount * this.secondAgainstFirstCurrency).toFixed(2));
    },
  },
  async beforeMount() {
    await this.setCurrencyRates();
    this.setSecondCurrencyAmount();
  },
};
</script>
