<template>
  <div class="w-full lg:h-screen p-4 font-normal">
    <h1 class="font-header text-4xl mb-6 text-center lg:text-left font-thin">
      Manage your colours
    </h1>
    <h2 class="font-header text-2xl mb-2">Hama / Midi</h2>
    <div class="flex">
      <div class="w-1/2">
        <div class="w-9/10">
          <template v-for="colour in colourCollection" :key="colour">
            <div
              class="flex relative mb-2 justify-between bg-white shadow p-2 pr-12 border-l-8"
              :style="'border-color:rgb(' + colourRGB(colour) + ')'"
            >
              <div class="flex">
                <div class="w-12">{{ colour.code }}</div>
                <div class="w-50">{{ colour.name }}</div>
              </div>
              <div class="flex">
                <div class="w-10 text-right">{{ colour.r }}</div>
                <div class="w-10 text-right">{{ colour.g }}</div>
                <div class="w-10 text-right">{{ colour.b }}</div>
              </div>
              <ul class="absolute top-0 right-0 h-full flex">
                <li class="bg-red-100 p-2 flex place-items-center">
                  <fa
                    class="text-red-800"
                    icon="trash-alt"
                    type="fal"
                    width="16"
                    height="16"
                  ></fa>
                </li>
              </ul>
            </div>
          </template>
          <div class="flex mb-2 justify-between bg-white shadow p-2 border-l-8">
            Add new colour
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colourCollection: this.$store.state.perler
    };
  },
  methods: {
    colourRGB(colour) {
      return colour.r + "," + colour.g + "," + colour.b;
    }
  }
};
</script>
