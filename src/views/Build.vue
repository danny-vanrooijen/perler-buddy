<template>
  <Navigation></Navigation>
  <div
    class="lg:hidden flex justify-center place-items-center w-screen h-screen text-2xl text-center p-10 -mt-8"
  >
    Please use a larger device for this view
  </div>
  <div class="hidden lg:flex">
    <div class="w-3/5 md:w-2/3 h-screen">
      <PegBoard></PegBoard>
    </div>
    <div class="w-2/5 md:w-1/3 h-screen">
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
