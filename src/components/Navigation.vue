<template>
  <div
    class="flex fixed bottom-0 left-0 w-full bg-white text-white z-10 place-items-center divide-x md:absolute md:top-6 md:right-2 md:left-auto md:bottom-auto md:w-auto md:bg-transparent md:text-current md:place-items-auto md:divide-gray-700"
  >
    <template v-for="item in menuItems" :key="item">
      <router-link
        class="flex-1 p-2 bg-black bg-opacity-90 md:bg-transparent md:bg-opacity-100 md:flex-none md:py-0"
        :to="item.link"
      >
        <div class="text-center md:hidden">
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
