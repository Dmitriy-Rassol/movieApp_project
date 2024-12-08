<template>
    <div>
      <h1 class="text-2xl font-bold">Movie Catalog</h1>
      <ul>
        <li v-for="movie in movies" :key="movie.id" class="my-2">
          <img
            :src="movie.poster"
            :alt="movie.title"
            class="w-32 h-48 object-cover mr-4"
          />
          <h2 class="font-semibold">{{ movie.title }}</h2>
          <p>{{ movie.description }}</p>
          <button
            @click="deleteMovie(movie.id)"
            class="bg-red-500 text-white px-2 py-1"
          >
            Delete
          </button>
        </li>
      </ul>
      <button @click="showModal = true" class="bg-blue-500 text-white px-4 py-2">
        Add Movie
      </button>
      <Modal v-if="showModal" @close="showModal = false" @add="addMovie" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from "vue";
  import { useMovieStore } from "../stores/movieStore";
  import Modal from "./Modal.vue";
  import {Movie} from "../types/Movie"
  
  const movieStore = useMovieStore();
  const showModal = ref<boolean>(false);

  const movies = computed(() => movieStore.movies);
  
  onMounted(() => {
    movieStore.fetchMovies();
  });
  
  // Функция для добавления фильма
  const addMovie = (newMovie: Movie) => {
    movieStore.addMovie(newMovie);
    showModal.value = false;
  };
  
  // Функция для удаления фильма
  const deleteMovie = (id: number) => {
    movieStore.deleteMovie(id);
  };
  </script>
  