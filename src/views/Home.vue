<template>
  <!-- eslint-disable max-len -->
  <main>
    <div class="max-w-2xl mx-auto sm:px-0 sm:w-9/12">
      <div class="text-center sm:text-left mt-16 mb-8 px-8 sm:px-0">
        <h1 class="heading">Currency converter</h1>
        <h1 class="description sm:mt-1 sm:inline-block">Bidirectional conversion</h1>
        <span class="hidden sm:inline-block text-white-ady mx-1">&</span>
        <h1 class="description sm:mt-1 sm:inline-block">Multiple value pairs</h1>
      </div>
      <div v-if="startCurrencyPairsFetched">
        <transition-group name="list" tag="p">
          <CurrencyConverter
            v-for='(currencyPair, index) in startCurrencyPairs' :key='index + currencyPair[0] + currencyPair[1]'
            :currencies='currencyPair'>
          </CurrencyConverter>
        </transition-group>
      </div>
      <div v-else>
        <img class="w-24 h-24 mx-auto my-8" src="../assets/misc/spinner.svg">
      </div>
    </div>
    <div class="flex justify-center">
      <button
        @click="addNewCurrencyPair"
        class="border rounded-md border-green-ady
        px-4 py-2 mb-8 w-40 sm:w-64 text-green-ady focus:outline-none">
        Add a pair
      </button>
    </div>
  </main>
</template>

<script>
import CurrencyConverter from '@/components/CurrencyConverter/CurrencyConverter.vue';

/* eslint-disable no-await-in-loop */

export default {
  name: 'Home',
  components: {
    CurrencyConverter,
  },
  data: () => ({
    startCurrencyPairs: [
      ['EUR', 'USD'],
    ],
    startCurrencyPairsFetched: false,
  }),
  methods: {
    async fetchStartCurrencyPairs(currencyPairs) {
      for (let i = 0; i < currencyPairs.length; i += 1) {
        for (let j = 0; j < currencyPairs[i].length; j += 1) {
          await this.$store.dispatch('fetchRate', currencyPairs[i][j]);
        }
      }
      this.startCurrencyPairsFetched = true;
    },
    addNewCurrencyPair() {
      this.startCurrencyPairs.push(['EUR', 'USD']);
    },
  },
  async created() {
    await this.fetchStartCurrencyPairs(this.startCurrencyPairs);
  },
};
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
