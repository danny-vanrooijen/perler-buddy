<template>
  <div class="w-full lg:h-screen p-4 font-normal">
    <h1 class="font-header text-4xl mb-6 text-center lg:text-left font-thin">
      Your colour collection
    </h1>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 pb-8">
      <div
        class="bg-white relative shadow border-b-8"
        :class="{
          'opacity-30': !colour.owned
        }"
        :style="'border-color:rgb(' + colourRGB(colour) + ')'"
        v-for="colour in colourCollection"
        :key="colour"
        click="toggleColourOverlay(colour.code)"
      >
        <div class="block p-4 md:p-6">
          <div class="absolute bottom-4 right-4">
            <div
              class="w-8 h-8 border-8 rounded-full"
              :style="'border-color:rgb(' + colourRGB(colour) + ')'"
            ></div>
          </div>
          <div class="mb-2 flex justify-between items-baseline w-full">
            <h2 class="font-header text-2xl">
              <span>{{ colour.code }} - </span>
              <span>{{ colour.name }}</span>
            </h2>
            <div class="font-thin text-right">
              {{ colour.brand }} / {{ colour.type }}
            </div>
          </div>
          <div class="grid grid-cols-5 gap-4">
            <BagsOwned :count="1000" :colour="colour"></BagsOwned>
            <BagsOwned :count="3000" :colour="colour"></BagsOwned>
            <BagsOwned :count="5000" :colour="colour"></BagsOwned>
            <div>
              <div class="font-header">Stock</div>
              <div class="mt-9 text-2xl">
                {{ totalPerler(colour) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firestore";
import BagsOwned from "@/components/parts/BagsOwned";

export default {
  components: {
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
