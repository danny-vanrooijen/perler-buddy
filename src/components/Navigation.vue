<template>
  <div
    class="flex fixed bottom-0 left-0 w-full bg-white text-white z-10 place-items-center divide-x"
  >
    <template v-for="item in menuItems" :key="item">
      <router-link class="flex-1 p-2 bg-black bg-opacity-90" :to="item.link">
        <div class="text-center">
          <fa
            class="inline"
            :icon="item.icon"
            type="fal"
            width="24"
            height="24"
          ></fa>
        </div>
        <div class="text-center">
          {{ item.name }}
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          link: "/",
          name: "My collection",
          icon: "list-alt"
        },
        {
          link: "/build",
          name: "Build",
          icon: "th"
        },
        {
          link: "/admin",
          name: "Admin",
          icon: "user-cog"
        }
      ]
    };
  }
};
</script>
