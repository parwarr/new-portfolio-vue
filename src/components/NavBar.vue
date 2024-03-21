<template>
  <header class="bg-gray-100 py-5 text-center w-full shadow-sm transition-all duration-300 ease-in-out">
    <div class="main-menu">
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="top-nav-fixed">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav flex items-center justify-center m-0 p-0">
            <li class="nav-item">
              <a
                href="#about"
                class="nav-link text-black text-base font-medium uppercase px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
                >About</a
              >
              <!-- Example of another link -->
              <!-- <a class="nav-link text-black font-medium uppercase px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out" @click="scroll('home_page')">Home</a> -->
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a
                href="#experience"
                class="nav-link text-black text-base font-medium uppercase px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
                >Experience</a
              >
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a
                class="nav-link text-black text-base font-medium uppercase px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
                @click="scroll('education')"
                >EDUCATION</a
              >
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a
                class="nav-link text-black text-base font-medium uppercase px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
                @click="scroll('skills')"
                >SKILLS</a
              >
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a
                class="nav-link text-black text-base font-medium uppercase px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
                rel="noreferrer"
                href="https://github.com/parwarr"
                target="_blank"
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
