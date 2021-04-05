<template>
  <div
    class="text-xs m-auto flex justify-center w-full h-full place-items-center"
  >
    <table class="border-separate md:border-collapse">
      <!-- The first row shows the horizontal peg count -->
      <tr>
        <td></td>
        <template v-for="count in boardSize" :key="count">
          <Cell :legend="true">{{ count }}</Cell>
        </template>
        <td></td>
      </tr>
      <tr v-for="countX in boardSize" :key="countX">
        <!-- Each first cell shows the vertical peg count -->
        <Cell :legend="true">{{ countX }}</Cell>
        <Cell
          v-for="countY in boardSize"
          :key="countY"
          :class="colour[random()]"
        >
          29
        </Cell>
        <!-- Each last cell shows the vertical peg count -->
        <Cell :legend="true">{{ countX }}</Cell>
      </tr>
      <!-- The last row shows the horizontal peg count -->
      <tr>
        <td></td>
        <template v-for="count in boardSize" :key="count">
          <Cell :legend="true">{{ count }}</Cell>
        </template>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Cell from "./Board/Cell";

export default {
  components: {
    Cell
  },
  data() {
    return {
      boardSize: 29,
      colour: {
        0: "bg-red-500",
        1: "bg-blue-500",
        2: "bg-green-500",
        3: "bg-gray-500",
        4: "bg-yellow-500",
        5: "bg-indigo-500",
        6: "bg-purple-500",
        7: "bg-pink-500"
      }
    };
  },
  methods: {
    random() {
      return Math.floor(
        Math.random() * Math.floor(Object.keys(this.colour).length)
      );
    }
  }
};
</script>
