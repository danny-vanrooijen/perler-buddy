<template>
  <div class="flex mb-4">
    <div
      class="rounded-full bg-purple-200 text-purple-900 mr-4 px-2 cursor-pointer hover:bg-purple-300"
      v-for="index in tags"
      :key="index"
    >
      {{ index }}
    </div>
    (in progress)
  </div>
</template>

<script>
export default {
  props: {
    tags: Array
  }
};
</script>
