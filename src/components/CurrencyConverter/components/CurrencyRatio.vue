<template>
  <div class="text-white-ady font-medium text-base px-6 py-2">
    <h1>1 {{firstCurrency}} = {{ratioFormatted}} {{secondCurrency}}</h1>
  </div>
</template>

<script>

/* eslint-disable max-len */

export default {
  props: ['firstCurrency', 'ratio', 'secondCurrency'],
  computed: {
    ratioFormatted() {
      let leadingZeros = 0;
      const numberAsString = this.ratio.toString();
      const decimalsAsString = numberAsString.substr(numberAsString.lastIndexOf('.') + 1);
      for (let i = 0; i < decimalsAsString.length; i += 1) {
        if (decimalsAsString[i] !== '0') break;
        leadingZeros += 1;
      }
      if (leadingZeros === 0) {
        return this.ratio.toFixed(leadingZeros + 2);
      }
      return this.ratio.toFixed(leadingZeros + 1);
    },
  },
};
</script>
