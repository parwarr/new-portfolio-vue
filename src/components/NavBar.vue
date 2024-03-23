<template>
  <header class="py-5 text-center w-full shadow-sm transition-all duration-300 ease-in-out">
    <div class="main-menu">
      <nav class="navbar navbar-expand-lg w-full bg-transparent p-5" id="top-nav-fixed">
        <div id="navbarNav">
          <ul class="navbar-nav flex items-center justify-center m-0 p-0 list-none text-slate-200">
            <li class="nav-item">
              <a
                href="#about"
                class="nav-link hover:text-blue-500 text-base font-medium uppercase px-4 py-2 cursor-pointer transition-colors duration-300 ease-in-out"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#experience"
                class="nav-link hover:text-blue-500 text-base font-medium uppercase px-4 py-2 cursor-pointer transition-colors duration-300 ease-in-out"
                >Experience</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/parwarr"
                target="_blank"
                rel="noreferrer"
                class="nav-link hover:text-blue-500 text-base font-medium uppercase px-4 py-2 cursor-pointer transition-colors duration-300 ease-in-out"
                >Projects</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#contact"
                class="nav-link hover:text-blue-500 text-base font-medium uppercase px-4 py-2 cursor-pointer transition-colors duration-300 ease-in-out"
                >Contact</a
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
