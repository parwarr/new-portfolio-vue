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
        <el-collapse accordion>
          <el-collapse-item title="Feedback" name="1">
            <div>
              Operation feedback: enable the users to clearly perceive their
              operations by style updates and interactive effects;
            </div>
            <div>
              Visual feedback: reflect current state by updating or rearranging
              elements of the page.
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue';
</script>
