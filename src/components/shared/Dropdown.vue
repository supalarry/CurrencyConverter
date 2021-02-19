<template>
  <!-- eslint-disable max-len -->
  <div class="focus:outline-none sm:flex-none" @focusout="close" tabindex="0">
    <div class="current-option" @click="toggle">
      <h1 class="noSelect capitalize font-semibold">{{ currentOption }}</h1>
      <h1 v-if="closed" class="ml-1 text-sm">▼</h1><h1 v-if="!closed" class="ml-1 text-sm">▲</h1>
    </div>
    <div class="dropdown" :class="{'hidden': closed, 'h-auto': options.length < 5}">
      <div class="dropdown-option"
      v-for="(option, index) in options" :key="option + index + option"
      :class="{'border-b': index !== options.length - 1,'bg-gray-100': option === currentOption}"
      v-on:click="select(option)">
        <img class="mb-1 w-8 rounded-full border" :src="optionImages[option]">
        <h1 class="option-heading">{{option}}</h1>
        <h1 class="text-sm">{{optionDescriptions[option]}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options', 'startingOption', 'optionImages', 'optionDescriptions'],
  data: () => ({
    closed: true,
    currentOption: '',
  }),
  methods: {
    select(option) {
      this.close();
      this.currentOption = option;
      this.$emit('save-single-choice', option);
    },
    toggle() {
      this.closed = !this.closed;
    },
    close() {
      this.closed = true;
    },
  },
  beforeMount() {
    this.currentOption = this.startingOption;
  },
};
</script>

<style>
.dropdown {
  @apply w-auto;
  @apply h-56;
  @apply mt-4;
  @apply overflow-scroll;
  @apply rounded-b-md;
  @apply shadow-2xl;
  @apply absolute;
  @apply bg-white;
  @apply z-10;
  @apply right-0;
  @apply max-w-xs;
}

.dropdown-option {
  @apply flex;
  @apply flex-col;
  @apply items-center;
  @apply py-4;
  @apply px-2;
  @apply cursor-pointer;
}

.dropdown-option:focus {
    @apply outline-none;
}

.option-heading {
    @apply px-8;
    @apply leading-5;
    @apply text-blue-ady;
    @apply font-extrabold;
    @apply capitalize;
}

.current-option {
  @apply rounded-lg;
  @apply py-2;
  @apply w-auto;
  @apply cursor-pointer;
  @apply text-xl;
  @apply text-center;
  @apply flex;
  @apply items-center;
}

@screen md {
  .current-option {
    @apply text-2xl;
  }
}
</style>
