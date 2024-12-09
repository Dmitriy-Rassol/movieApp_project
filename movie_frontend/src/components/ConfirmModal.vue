<template>
    <div @click="$emit('close')" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div @click.stop class="bg-white rounded-lg p-6 shadow-lg">
        <h2 class="text-lg font-semibold mb-4">Подтверждение удаления</h2>
        <p>Вы уверены, что хотите удалить фильм <span class="font-semibold">"{{ movieTitle }}"?</span></p>
        <div class="mt-4 flex justify-end">
          <button
            @click="confirmDelete"
            class="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Удалить
          </button>
          <button
            @click="$emit('close')"
            class="bg-gray-300 text-black px-4 py-2 rounded-md"
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  defineProps({
    movieTitle: {
      type: String,
      required: true,
    },
  });
  
  const emit = defineEmits(['close', 'confirm']);
  
  const confirmDelete = () => {
    emit('confirm'); 
    emit('close');   
  };
  </script>
  
  <style scoped>
  </style>
  