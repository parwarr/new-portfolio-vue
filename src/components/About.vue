<template>
  <section class="p-5 text-center relative w-full mt-6 min-h-screen h-auto]">
    <Particles />

    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-2/3 mx-auto">
          <div>
            <h2
              class="min-[320px]:text-[2rem] md:text-2xl lg:text-6xl font-bold dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.43)] flex items-center justify-center md:justify-center pb-5 text-slate-200"
            >
              <span>Hi! I'm Parwar</span>
            </h2>
            <h3
              class="min-[320px]:text-[1.2rem] text-4xl md:text-2xl lg:text-3xl font-bold dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.43)] flex items-center justify-center md:justify-center pb-5 text-slate-200"
            >
              I'm a Junior
              <span
                id="subheading"
                class="ml-2 bg-gradient-to-r from-sky-300 via-blue-500 to-indigo-300 bg-clip-text font-bold text-transparent drop-shadow-[0_0_15px_rgba(50,105,235,0.43)] lg:ml-4"
                >{{ typeValue }} </span
              ><span class="blinking-cursor">|</span>
            </h3>
          </div>
          <div class="flex justify-center">
            <img
              class="rounded-full size-52 transition ease-in-out duration-1000 delay-250 grayscale-[60%] hover:-translate-y-1 hover:grayscale-0 hover:border-4 border-blue-500"
              src="../assets/ProfilePicture.jpeg"
              alt="Profile Picture"
            />
          </div>
          <div class="flex flex-row flex-wrap justify-center py-4">
            <el-button type="primary" size="large">
              <a
                href="https://drive.proton.me/urls/FA7PJGXBKR#pusQHNKR50yL"
                target="_blank"
                >Resume</a
              ></el-button
            >
            <el-button type="primary" size="large"
              ><a href="mailto:parwar.habasch@gmx.de">Hire Me</a></el-button
            >
          </div>
          <div class="flex flex-col items-center justify-center pt-2">
            <div class="flex flex-col items-center justify-center">
              <p
                class="text-slate-400 max-w-[70ch] text-center md:text-lg min-[320px]:text-xs"
              >
                Hello! I'm Parwar, a passionate junior full-stack developer with
                a knack for creating efficient and impactful digital solutions.
                With expertise in languages like JavaScript, TypeScript, and
                SQL, and a keen interest in expanding my skill set into C and
                C++, I'm constantly evolving in the tech sphere. My GitHub
                showcases projects ranging from a classic TicTacToe game to a
                dynamic Yu-Gi-Oh search engine, reflecting my versatility and
                love for challenges. I'm also proficient with Docker and Linux,
                ensuring my projects are not just innovative but also resilient
                and scalable. While my time might be limited for private
                projects currently, my commitment to exploring new technologies
                and contributing to the development community remains
                unwavering.
              </p>
            </div>
          </div>
        </div>
        <div class="scroll-down">
          <a class="link" href="#experience">
            <span class="link__arrow">
              <span></span>
              <span></span>
            </span>
            <span class="link__line"></span>
            <span class="link__text">Experience</span>
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
      displayTextArray: [
        'SOFTWARE ENGINEER',
        'FULL STACK DEVELOPER',
        'WEB DEVELOPER',
      ],
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
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
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
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald');

.scroll-down {
  left: 0;
  width: 100%;
}

.link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transform: rotate(-90deg) translate3d(-300px, 0, 0);
}

.link__arrow {
  display: inline-flex;
}

.link__arrow span {
  position: relative;
  width: 14px;
  height: 2px;
  border-radius: 2px;
  overflow: hidden;
  background: #bebdbe;
  z-index: 2;
}

.link__arrow span:nth-child(1) {
  transform-origin: left bottom;
  transform: rotate(45deg) translate3d(8px, -10px, 0);
}

.link__arrow span:nth-child(2) {
  transform-origin: left bottom;
  transform: rotate(-45deg);
}

.link__arrow span:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  width: 0;
  height: 2px;
  background: #4458dc;
}

.link__line {
  position: relative;
  margin-left: -14px;
  margin-right: 30px;
  width: 150px;
  height: 2px;
  background: #bebdbe;
  overflow: hidden;
  z-index: 1;
}

.link__line:after {
  content: '';
  display: block;
  position: absolute;
  left: 80px;
  width: 70px;
  height: 2px;
  background: #4458dc;
}

.link__text {
  color: #4458dc;
  font-family: 'Oswald', sans-serif;
  font-size: 18px;
  text-transform: uppercase;
}

.link:hover .link__line:after {
  animation: animation-line 1.5s forwards;
}

.link:hover .link__arrow span:after {
  animation: animation-arrow 1.5s forwards;
  animation-delay: 1s;
}

@keyframes animation-line {
  0% {
    left: 80px;
  }
  100% {
    left: 0;
  }
}

@keyframes animation-arrow {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

/* Media queries for responsive design */
@media (max-width: 1200px) {
  .link {
    transform: rotate(-90deg) translate3d(-200px, 0, 0);
  }
  .link__text {
    font-size: 16px;
  }
  .link__line {
    width: 120px;
  }
  .link__line:after {
    left: 60px;
    width: 60px;
  }
}

@media (max-width: 768px) {
  .link {
    transform: rotate(-90deg) translate3d(-150px, 0, 0);
  }
  .link__text {
    font-size: 14px;
  }
  .link__line {
    width: 100px;
  }
  .link__line:after {
    left: 50px;
    width: 50px;
  }
}

@media (max-width: 480px) {
  .link {
    transform: rotate(-90deg) translate3d(-100px, 0, 0);
  }
  .link__text {
    font-size: 12px;
  }
  .link__line {
    width: 80px;
  }
  .link__line:after {
    left: 40px;
    width: 40px;
  }
}
</style>
