import { defineStore } from "pinia";
import { getVacancies } from "./api";
import type { Ref } from "vue";

export interface IVacancies {
  id: number;
  title: string;
  salary: string;
  location: string;
  experience: string;
}

interface initialState {
  vacancies: Array<IVacancies>;
  selectedOption: string;
  isChecked: boolean;
  location: string;
  responseVacancy: Array<IVacancies | undefined>;
  counter: number;
}

export const useVacanciesStore = defineStore("usersStore", {
  state: (): initialState => ({
    vacancies: [],
    selectedOption: "",
    isChecked: false,
    location: "Удалённо",
    responseVacancy: [],
    counter: 0,
  }),

  getters: {
    vacanciesFilter(state) {
      if (state.selectedOption !== "") {
        return state.vacancies.filter(
          (item: { experience: string }) =>
            item.experience === state.selectedOption
        );
      } else {
        return state.vacancies;
      }
    },

    isCheckedFilter(state: any) {
      if (state.isChecked === true) {
        return state.vacanciesFilter.filter((item: { location: string }) =>
          item.location.includes(state.location)
        );
      } else {
        return state.vacanciesFilter;
      }
    },
  },

  actions: {
    async fetchVacancies() {
      const settings = await getVacancies();
      this.vacancies = settings;
    },

    changeSelectedOption(selectedOption: string) {
      this.selectedOption = selectedOption;
    },

    changeIsChecked(isChecked: boolean) {
      this.isChecked = isChecked;
    },

    setRemoveVacancy(id: number) {
      this.vacancies = this.vacancies.filter((p) => p.id !== id);
    },

    choiceVacancy(id: number) {
      const vacancy = this.vacancies.find((x) => x.id === id);
      this.responseVacancy.push(vacancy);
      this.vacancies = this.vacancies.filter((p) => p.id !== id);
      this.counter += 1;
    },
  },
});
