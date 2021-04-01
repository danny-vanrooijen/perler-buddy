<template>
  <Navigation></Navigation>
  <div class="flex">
    <div class="w-3/5 md:w-2/3 h-screen bg-green-500">
      <PegBoard></PegBoard>
    </div>
    <div class="w-2/5 md:w-1/3 h-screen bg-blue-500">
      <Legend></Legend>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import PegBoard from "@/components/PegBoard";
import Legend from "@/components/Legend";

export default {
  components: {
    Navigation,
    PegBoard,
    Legend
  }
};
</script>
