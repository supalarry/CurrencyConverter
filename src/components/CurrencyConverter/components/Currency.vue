<template>
  <section class="bg-white-ady flex justify-between relative p-4 px-6 w-full">
    <TextInput class="text-3xl sm:text-xl md:text-3xl"></TextInput>
    <Dropdown
    class="ml-4"
    :options='currencies'
    :startingOption="'EUR'">
    </Dropdown>
  </section>
</template>

<script>
import TextInput from '@/components/shared/TextInput.vue';
import Dropdown from '@/components/shared/Dropdown.vue';

export default {
  name: 'Currency',
  components: {
    TextInput,
    Dropdown,
  },
  data: () => ({
    currencies: [
      'AUD', 'BGN', 'BRL', 'CAD',
      'CHF', 'CNY', 'CZK', 'DKK',
      'EUR', 'GBP', 'HKD', 'HRK', 'HUF',
      'IDR', 'ILS', 'INR', 'ISK',
      'JPY', 'KRW', 'MXN', 'MYR',
      'NOK', 'NZD', 'PHP', 'PLN',
      'RON', 'RUB', 'SEK', 'SGD',
      'THB', 'TRY', 'USD', 'ZAR',
    ],
  }),
};
</script>
