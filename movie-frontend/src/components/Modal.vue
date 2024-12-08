<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-4 rounded">
        <h2 class="text-lg">Add Movie</h2>
        <form @submit.prevent="submit">
          <input v-model="title" placeholder="Title" required />
          <input v-model="description" placeholder="Description" required />
          <input v-model="poster" placeholder="Poster URL" required />
          <input v-model="year" type="number" placeholder="Year" required />
          <input v-model="duration" type="number" placeholder="Duration" required />
          <button type="submit" class="bg-blue-500 text-white">Add</button>
          <button type="button" @click="close" class="bg-gray-300">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Определение событий, которые компонент может эмитировать
  const emit = defineEmits(['close', 'add']);
  
  const title = ref<string>('');
  const description = ref<string>('');
  const poster = ref<string>('');
  const year = ref<number | null>(null);
  const duration = ref<number | null>(null);
  
  const submit = () => {
    const newMovie = {
      title: title.value,
      description: description.value,
      poster: poster.value,
      year: year.value !== null ? year.value : 0, // Убедимся, что year имеет значение
      duration: duration.value !== null ? duration.value : 0, // Убедимся, что duration имеет значение
    };
    emit('add', newMovie);
    // Сброс значений
    title.value = '';
    description.value = '';
    poster.value = '';
    year.value = null;
    duration.value = null;
  };
  
  const close = () => {
    emit('close');
  };
  </script>
  