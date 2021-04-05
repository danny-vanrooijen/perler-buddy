let perler = {};

import { db } from "@/firestore";
db.collection("colours")
  .orderBy("code")
  .onSnapshot(
    snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "removed") {
          return;
        } else if (change.type === "modified") {
          addColourToList(change.doc.data());
        } else if (change.type === "added") {
          addColourToList(change.doc.data());
        }
      });
    },
    error => {
      console.log(error);
    }
  );

const addColourToList = colour => {
  perler[colour.code] = colour;
};

export default perler;
