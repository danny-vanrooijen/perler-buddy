<template>
  <router-view />
</template>

<script>
import { mapMutations } from "vuex";
import { db } from "@/firestore";

export default {
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
    // console.log("The total collection", this.$store.perler);
  },
  methods: {
    ...mapMutations(["addColour"]),
    addColourToList(colour) {
      this.addColour(colour);
    }
  }
};
</script>
