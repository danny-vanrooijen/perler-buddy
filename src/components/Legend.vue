<template>
  <div></div>
</template>

<script>
import { db } from "@/firestore";

export default {
  data() {
    return {};
  },
  mounted() {
    db.collection("colours")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      });
  },
  methods: {}
};
</script>
