<template>
  <div>
    <ul v-for="(data, id) in colours" :key="id">
      <li>{{ id }} : {{ data.name }}</li>
    </ul>
  </div>
</template>

<script>
import { db } from "@/firestore";

export default {
  data() {
    return {
      colours: {}
    };
  },
  mounted() {
    this.colours = db
      .collection("colours")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.colours[doc.id] = doc.data();
        });
      });
  },
  methods: {}
};
</script>
