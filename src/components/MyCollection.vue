<template>
  <div class="w-full p-5 lg:h-screen">
    <Heading :level="1">Your colour collection</Heading>
    Add filter here
    <div>
      <div
        class="border-2 border-gray-400 rounded-lg mb-4 relative overflow-hidden group cursor-pointer hover:ring-4 ring-offset-2 ring-offset-gray-200 ring-blue-500"
        v-for="colour in colourCollection"
        :key="colour"
        click="toggleColourOverlay(colour.code)"
      >
        <div
          class="block p-4 md:p-6 bg-white"
          :class="{
            'opacity-30': !colour.owned
          }"
        >
          <div
            class="absolute top-4 right-4 md:bottom-6 md:right-6 md:top-auto"
          >
            <div
              class="w-6 h-6 md:w-8 md:h-8 bg-white border-8 md:border-8 rounded-full"
              :style="'border-color:rgb(' + colourRGB(colour) + ')'"
            ></div>
          </div>
          <div class="mb-2 sm:flex justify-between items-baseline w-full">
            <div class="md:order-last">
              {{ colour.brand }} / {{ colour.type }}
            </div>
            <h2>
              <span class="font-header text-2xl">{{ colour.code }} - </span>
              <span class="font-header text-2xl">{{ colour.name }}</span>
            </h2>
          </div>
          <div class="grid grid-cols-4 gap-4 sm:w-2/3 xl:w-1/2">
            <BagsOwned :count="1000" :colour="colour"></BagsOwned>
            <BagsOwned :count="3000" :colour="colour"></BagsOwned>
            <BagsOwned :count="5000" :colour="colour"></BagsOwned>
            <div>
              <div class="font-header">Stock</div>
              <div class="mt-9 text-2xl">{{ totalPerler(colour) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firestore";
import Heading from "@/components/parts/Heading";
import BagsOwned from "@/components/parts/BagsOwned";

export default {
  components: {
    Heading,
    BagsOwned
  },
  props: {
    overlay: Boolean,
    toggle: Function,
    colourProp: Object,
    editing: Boolean
  },
  data() {
    return {
      colourCollection: {},
      colourForm: this.colourProp
    };
  },
  mounted() {
    db.collection("colours")
      .orderBy("code")
      .onSnapshot(
        snapshot => {
          snapshot.docChanges().forEach(change => {
            if (change.type === "removed") {
              return;
            } else if (change.type === "modified") {
              this.addColourToList(change.doc.data());
            } else if (change.type === "added") {
              this.addColourToList(change.doc.data());
            }
          });
        },
        error => {
          console.log(error);
        }
      );
  },
  methods: {
    addColourToList(colour) {
      this.colourCollection[colour.code] = colour;
    },
    totalPerler(colour) {
      return (
        colour.bags1000 * 1000 + colour.bags3000 * 3000 + colour.bags5000 * 5000
      );
    },
    colourRGB(colour) {
      return colour.r + "," + colour.g + "," + colour.b;
    },
    isOwned(colour) {
      return colour.owned ? "checked" : "";
    },
    toggleColourOverlay(colourCode) {
      // Toggle the add colour overlay
      this.toggle(true);
      // Update the fields in the add colour form
      for (let index in this.colourCollection[colourCode]) {
        let data = this.colourCollection[colourCode][index];
        this.colourForm[index] = data;
      }
    }
  }
};
</script>

<style lang="less" scoped>
// Custom scrollbar that is more attactive
@media (min-width: 768px) {
  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #666;
  }
}
</style>
