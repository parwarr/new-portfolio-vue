import Vue, { createApp } from 'vue';
import VueRouter from 'vue-router';
import Vue3Lottie from 'vue3-lottie';
import App from './App.vue';

const app = createApp(App);
app.use(Vue3Lottie);
Vue.use(VueRouter);
app.mount('#app');
