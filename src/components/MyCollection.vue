<template>
  <div class="w-full p-5 lg:w-7/10 lg:overflow-y-scroll lg:h-screen">
    <h1 class="font-header text-4xl mb-6 text-center lg:text-left">
      Your colour collection
    </h1>
    <div>
      <div
        class="bg-white border-2 border-gray-400 rounded-lg mb-4 relative overflow-hidden"
        v-for="colour in colours"
        :key="colour"
        :class="{
          'opacity-30': !colour.owned,
          'group cursor-pointer hover:ring-4 ring-offset-2 ring-offset-gray-200 ring-blue-500':
            colour.owned
        }"
      >
        <div class="block p-6 pr-16">
          <div class="mb-2 flex justify-between items-baseline w-full">
            <h2>
              <span class="font-header text-2xl">{{ colour.code }} - </span>
              <span class="font-header text-2xl">{{ colour.name }}</span>
              <span class="text-base ml-2">({{ totalPerler(colour) }})</span>
            </h2>
            <div class="justify-self-end">
              {{ colour.brand }} / {{ colour.type }}
            </div>
          </div>
          <div class="flex">
            <div class="w-20">
              <div class="font-header">Owned</div>
              <div class="mt-1">
                <fa
                  v-if="colour.owned"
                  icon="check"
                  width="20"
                  height="20"
                  class="text-green-500"
                ></fa>
                <fa
                  v-else
                  icon="times"
                  width="20"
                  height="20"
                  class="text-red-500"
                ></fa>
              </div>
            </div>
            <div class="w-60">
              <div class="font-header">Colour</div>
              <div class="text-xl">rgb({{ colourRGB(colour) }})</div>
            </div>
            <div class="w-80">
              <div class="font-header"># of bags</div>
              <div class="flex justify-between">
                <div class="text-xl">{{ colour.bags1000 }} x 1000</div>
                <div class="text-xl">{{ colour.bags3000 }} x 3000</div>
                <div class="text-xl">{{ colour.bags5000 }} x 5000</div>
              </div>
            </div>
            <div
              class="absolute order-last w-10 h-full right-0 top-0 border-4 border-white rounded-tr-lg rounded-br-lg"
              :style="'background-color:rgb(' + colourRGB(colour) + ')'"
            ></div>
          </div>
        </div>
        <div
          class="group-hover:opacity-70 bg-blue-200 absolute left-0 top-0 w-full h-full flex justify-center opacity-0"
          @click="toggle"
        >
          <fa class="self-center" icon="pencil" width="36" height="36"></fa>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firestore";

export default {
  props: {
    overlay: Boolean,
    toggle: Function
  },
  data() {
    return {
      colours: {}
    };
  },
  mounted() {
    this.getDatabase()
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
    getDatabase() {
      return db.collection("colours");
    },
    addColourToList(colour) {
      this.colours[colour.code] = colour;
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
