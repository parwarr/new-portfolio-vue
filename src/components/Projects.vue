<template>
  <div id="projects" class="p-8">
    <div
      class="flex flex-col items-center justify-center"
      v-motion-slide-visible-left
    >
      <header class="text-center mb-12">
        <h3
          class="font-poppins font-normal text-[#05CBEE] sm:text-[20px] text-[16px] tracking-[0.2rem] mb-[8px] text-center"
        >
          MY WORKS
        </h3>
        <h2
          class="font-poppins font-normal md:text-[48px] ss:text-[32px] text-[26px] text-white md:leading-[1.15] leading-[1.6] w-full z-[2] text-center mb-4"
        >
          Completed Projects
        </h2>
      </header>
      <div>
        <repository />
      </div>
    </div>
  </div>
</template>

<script>
import Repository from './Repository.vue';
export default {
  name: 'Projects',
  components: { Repository },
};
</script>
