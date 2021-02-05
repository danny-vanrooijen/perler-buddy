<template>
  <label :for="id"><slot></slot></label>
</template>

<script>
export default {
  props: {
    InputId: {
      type: String
    }
  },
  data() {
    return {
      id: this.InputId
    };
  }
};
</script>
