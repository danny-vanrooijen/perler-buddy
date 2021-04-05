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
  data() {
    return {
      colourOverlay: true,
      editing: true,
      colour: {
        id: "",
        name: "",
        r: "0",
        g: "0",
        b: "0",
        brand: "Hama",
        type: "Midi",
        bags1000: "0",
        bags3000: "0",
        bags5000: "0",
        owned: true
      }
    };
  },
  methods: {
    toggleColourOverlay(edit) {
      this.colourOverlay = !this.colourOverlay;
      this.editing = edit;

      // If the colour overlay is toggled to show, also fill all the fields
      if (this.colourOverlay) {
        return;
      }
    }
  }
};
</script>
