<template>
  <div>
    <ul v-for="colour in colourCollection" :key="colour">
      <li>{{ colour.code }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colourCollection: this.$store.state.perler
    };
  },
  methods: {}
};
</script>
