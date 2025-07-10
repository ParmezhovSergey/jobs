<template>
  <div class="modal-container">
    <div class="modal">
      <div class="btn">
        <button class="btnBack" @click="$emit('back')">Назад</button>
      </div>
      <div
        class="list"
        v-for="vacancy in vacanciesStore.responseVacancy"
        :key="vacancy?.id"
      >
        <div>должность: {{ vacancy?.title }}</div>
        <div>зарплата: {{ vacancy?.salary }}</div>
        <div>город: {{ vacancy?.location }}</div>
        <div>стаж работы: {{ vacancy?.experience }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVacanciesStore } from "@/stores/store";

const vacanciesStore = useVacanciesStore();
</script>

<style scoped>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 40%;
  height: 80vh;
  overflow-x: scroll;
  position: relative;
}

.list {
  border: 1px solid gray;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 0px 15px 50px;
  background-color: rgb(250, 243, 233);
  border-radius: 15px;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
.btnBack {
  background-color: white;
}
.btnBack:hover {
  color: red;
}
</style>
