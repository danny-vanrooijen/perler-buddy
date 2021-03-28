<template>
  <div class="inline-block text-center">
    <fa
      @click="updateCount(count, 1)"
      class="inline-block"
      icon="chevron-up"
      width="24"
      height="24"
    ></fa>
    <div class="text-2xl my-2 text-center border-2 border-gray-700 w-10">
      {{ colourCount }}
    </div>
    <fa
      @click="updateCount(count, -1)"
      class="inline-block transform rotate-180"
      icon="chevron-up"
      width="24"
      height="24"
    ></fa>
  </div>
</template>

<script>
import { db } from "@/firestore";

export default {
  props: {
    colour: Object,
    count: Number
  },
  data() {
    return {
      colourTemp: this.colour
    };
  },
  computed: {
    colourCount() {
      return this.colour["bags" + this.count];
    }
  },
  methods: {
    updateCount(target, amount) {
      const name = "bags" + target;
      const count = this.colour[name];

      if (count === 0 && amount === -1) {
        return;
      }

      db.collection("colours")
        .doc(this.colour.code)
        .update({
          [name]: count + amount
        });
    }
  }
};
</script>
