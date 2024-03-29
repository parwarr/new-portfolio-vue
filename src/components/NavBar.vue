<template>
  <header class="relative top-0 left-0 z-10 w-full">
    <nav class="flex items-center justify-between max-w-7xl mx-auto p-4">
      <div>
        <img src="../assets/logo.png" alt="logo" class="h-16 w-20" />
      </div>
      <ul class="flex items-center space-x-1">
        <li>
          <a href="#aboutMeText" class="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >About</a
          >
        </li>
        <li>
          <a href="#experience" class="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >Experience</a
          >
        </li>
        <li>
          <a href="#projects" class="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >Projects</a
          >
        </li>
        <li>
          <a href="#contact" class="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>
