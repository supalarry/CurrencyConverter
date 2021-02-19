<template>
  <!-- eslint-disable max-len -->
  <div>
    <input
      class="h-full w-full font-semibold focus:outline-none active:outline-none"
      @input="inputValueUpdated"
      @blur="format"
      type="text"
      v-model="inputValue">
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    value: {
      type: Number,
    },
    causedChange: {
      type: Boolean,
    },
  },
  data() {
    return {
      inputValue: this.addThousandSeperator(this.value.toFixed(2)),
    };
  },
  watch: {
    value(newValue) {
      if (!this.causedChange) {
        this.inputValue = this.addThousandSeperator(newValue.toFixed(2));
      }
    },
  },
  methods: {
    format() {
      this.inputValue = this.addThousandSeperator(this.inputValue.replace(/,/g, ''));
    },
    inputValueUpdated() {
      if (this.inputValue !== '') {
        this.$emit('text-input-updated', this.inputValue.replace(/,/g, ''));
      }
    },
    addThousandSeperator(value) {
      return value.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    },
  },
};
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
