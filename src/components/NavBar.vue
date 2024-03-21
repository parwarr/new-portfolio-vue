<template>
  <header class="bg-gray-100 py-5 text-center w-full shadow-sm transition-all duration-300 ease-in-out">
    <div class="main-menu">
      <nav class="navbar navbar-expand-lg fixed-top" id="top-nav-fixed">
        <div class="" id="navbarNav">
          <ul class="navbar-nav flex items-center justify-center m-0 p-0 list-none">
            <li class="nav-item">
              <a
                href="#about"
                class="nav-link text-black hover:text-blue-500 text-base font-medium uppercase px-4 py-2 cursor-pointer transition-colors duration-300 ease-in-out"
                >About</a
              >
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a
                href="#experience"
                class="nav-link text-black hover:text-blue-500 text-base font-medium uppercase px-4 py-2 cursor-pointer transition-colors duration-300 ease-in-out"
                >Experience</a
              >
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a
                @click="scroll('education')"
                class="nav-link text-black hover:text-blue-500 text-base font-medium uppercase px-4 py-2 cursor-pointer transition-colors duration-300 ease-in-out"
                >EDUCATION</a
              >
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a
                @click="scroll('skills')"
                class="nav-link text-black hover:text-blue-500 text-base font-medium uppercase px-4 py-2 cursor-pointer transition-colors duration-300 ease-in-out"
                >SKILLS</a
              >
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a
                href="https://github.com/parwarr"
                target="_blank"
                rel="noreferrer"
                class="nav-link text-black hover:text-blue-500 text-base font-medium uppercase px-4 py-2 cursor-pointer transition-colors duration-300 ease-in-out"
                >Projects</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>
