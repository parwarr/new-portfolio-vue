<template>
  <div>
    <NavBar />
    <About id="about" />
    <Experience id="experience" />
    <Footer />
  </div>
</template>

<script>
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import Projects from './components/Projects.vue';
import './style.css';
export default {
  name: 'App',
  components: {
    About,
    NavBar,
    Projects,
    Experience,
    Footer,
  },
};
</script>
