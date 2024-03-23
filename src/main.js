import { MotionPlugin } from '@vueuse/motion';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import Vue3Lottie from 'vue3-lottie';
import Particles from 'vue3-particles';
import App from './App.vue';
import './index.css';

createApp(App).use(Particles, Vue3Lottie, ElementPlus, MotionPlugin).mount('#app');
