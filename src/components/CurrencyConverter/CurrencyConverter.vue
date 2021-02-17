<template>
  <!-- eslint-disable max-len -->
  <section class="font-sans">
    <div class="flex flex-col sm:flex-row justify-between">
      <Currency class="border-b sm:border-b-0 sm:border-r sm:border-green-ady sm:rounded-tl-md"></Currency>
      <Currency class="sm:rounded-tr-md"></Currency>
    </div>
    <div class="text-center bg-green-ady sm:rounded-b-md">
      <CurrencyRatio></CurrencyRatio>
    </div>
  </section>
</template>

<script>
import Currency from '@/components/CurrencyConverter/components/Currency.vue';
import CurrencyRatio from '@/components/CurrencyConverter/components/CurrencyRatio.vue';

export default {
  name: 'CurrencyConverter',
  components: {
    Currency,
    CurrencyRatio,
  },
};
</script>
