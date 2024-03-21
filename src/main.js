import { createApp } from 'vue';
import Vue3Lottie from 'vue3-lottie';
import App from './App.vue';
import './index.css';

const app = createApp(App);
app.use(Vue3Lottie);
app.mount('#app');
