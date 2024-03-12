<template>
  <section class="site-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 site-title">
          <h3 class="title-text text-uppercase">Hey, I am Parwar👋</h3>
          <h4 class="text-uppercase">
            I am a
            <span id="subheading"
              >{{ typeValue }} <span class="blinking-cursor">|</span>
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span></span
            >
          </h4>
          <div class="site-buttons">
            <div class="d-flex flex-row flex-wrap">
              <button type="button" class="btn button primary-button mr-4 text-uppercase first-btn">
                <a href="https://drive.google.com/file/d/1xe3pfKmqHvVcV5l-hQPhlcp12dSEhP4g/view" target="_blank"
                  >RESUME &nbsp;<i class="fas fa-external-link-alt" aria-hidden="true"></i
                ></a>
              </button>
              <button type="button" class="btn button secondary-button text-uppercase second-btn">
                <a href="mailto: boni619@gmail.com">Hire Me</a>
              </button>
            </div>
          </div>
          <div class="banner">
            <Vue3Lottie :animationData="DeveloperJSON" :speed="1" loop autoplay />
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

<style scoped>
.blinking-cursor {
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}

.banner {
  display: flex;
  justify-content: flex-end;
  max-height: 400px;
  max-width: 400px;
  padding: 20px;
}
</style>
