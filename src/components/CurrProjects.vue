<template>
  <div id="curr-projects" class="p-8">
    <div
      class="flex flex-col items-center justify-center"
      v-motion-slide-visible-left
    >
      <header class="text-center mb-12">
        <h3
          class="font-poppins font-normal text-[#05CBEE] sm:text-[20px] text-[16px] tracking-[0.2rem] mb-[8px] text-center"
        >
          LEARNINGS
        </h3>
        <h2
          class="font-poppins font-normal md:text-[48px] ss:text-[32px] text-[26px] text-white md:leading-[1.15] leading-[1.6] w-full z-[2] text-center mb-4"
        >
          Currently Working On
        </h2>
      </header>
      <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item
            v-for="currProjects in ongoingProjects"
            :key="currProjects.id"
            :title="currProjects.title"
            :name="currProjects.id"
          >
            <div>
              {{ currProjects.description }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import ongoingProjects from '../data/ongoingProjects.json';
import { ref } from 'vue';

export default {
  name: 'CurrProjects',
  data() {
    return {
      ongoingProjects,
    };
  },
  methods: {
    activeNames() {
      ref(['1']);
    },
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style></style>
