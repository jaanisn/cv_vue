import { ref } from "vue";
import { defineStore } from "pinia";

export const useTranslationStore = defineStore("translationStore", () => {
  const translations = ref({
    name: { En: "Janis", Lv: "Jānis" },
    surname: { En: "Narbuts", Lv: "Narbuts" },
    title: {
      En: "Sound engeneer",
      Lv: "Skaņu inženieris",
    },
    shortAbout1: {
      En: "Highly skilled and accomplished ecommerce business developer with background in computer science",
      Lv: "B2B un B2C biznesa attīstītājs ar 8 gadu pieredzi pieredzi E-komercijā un datorzinātnē",
    },
    shortAbout2: {
      En: "Developing IT projects with Go, Pyhton, Javascript, VUE, Tailwind, Figma, Postgres, Docker, Linux, GIT",
      Lv: "IT projektu izstrāde ar Go, Pyhton, Javascript, VUE, Tailwind, Figma, Postgres, Docker, Linux, GIT",
    },
  });

  const language = ref("Lv");
  const languageSwitch = () => {
    language.value = language.value === "En" ? "Lv" : "En";
    console.log("Switching language to:", language.value);
  };

  return {
    translations,
    language,
    languageSwitch,
  };
});
