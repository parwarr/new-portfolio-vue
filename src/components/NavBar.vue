<template>
  <header class="header_area">
    <div class="main-menu">
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="top-nav-fixed">
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mr-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
              <!-- <a class="nav-link" @click="scroll('home_page')">Home</a> -->
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a class="nav-link" @click="scroll('experience')">EXPERIENCE</a>
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a class="nav-link" @click="scroll('education')">EDUCATION</a>
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a class="nav-link" @click="scroll('skills')">SKILLS</a>
            </li>
            <li class="nav-item" v-if="$route?.meta?.hideLink === undefined">
              <a class="nav-link" rel="noreferrer" href="https://github.com/parwarr" target="_blank">Projects</a>
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
