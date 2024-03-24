<template>
  <div>
    <NavBar />
    <About id="about" />
    <Experience id="experience" />
    <Contact id="contact" />
    <el-backtop class="bg-transparent border border-blue-500 text-blue-500" :right="100" :bottom="100" />
    <Footer />
  </div>
</template>

<script>
import About from './components/About.vue';
import Contact from './components/Contact.vue';
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
    Contact,
  },
};
</script>
