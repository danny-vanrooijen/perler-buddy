<template>
  <div class="lg:flex md:container md:w-9/10 lg:w-4/5">
    <my-collection
      :overlay="colourOverlay"
      :toggle="toggleColourOverlay"
      :colourProp="colour"
      :editing="editing"
    ></my-collection>
    <add-colour
      :overlay="colourOverlay"
      :toggle="toggleColourOverlay"
      :colourProp="colour"
      :editing="editing"
    ></add-colour>
  </div>
</template>

<script>
import AddColour from "@/components/AddColour";
import MyCollection from "@/components/MyCollection";

export default {
  data() {
    return {
      colourOverlay: false,
      editing: false,
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
  components: {
    AddColour,
    MyCollection
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
