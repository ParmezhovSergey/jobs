<script setup lang="ts">
import HeaderMenu from "@/components/HeaderMenu.vue";
import MainFooter from "@/components/MainFooter.vue";
import JobsList from "@/components/JobsList.vue";
</script>

<template>
  <header>
    <header-menu />
  </header>
  <body>
    <jobs-list />
  </body>
  <footer>
    <main-footer />
  </footer>
</template>
