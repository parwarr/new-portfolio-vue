import { createApp } from 'vue';
import Vue3Lottie from 'vue3-lottie';
import Particles from 'vue3-particles';
import App from './App.vue';
import './index.css';

createApp(App).use(Particles, Vue3Lottie).mount('#app');
