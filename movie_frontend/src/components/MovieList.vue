<template>
  <div>
    <h1 class="text-white text-5xl font-bold mb-4">Список фильмов</h1>
    <button
      @click="showModal = true"
      class="bg-blue-500 flex font-semibold items-center text-white px-4 py-2 rounded-md mt-4"
    >
      Добавить
      <img src="../assets/add.png" alt="add" class="w-4 h-4 ml-2" />
    </button>
    <span class="loader flex justify-center" v-if="!movies.length"></span>
    <ul class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li
        v-for="movie in movies"
        :key="movie.id"
        class="bg-white rounded-lg shadow-md p-4 flex flex-col relative hover:scale-[1.01] transition-scale duration-300"
      >
        <h2 class="font-semibold text-xl mb-2">{{ movie.title }}</h2>
        <div>
          <img
            :src="movie.poster"
            :alt="movie.title"
            class="w-32 h-48 object-cover rounded-lg float-left mr-4"
          />
          <p class="text-gray-600">{{ movie.description }}</p>
        </div>

        <div class="flex flex-col justify-between">
          <div class="font-semibold">
            <p>Год: {{ movie.year }}</p>
            <p>Продолжительность: {{ duration(movie.duration) }}</p>
          </div>
        </div>
        <button
          @click="openConfirmDelete(movie.id, movie.title)"
          class="absolute top-0 right-4 text-black py-3 rounded-xl self-start"
        >
          <img src="../assets/close.png" alt="close" class="w-4 h-4" />
        </button>
      </li>
    </ul>
    <ConfirmModal
      v-if="showConfirmModal"
      :movieTitle="confirmMovieTitle"
      @close="showConfirmModal = false"
      :onConfirm="deleteMovie"
    />
    <Modal v-if="showModal" @close="showModal = false" @add="addMovie" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useMovieStore } from "../stores/movieStore";
import Modal from "./Modal.vue";
import { Movie } from "../types/Movie";
import ConfirmModal from "../components/ConfirmModal.vue";

const showModal = ref<boolean>(false);
const showConfirmModal = ref<boolean>(false);
const confirmMovieId = ref<number | null>(null);
const confirmMovieTitle = ref<string>("");

const movieStore = useMovieStore();

const movies = computed(() => movieStore.movies);

onMounted(() => {
  movieStore.fetchMovies();
});

// Функция для вычисления продолжительности
const duration = (total: number) => {
  const totalMinutes = total;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours} ч ${minutes} мин`; // Возвращаем строку
};

const openConfirmDelete = (id: number, title: string) => {
  confirmMovieId.value = id;
  confirmMovieTitle.value = title;
  showConfirmModal.value = true;
};

const addMovie = (newMovie: Movie) => {
  movieStore.addMovie(newMovie);
  showModal.value = false;
};

const deleteMovie = () => {
  if (confirmMovieId.value !== null) {
    movieStore.deleteMovie(confirmMovieId.value);
    confirmMovieId.value = null;
  }
};
</script>
