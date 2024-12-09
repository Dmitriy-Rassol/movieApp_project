<template>
  <div @click="close"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div @click.stop class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-xl font-semibold mb-4">Добавить фильм</h2>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <input
            v-model="title"
            placeholder="Название"
            required
            class="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-4">
          <textarea
            v-model="description"
            placeholder="Описание"
            required
            class="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-4">
          <input
            v-model="poster"
            placeholder="URL картинки"
            required
            class="border  border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-4 flex space-x-4">
          <input
            v-model="year"
            min="1895"
            type="number"
            placeholder="Год"
            required
            class="border no-spin border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            v-model="duration"
            type="number"
            min="0"
            placeholder="Время (мин)"
            required
            class="border no-spin border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          />
        </div>
        <div class="flex justify-between mt-6">
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Добавить
          </button>
          <button
            type="button"
            @click="close"
            class="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
          >
            Закрыть
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["close", "add"]);

const title = ref<string>("");
const description = ref<string>("");
const poster = ref<string>("");
const year = ref<number | null>(null);
const duration = ref<number | null>(null);

const submit = () => {
  const newMovie = {
    title: title.value,
    description: description.value,
    poster: poster.value,
    year: year.value !== null ? year.value : 0,
    duration: duration.value !== null ? duration.value : 0,
  };
  emit("add", newMovie);
  title.value = "";
  description.value = "";
  poster.value = "";
  year.value = null;
  duration.value = null;
};

const close = () => {
  emit("close");
};
</script>

<style scoped></style>
