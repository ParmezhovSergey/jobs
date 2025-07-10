<template>
  <div class="jobs">
    <div class="filter">
      <div class="text">Фильтры поиска:</div>
      <div class="text">Опыт работы</div>
      <div>
        <select id="my-select" v-model="selectedOption" @change="handleChange">
          <option value="">любой</option>
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="city">
        <input
          type="checkbox"
          v-model="isChecked"
          @change="handleCheckboxChange"
        />
        Удаленная работа
      </div>
    </div>
    <div class="list">
      <list-item
        v-for="vacancy in vacanciesStore.isCheckedFilter"
        :key="vacancy.id"
        :vacancy="vacancy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ListItem from "@/components/ListItem.vue";
import { useVacanciesStore } from "@/stores/store";
import { ref } from "vue";

const vacanciesStore = useVacanciesStore();
vacanciesStore.fetchVacancies();

const options = ref([
  { text: "1–3 года", value: "1–3 года" },
  { text: "3–5 лет", value: "3–5 лет" },
  { text: "от 5 лет", value: "от 5 лет" },
]);
const selectedOption = ref("");
const isChecked = ref(false);

const handleChange = () => {
  vacanciesStore.changeSelectedOption(selectedOption.value);
};

const handleCheckboxChange = () => {
  vacanciesStore.changeIsChecked(isChecked.value);
};
</script>

<style scoped>
.jobs {
  height: calc(100vh - 90px);
  display: flex;
}
.filter {
  background-color: bisque;
  border-right: 1px solid bisque;
  border-radius: 15px;
  width: 300px;
  padding-left: 50px;
}
.text {
  margin-top: 30px;
}
.city {
  margin-top: 30px;
}
.list {
  overflow-x: scroll;
}
</style>
