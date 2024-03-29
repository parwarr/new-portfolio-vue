<template>
  <div id="projects" class="p-8">
    <div class="flex flex-col items-center justify-center min-h-screen">
      <header class="text-center mb-12">
        <h3
          class="font-poppins font-normal text-[#05CBEE] sm:text-[20px] text-[16px] tracking-[0.2rem] mb-[8px] text-center"
        >
          MY WORKS
        </h3>
        <h2
          class="font-poppins font-normal md:text-[48px] ss:text-[32px] text-[26px] text-white md:leading-[1.15] leading-[1.6] w-full z-[2] text-center mb-4"
        >
          Completed Projects
        </h2>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-transparent border border-gray-600 rounded-lg shadow-xl overflow-hidden transition-all hover:shadow-2xl card-container"
        >
          <div class="p-6 flex flex-col items-center">
            <h3 class="text-xl font-bold text-blue-500 mb-4">{{ project.title }}</h3>
            <img :src="project.image" alt="project" class="h-48 w-full object-contain mb-4" />
            <p class="text-slate-400 text-sm max-w-[70ch] text-center">{{ project.desc }}</p>

            <div class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1 bg-blue-500 bg-opacity-25 text-blue-200 rounded-full text-xs font-medium"
                >{{ tech }}</span
              >
            </div>
            <div class="flex gap-2 mt-4">
              <a
                :href="project.github"
                target="_blank"
                class="px-4 py-2 bg-transparent text-white rounded-full text-sm font-medium hover:bg-blue-700 transition"
              >
                <i class="fab fa-github text-white text-2xl"></i
              ></a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="px-4 py-2 bg-transparent text-white rounded-full text-sm font-medium hover:bg-teal-700 transition"
              >
                <i class="fab fa-chrome text-white text-2xl"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { default as docker } from '../../src/assets/docker.png';
import { default as passworManager } from '../../src/assets/passwordManager.png';
import { default as terminal } from '../../src/assets/terminal.png';
import { default as weatherApp } from '../../src/assets/weatherapp.png';
import { default as yugioh } from '../../src/assets/yugioh.png';

export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          image: yugioh,
          title: 'Yu-Gi-Oh Card Database',
          github: 'https://github.com/parwarr/yugioh-search-engine-demo-frontend',
          desc: 'A dynamic search engine for Yu-Gi-Oh cards. There I have built both the frontend and backend.',
          tech: ['React', 'NestJS', 'MariaDB'],
        },
        {
          id: 2,
          image: terminal,
          title: 'Terminal Portfolio',
          github: 'https://github.com/parwarr/portfolio-terminal',
          demo: 'https://terminal.parwar.dev',
          desc: 'A terminal based portfolio. With Ability to navigate through the site with commands.',
          tech: ['React'],
        },
        {
          id: 3,
          image: passworManager,
          title: 'Password Manager',
          github: 'https://github.com/parwarr/password-manager',
          desc: 'A password manager that was built with powershell and sqlite. It was created for a school project.',
          tech: ['Powershell', 'Sqlite'],
        },
        {
          id: 4,
          image: weatherApp,
          title: 'Weather App',
          github: 'https://github.com/parwarr/weather-app',
          desc: 'A weather app that was built with powershell. It was created for a school project.',
          tech: ['Powershell'],
        },
        {
          id: 5,
          image: docker,
          title: 'Docker Container Creater',
          github: 'https://github.com/parwarr/docker-container',
          desc: 'A simple bash script that creates a docker container with a few simple commands.',
          tech: ['Bash', 'Docker'],
        },
        {
          id: 6,
          image: 'https://d3upbvvdvllr10.cloudfront.net/uiresource/common-img/LIC_1.gif',
          title: 'Want to see more?',
          github: 'https://github.com/parwarr?tab=repositories',
          desc: 'Check out my GitHub for more projects',
        },
      ],
    };
  },
};
</script>

<style>
.card-container:hover {
  background-color: rgba(14, 30, 37, 0.5) !important;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 20px rgba(14, 30, 37, 0.5), 0 0 15px rgba(14, 30, 37, 1) !important;
}
</style>
