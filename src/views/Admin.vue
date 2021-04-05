<template>
  <div class="lg:flex md:container md:w-9/10 lg:w-4/5 relative">
    <Navigation></Navigation>
    <AddColour
      :overlay="colourOverlay"
      :toggle="toggleColourOverlay"
      :colourProp="colour"
      :editing="editing"
    ></AddColour>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
  },
  data() {},
  methods: {}
};
</script>
