<template>
  <div class="lg:flex md:container md:w-9/10 lg:w-4/5 relative">
    <Navigation></Navigation>
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
  data() {
    return {};
  },
  methods: {}
};
</script>
