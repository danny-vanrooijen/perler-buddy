<template>
  <div></div>
</template>

<script>
import { db } from "@/firestore";

export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getDatabase().onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        console.log("Change type: ", change.type);
      });
    });
  },
  methods: {
    getDatabase() {
      return db.collection("todo-items");
    }
  }
};
</script>
