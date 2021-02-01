<template>
  <div>
    <main-nav></main-nav>
  </div>
  <router-view />
</template>

<script>
import MainNav from "./components/MainNav.vue";

export default {
  components: {
    MainNav
  }
};
</script>
