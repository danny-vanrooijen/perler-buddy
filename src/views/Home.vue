<template>
  <div class="lg:flex">
    <my-collection
      :overlay="colourOverlay"
      :toggle="toggleColourOverlay"
    ></my-collection>
    <add-colour
      :overlay="colourOverlay"
      :toggle="toggleColourOverlay"
    ></add-colour>
  </div>
</template>

<script>
import AddColour from "@/components/AddColour";
import MyCollection from "@/components/MyCollection";

export default {
  data() {
    return {
      colourOverlay: false
    };
  },
  components: {
    AddColour,
    MyCollection
  },
  methods: {
    toggleColourOverlay() {
      this.colourOverlay = !this.colourOverlay;
    }
  }
};
</script>
