<template>
  <div>
    <div class="font-header">{{ count }}x</div>
    <div class="relative">
      <IncreaseDecrease :colour="colour" :count="count"></IncreaseDecrease>
    </div>
  </div>
</template>

<script>
import IncreaseDecrease from "@/components/parts/IncreaseDecrease";

export default {
  components: {
    IncreaseDecrease
  },
  props: {
    colour: Object,
    count: Number
  }
};
</script>
