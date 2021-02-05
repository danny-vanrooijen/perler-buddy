<template>
  <div class="flex">
    <my-collection></my-collection>
    <add-colour></add-colour>
  </div>
</template>

<script>
import AddColour from "@/components/AddColour";
import MyCollection from "@/components/MyCollection";

export default {
  components: {
    AddColour,
    MyCollection
  }
};
</script>
