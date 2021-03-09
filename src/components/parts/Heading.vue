<template>
  <template v-if="level === 1">
    <h1 class="font-header text-4xl mb-6 text-center lg:text-left">
      <slot></slot>
    </h1>
  </template>
  <template v-else-if="level === 2">
    <h2 class="font-header text-2xl mb-6"><slot></slot></h2>
  </template>
</template>

<script>
export default {
  props: {
    level: Number
  }
};
</script>
