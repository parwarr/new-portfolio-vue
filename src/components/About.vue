<template>
  <section class="bg-gray-100 p-5 text-center relative w-full mt-6 h-[900px]">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center">
        <!-- Centered column for content -->
        <div class="w-full lg:w-2/3 mx-auto">
          <!-- Text content -->
          <div class="mb-12">
            <!-- Add margin-bottom to push the lottie animation down -->
            <h1
              class="text-4xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.43)] flex items-center justify-center md:justify-start"
            >
              <span>Hi! I'm</span>
              <span
                class="ml-2 bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-300 bg-clip-text font-bold text-transparent drop-shadow-[0_0_15px_rgba(50,105,235,0.43)] lg:ml-4"
                >Parwar</span
              >
              <img
                src="https://cdn.discordapp.com/emojis/1118619705914179655.gif?size=80&quality=lossless"
                alt="cinnamoroll"
                class="ml-4 h-20 w-20"
                draggable="false"
              />
            </h1>
            <h3 class="uppercase pb-4">
              I am a
              <span id="subheading">{{ typeValue }} <span class="blinking-cursor">|</span></span>
            </h3>
            <div class="flex flex-row flex-wrap justify-center">
              <button
                type="button"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 uppercase"
              >
                <a href="https://drive.google.com/file/d/1xe3pfKmqHvVcV5l-hQPhlcp12dSEhP4g/view" target="_blank"
                  >Resume &nbsp;<i class="fas fa-external-link-alt" aria-hidden="true"></i
                ></a>
              </button>
              <button
                type="button"
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded uppercase"
              >
                <a href="mailto:parwar.habasch@gmx.de">Hire Me</a>
              </button>
            </div>
          </div>
          <!-- Lottie Animation -->
          <div class="flex justify-center">
            <Vue3Lottie :animationData="DeveloperJSON" :speed="1" loop autoplay class="max-w-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Vue3Lottie } from 'vue3-lottie';
import DeveloperJSON from '../assets/developer.json';
export default {
  name: 'AboutMe',
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      displayTextArray: ['SOFTWARE ENGINEER', 'FULL STACK DEVELOPER', 'WEB DEVELOPER'],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
      DeveloperJSON,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length) this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style>
/* Tailwind handles most styling. Custom animations or very specific styles can still go here */
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
.blinking-cursor {
  animation: blink 1s step-end infinite;
}
</style>
