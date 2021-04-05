<template>
  <Navigation></Navigation>
  <div class="lg:flex md:container md:w-9/10 lg:w-4/5">
    <ManageColours></ManageColours>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import ManageColours from "@/components/ManageColours";

export default {
  components: {
    Navigation,
    ManageColours
  },
  data() {},
  methods: {}
};
</script>
