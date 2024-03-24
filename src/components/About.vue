<template>
  <section class="p-5 text-center relative w-full mt-6 min-h-screen h-auto]">
    <Particles />

    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-2/3 mx-auto">
          <div class="mb-8">
            <h1
              class="text-4xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.43)] flex items-center justify-center md:justify-center pb-5 text-slate-200"
            >
              <span>Hi! I'm</span>
              <span
                class="ml-2 bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-300 bg-clip-text font-bold text-transparent drop-shadow-[0_0_15px_rgba(50,105,235,0.43)] lg:ml-4"
                >Parwar</span
              >
              <img
                src="https://media3.giphy.com/media/U6e8Na5TJKEuDbhqpg/giphy.gif?cid=6c09b952voepgifu4xcf1y3hn11hj1mra11q97edjt55anda&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                alt="astronaut dancing"
                class="ml-4 h-20 w-20"
                draggable="false"
              />
            </h1>
            <h3
              class="text-4xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.43)] flex items-center justify-center md:justify-center pb-5 text-slate-200"
            >
              I am a
              <span
                id="subheading"
                class="ml-2 bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-300 bg-clip-text font-bold text-transparent drop-shadow-[0_0_15px_rgba(50,105,235,0.43)] lg:ml-4"
                >{{ typeValue }} </span
              ><span class="blinking-cursor">|</span>
            </h3>
            <div class="flex flex-row flex-wrap justify-center pt-17">
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
            <Vue3Lottie :animationData="DeveloperJSON" :speed="1" loop autoplay class="max-w-3xl" />
          </div>
        </div>
        <div class="scroll-down">
          <a href="#experience" class="mouse-wrapper">
            <span class="mouse">
              <span class="wheel"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Vue3Lottie } from 'vue3-lottie';
import DeveloperJSON from '../assets/developer.json';
import Particles from './Particles.vue';

export default {
  name: 'AboutMe',
  components: {
    Vue3Lottie,
    Particles,
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

.scroll-down {
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
}

.mouse {
  border: solid 3px #4458dc;
  border-radius: 16px;
  display: block;
  margin: auto;
  height: 34px;
  position: relative;
  width: 25px;
}

.mouse .wheel {
  background: #4458dc;
  border-radius: 100%;
  display: block;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  height: 5px;
  width: 5px;
  -webkit-animation: ani-mouse 2s linear infinite;
  -moz-animation: ani-mouse 2s linear infinite;
  animation: ani-mouse 2s linear infinite;
}

@keyframes ani-mouse {
  0% {
    top: 8px;
    opacity: 1;
  }
  50% {
    top: 15px;
    opacity: 0.5;
  }
  100% {
    top: 8px;
    opacity: 1;
  }
}
</style>
