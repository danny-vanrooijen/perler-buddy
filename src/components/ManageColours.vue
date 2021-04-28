<template>
  <div
    class="fixed right-8 bottom-8 p-5 bg-green-800 flex justify-center place-items-center text-white rounded-full cursor-pointer z-10"
  >
    <fa class="inline" icon="plus" type="fal" width="24" height="24"></fa>
  </div>
  <div class="w-full pt-4 pb-40 font-normal">
    <h1 class="font-header text-4xl mb-10 text-center lg:text-left font-thin">
      Manage your colours
    </h1>
    <Tags :tags="beadTypes"></Tags>
    <div class="grid grid-cols-2 gap-20">
      <div>
        <template v-for="colour in colourCollection" :key="colour">
          <div
            class="flex relative mb-2 justify-between bg-white shadow p-2 pr-12 border-l-8"
            :style="'border-color:rgb(' + colourRGB(colour) + ')'"
          >
            <div class="flex">
              <div class="w-12 pr-2">
                {{ colour.code }}
              </div>
              <div class="w-56 pr-2">
                <input class="w-full" type="text" :value="colour.name" />
              </div>
            </div>
            <div class="flex">
              <div class="w-14 pr-2">
                <input
                  class="w-full"
                  type="number"
                  min="0"
                  max="255"
                  :value="colour.r"
                />
              </div>
              <div class="w-14 pr-2 text-right">
                <input
                  class="w-full"
                  type="number"
                  min="0"
                  max="255"
                  :value="colour.g"
                />
              </div>
              <div class="w-14 pr-2 text-right">
                <input
                  class="w-full"
                  type="number"
                  min="0"
                  max="255"
                  :value="colour.b"
                />
              </div>
            </div>
            <ul class="absolute top-0 right-0 h-full flex">
              <li
                class="bg-red-100 hover:bg-red-800 text-red-800 hover:text-red-100 cursor-pointer p-2 flex place-items-center transition-colors duration-100"
              >
                <fa icon="trash-alt" type="fal" width="16" height="16"></fa>
              </li>
            </ul>
          </div>
        </template>
      </div>
      <!-- <div class="relative">
        <div
          class="absolute top-0 right-0 w-full p-4 bg-white shadow min-h-80 flex justify-center place-items-center"
        >
          <div class="text-xl text-gray-500">
            Pick a colour on the left to edit it
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Tags from "./parts/Tags";

export default {
  components: {
    Tags
  },
  data() {
    return {
      colourCollection: this.$store.state.perler,
      beadTypes: ["Hama", "Perler", "Midi", "Mini", "Maxi", "Artkal"]
    };
  },
  methods: {
    colourRGB(colour) {
      return colour.r + "," + colour.g + "," + colour.b;
    }
  }
};
</script>
