<template>
  <div>
    <NavBar />
    <About id="about" />
    <Experience id="experience" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script>
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import './style.css';
export default {
  name: 'App',
  components: {
    About,
    NavBar,
    Projects,
    Experience,
    Footer,
    Contact,
  },
  mounted() {
    window.location.hash = 'about';
  },
};
</script>
