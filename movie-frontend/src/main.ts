import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import './style.css'; // Подключаем стили Tailwind CSS

// Создание приложения Vue
const app = createApp(App);

// Создание и подключение Pinia
const pinia = createPinia();
app.use(pinia);

// Монтируем приложение
app.mount('#app');
