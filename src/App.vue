<template>
  <div>
    <NavBar />
    <About />
    <Footer />
  </div>
</template>

<script>
import About from './components/About.vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import './assets/css/style.css';
export default {
  name: 'App',
  components: {
    About,
    NavBar,
    Footer,
  },
};
</script>
