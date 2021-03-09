<template>
  <td
    class="lg:border w-2 h-2 lg:w-5 lg:h-5 xl:w-6 xl:h-6 relative"
    :class="{ 'lg:border-transparent': legend }"
  >
    <div
      class="hidden md:flex absolute w-full h-full top-0 left-0 justify-center place-items-center"
    >
      <slot></slot>
    </div>
  </td>
</template>

<script>
export default {
  props: {
    legend: Boolean
  }
};
</script>
