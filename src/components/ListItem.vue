<template>
  <div class="list">
    <div>должность: {{ props.vacancy.title }}</div>
    <div>зарплата: {{ props.vacancy.salary }}</div>
    <div>город: {{ props.vacancy.location }}</div>
    <div>стаж работы: {{ props.vacancy.experience }}</div>
    <button class="btn" @click="choiceVacancy">Откликнуться</button>
    <button class="btnRemove" @click="remove">Скрыть</button>
  </div>
</template>

<script setup lang="ts">
import { useVacanciesStore, type IVacancies } from "@/stores/store";

interface Props {
  vacancy: IVacancies;
}
const props = defineProps<Props>();

const vacanciesStore = useVacanciesStore();

const remove = () => {
  vacanciesStore.setRemoveVacancy(props.vacancy.id);
};
const choiceVacancy = () => {
  vacanciesStore.choiceVacancy(props.vacancy.id);
};
</script>

<style scoped>
.list {
  border: 1px solid gray;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 100px;
  padding: 15px 100px 15px 100px;
  background-color: rgb(250, 243, 233);
  border-radius: 15px;
}
.btn {
  background-color: green;
  border-radius: 3px;
  color: white;
  padding: 5px;
  margin-top: 20px;
}
.btnRemove {
  background-color: rgb(139, 38, 8);
  color: white;
  padding: 5px;
  border-radius: 3px;
  margin-left: 20px;
}
.item-removing {
  transition: opacity 0.5s ease-out; /* Плавное исчезновение */
  opacity: 0;
}
</style>
