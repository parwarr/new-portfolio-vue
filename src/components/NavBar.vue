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

<style>
.header_area {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: all 0.3s ease;
}

.header_area .main-menu .navbar .navbar-nav .nav-item .nav-link {
  padding: 10px 10px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.header_area .main-menu .navbar .navbar-nav .nav-item .nav-link:hover {
  color: #007bff;
}

.header_area .main-menu .navbar .navbar-nav .nav-item .nav-link.active {
  color: #007bff;
}

.navbar-nav {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
