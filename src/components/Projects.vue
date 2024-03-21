<template>
  <div class="container mx-auto p-20" id="projects">
    <div class="flex flex-wrap justify-center pb-20">
      <header>
        <h1 class="pt-20 py-3 text-3xl lg:text-5xl text-center">Projects 🗒️</h1>
        <h4 class="text-center">
          These are all the projects that I have worked on. Some of them I have worked before I gained some experience.
          So go gentle on them.
        </h4>
      </header>
    </div>

    <div class="flex justify-center">
      <div class="grid gap-8 lg:gap-14 lg:grid-cols-2 max-w-6xl mx-auto">
        <div
          v-for="project in projects"
          :key="project.id"
          class="flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-800 dark:text-white max-w-lg mx-auto shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
          style="width: 35rem"
        >
          <img :src="project.image" :alt="project.title" class="w-2/3" />
          <div class="w-full flex flex-row items-center justify-evenly p-1">
            <a
              class="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span>
            </a>

            <h2>{{ project.title }}</h2>

            <a
              class="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { default as p1, default as p2, default as p3, default as p4 } from '../../src/assets/vue.svg';

export default {
  name: 'Portfolio',
  components: {},
  data() {
    return {
      projects: [
        { id: 1, image: p1, title: 'Yu-Gi-Oh Card Database', github: 'google.com', demo: 'demo.link' },
        { id: 2, image: p2, title: 'Terminal Portfolio', github: 'google.com', demo: 'demo.link' },
        { id: 3, image: p3, title: 'Password Manager', github: 'google.com', demo: 'demo.link' },
        { id: 4, image: p4, title: 'Weather App', github: 'google.com', demo: 'demo.link' },
      ],
    };
  },
};
</script>
