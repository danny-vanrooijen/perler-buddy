<template>
  <div>
    <main-nav></main-nav>
    <list></list>
  </div>
  <router-view />
</template>

<script>
import MainNav from "./components/MainNav.vue";
import List from "./components/List.vue";

export default {
  components: {
    MainNav,
    List
  }
};
</script>
