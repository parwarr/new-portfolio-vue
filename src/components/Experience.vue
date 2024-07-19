<template>
  <div id="experience" class="text-slate-200 px-5 lg:px-20 py-10">
    <header class="text-center" v-motion-slide-visible-left>
      <h3
        class="font-poppins font-normal text-[#05CBEE] sm:text-[20px] text-[16px] tracking-[0.2rem] mb-[8px] text-center"
      >
        WHAT I'VE DONE SO FAR
      </h3>
      <h2
        class="font-poppins font-normal md:text-[48px] ss:text-[32px] text-[26px] text-white md:leading-[1.15] leading-[1.6] w-full z-[2] text-center mb-4"
      >
        Professional Experience
      </h2>
    </header>
    <div class="flex flex-col items-center">
      <MotionGroup preset="slideVisibleLeft" :duration="600">
        <el-timeline style="max-width: 900px" class="w-full">
          <el-timeline-item
            v-for="experience in experiences"
            :key="experience.id"
            :timestamp="experience.timestamp"
            placement="top"
          >
            <el-card
              class="bg-transparent border border-slate-600 shadow-lg p-5"
            >
              <template v-if="experiencesProjectsId !== experience.id">
                <h3 class="text-xl font-bold text-blue-500">
                  {{ experience.company }}
                </h3>
                <h4 class="text-lg text-blue-400">{{ experience.position }}</h4>
                <p class="text-slate-400">{{ experience.description }}</p>
                <div class="">
                  <h3 class="py-3 mr-2 text-blue-500 font-bold text-nowrap">
                    Technologies used:
                  </h3>
                  <div class="flex gap-2 font-bold flex-row flex-wrap max-w-56">
                    <el-tag
                      v-for="technology in experience.technologies"
                      :key="technology"
                      class="bg-transparent border border-blue-500 text-white rounded-full text-sm"
                    >
                      {{ technology }}
                    </el-tag>
                  </div>
                  <div class="relative">
                    <div
                      v-if="experience.projects && experience.projects.length"
                      @click="onClickProjects(experience.id)"
                      class="absolute bottom-0 right-0 underline cursor-pointer text-blue-500"
                    >
                      Show Projects
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div v-motion-roll-visible-right>
                  <div
                    v-for="project in experience.projects"
                    :key="project.title"
                  >
                    <h5 class="text-md font-semibold text-blue-300 py-2">
                      {{ project.title }}
                    </h5>
                    <p class="text-slate-400 py-2">{{ project.description }}</p>
                  </div>
                  <div class="relative">
                    <div
                      @click="onClickProjects(experience.id)"
                      class="absolute bottom-0 right-0 underline cursor-pointer text-blue-500"
                    >
                      Show Experience
                    </div>
                  </div>
                </div>
              </template>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </MotionGroup>
    </div>
  </div>
</template>

<script>
import experiences from '../data/experiences.json';

export default {
  name: 'Experience',
  data() {
    return {
      experiencesProjectsId: null,
      experiences,
    };
  },
  methods: {
    onClickProjects(id) {
      if (this.experiencesProjectsId === id) {
        this.experiencesProjectsId = null;
      } else {
        this.experiencesProjectsId = id;
      }
    },
  },
};
</script>

<style>
.el-card:hover {
  background-color: rgba(14, 30, 37, 0.5) !important;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 20px rgba(14, 30, 37, 0.2), 0 0 15px rgba(21, 114, 182, 0.5);
}
</style>
