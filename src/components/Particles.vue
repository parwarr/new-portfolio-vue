<script setup>
import { loadFull } from 'tsparticles';

const particlesInit = async engine => {
  await loadFull(engine);
};

const particlesLoaded = async container => {
  console.log('Particles container loaded', container);
};
</script>

<template>
  <div>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: 'rgb(7, 9, 13)',
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 1.5,
            },
          },
        },
        particles: {
          color: {
            value: ['#0d47a1', '#ffffff'],
          },
          links: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }"
    />
  </div>
</template>
