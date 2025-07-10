<template>
  <div class="header">
    <div class="text">JOBS.RU</div>

    <div class="menu" @click="openModal">
      <button class="btn">Отклики</button>
      <div class="info">{{ vacanciesStore.counter }}</div>
    </div>
  </div>
  <div v-if="isOpen">
    <Responses @back="openModal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Responses from "@/components/Responses.vue";
import { useVacanciesStore } from "@/stores/store";

const vacanciesStore = useVacanciesStore();

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.header {
  background-color: rgb(45, 45, 248);
  height: 70px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  margin-left: 20px;
  font-size: 40px;
}
.menu {
  margin-right: 50px;
  display: flex;
}
.info {
  width: 20px;
  height: 20px;
  margin-left: 3px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  background-color: white;
  color: black;
}
.btn {
  background-color: rgb(45, 45, 248);
  color: white;
}
.btn:hover {
  color: red;
}
</style>
