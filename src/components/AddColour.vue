<template>
  <div
    class="overflow-hidden overflow-y-scroll w-9/10 sm:w-1/2 lg:w-3/10 lg:h-full p-5 lg:pr-0 bg-green-900 text-white h-screen fixed right-0 top-0"
    :class="{ hidden: !overlay }"
  >
    <Heading :level="2">Manage your colours</Heading>
    <div
      class="absolute top-0 right-0 py-6 px-5 cursor-pointer lg:pr-0"
      @click="toggle(false)"
    >
      <fa icon="times" width="24" height="24"></fa>
    </div>
    <div class="mb-2">
      <div>
        <label for="ColourID">Colour ID</label>
      </div>
      <div>
        <input
          class="border border-gray-400 w-full py-1 px-2 bg-transparent"
          type="number"
          min="1"
          max="999"
          maxlength="3"
          v-model="colour.id"
          id="ColourID"
          v-on:keyup.enter="addColour"
        />
      </div>
    </div>
    <div class="mb-2">
      <div>
        <label for="ColourName">Colour Name</label>
      </div>
      <div>
        <input
          class="border border-gray-400 w-full py-1 px-2 bg-transparent"
          type="text"
          v-model="colour.name"
          id="ColourName"
          v-on:keyup.enter="addColour"
        />
      </div>
    </div>
    <div class="mb-2">
      <div>Colour in RGB</div>
      <div class="flex content-center">
        <label for="ColourR">R:</label>
        <input
          class="border border-gray-400 w-full py-1 px-2 mx-2 bg-transparent"
          type="number"
          min="0"
          max="255"
          maxlength="3"
          v-model="colour.r"
          id="ColourR"
          v-on:keyup.enter="addColour"
        />
        <label for="ColourG">G:</label>
        <input
          class="border border-gray-400 w-full py-1 px-2 mx-2 bg-transparent"
          type="number"
          min="0"
          max="255"
          maxlength="3"
          v-model="colour.g"
          id="ColourG"
          v-on:keyup.enter="addColour"
        />
        <label for="ColourB">B:</label>
        <input
          class="border border-gray-400 w-full py-1 px-2 ml-2 bg-transparent"
          type="number"
          min="0"
          max="255"
          maxlength="3"
          v-model="colour.b"
          id="ColourB"
          v-on:keyup.enter="addColour"
        />
      </div>
    </div>
    <div class="mb-2">
      <div>
        <label for="Brand">Brand</label>
      </div>
      <div>
        <select
          class="border border-gray-400 w-full py-1.5 px-1 bg-transparent"
          name="Brand"
          id="Brand"
          v-model="colour.brand"
          disabled
        >
          <option value="Hama">Hama</option>
          <option value="Artkal">Artkal</option>
          <option value="Perler">Perler</option>
        </select>
      </div>
    </div>
    <div class="mb-2">
      <div>
        <label for="Type">Type</label>
      </div>
      <div>
        <select
          class="border border-gray-400 w-full py-1 px-2 bg-transparent"
          name="Type"
          id="Type"
          v-model="colour.type"
          disabled
        >
          <option value="Midi">Midi</option>
          <option value="Mini">Mini</option>
        </select>
      </div>
    </div>
    <div class="mb-2">
      <div>Number of bags</div>
      <div class="flex">
        <label for="Bags1000">1000x</label>
        <input
          class="border border-gray-400 w-full py-1 px-2 mx-2 bg-transparent"
          type="number"
          v-model="colour.bags1000"
          id="Bags1000"
        />
        <label for="Bags3000">3000x</label>
        <input
          class="border border-gray-400 w-full py-1 px-2 mx-2 bg-transparent"
          type="number"
          v-model="colour.bags3000"
          id="Bags3000"
        />
        <label for="Bags5000">5000x</label>
        <input
          class="border border-gray-400 w-full py-1 px-2 ml-2 bg-transparent"
          type="number"
          v-model="colour.bags5000"
          id="Bags5000"
        />
      </div>
    </div>
    <div class="flex content-center mb-2">
      <div>
        <label for="Owned">Owned</label>
      </div>
      <div class="order-first">
        <input
          class="border border-gray-400 py-1 px-2 mr-2"
          type="checkbox"
          v-model="colour.owned"
          id="Owned"
        />
      </div>
    </div>
    <div class="flex mt-10 justify-end">
      <button
        v-if="!editing"
        class="hover:bg-black hover:bg-opacity-30 py-2 px-5 border border-1 border-white"
        @click="addColour"
      >
        Add this colour
      </button>
      <button
        v-if="editing"
        class="mr-4 hover:bg-black hover:bg-opacity-30 py-2 px-5 border border-1 border-white"
        @click="clearForm"
      >
        Clear the form
      </button>
      <button
        v-if="editing"
        class="hover:bg-black hover:bg-opacity-30 py-2 px-5 border border-1 border-white"
        @click="addColour"
      >
        Update this colour
      </button>
    </div>
  </div>
</template>

<script>
import { db } from "@/firestore.js";
import Heading from "@/components/parts/Heading";

export default {
  components: {
    Heading
  },
  props: {
    overlay: Boolean,
    toggle: Function,
    colourProp: Object,
    editing: Boolean
  },
  data() {
    return {
      colour: this.colourProp
    };
  },
  computed: {
    colourCode() {
      var colour = ["H", this.colour.id > 9 ? "" : "0", this.colour.id];
      return colour.join("");
    }
  },
  methods: {
    addColour() {
      db.collection("colours")
        .doc(this.colourCode)
        // Add the new colour to the database
        .set({
          id: parseInt(this.colour.id),
          code: this.colourCode,
          name: this.colour.name,
          r: parseInt(this.colour.r),
          g: parseInt(this.colour.g),
          b: parseInt(this.colour.b),
          brand: this.colour.brand,
          type: this.colour.type,
          bags1000: parseInt(this.colour.bags1000),
          bags3000: parseInt(this.colour.bags3000),
          bags5000: parseInt(this.colour.bags5000),
          owned: this.colour.owned
        })
        // Clear the input fields after adding a colour
        .then(() => {
          this.colour.id = "";
          this.colour.name = "";
          this.colour.r = "0";
          this.colour.g = "0";
          this.colour.b = "0";
          this.colour.bags1000 = "0";
          this.colour.bags3000 = "0";
          this.colour.bags5000 = "0";
        })
        .catch(error => {
          console.log(error);
        });
      document.getElementById("ColourID").focus();
    },
    clearForm() {
      // Clear the form fields
      for (let index in this.colour) {
        let data = this.colour[index];
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
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
}
</style>
