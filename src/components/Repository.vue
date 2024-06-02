<template>
  <div v-if="loading" class="text-center">
    Loading...
  </div>
  <div v-else class="grid grid-cols-2 gap-4">
    <div v-for="repository in repos" :key="repository.id"
         class="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div class="flex items-center space-x-2 mb-2">
        <span class="text-gray-400">
          <i class="fas fa-book"></i>
        </span>
        <h3 class="text-white text-lg font-semibold truncate">
          <a :href="repository.html_url" target="_blank" class="text-blue-400 hover:text-blue-300">
            {{ repository.name }}
          </a>
        </h3>
      </div>
      <p class="text-gray-300 text-sm">
        {{ repository.description || 'No description available.' }}
      </p>
      <div class="flex items-center space-x-4 text-xs text-gray-400 mt-2">
        <span>{{ repository.language }}</span>
        <span class="flex items-center">
          <i class="fas fa-star mr-1"></i> {{ repository.stargazers_count }}
        </span>
        <span class="flex items-center">
          <i class="fas fa-code-branch mr-1"></i> {{ repository.forks_count }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Repository",
  data() {
    return {
      repos: null,
      loading: true,
    }
  },
  mounted() {
    this.loadRepos();
  },
  methods: {
    loadRepos() {
      axios.get("https://api.github.com/users/parwarr/repos").then((res) => {
        this.repos = res.data.filter(project => [
          'portfolio-terminal',
          'yugioh-search-engine-demo-frontend',
          'password-manager',
          'weather-app',
          'docker-container',
          'new-portfolio-vue'
        ].includes(project.name));
      }).finally(() => {
        this.loading = false;
      });
    }
  }
}
</script>
