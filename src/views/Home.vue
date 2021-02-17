<template>
  <!-- eslint-disable max-len -->
  <div class="h-full w-full bg-blue-ady">
    <div class="max-w-2xl mx-auto sm:px-0 sm:w-9/12">
      <div class="text-center sm:text-left py-16 px-8 sm:px-0">
        <h1 class="heading">Currency converter</h1>
        <p class="description sm:mt-1">Bidirectional conversion & multiple value pairs</p>
      </div>
      <CurrencyConverter
      v-for='(currencyPair, index) in startCurrencyPairs' :key='index'>
      </CurrencyConverter>
    </div>
    <div class="flex justify-center mt-8">
      <button class="border rounded-md border-green-ady px-4 py-2 w-64 text-green-ady">
        Add a pair
      </button>
    </div>
  </div>
</template>

<script>
import CurrencyConverter from '@/components/CurrencyConverter/CurrencyConverter.vue';

export default {
  name: 'Home',
  components: {
    CurrencyConverter,
  },
  data: () => ({
    startCurrencyPairs: [
      ['EUR', 'USD'],
    ],
  }),
};
</script>
