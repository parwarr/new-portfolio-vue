<template>
  <div id="contact" class="text-slate-200 px-5 lg:px-20 py-10">
    <header class="text-center">
      <h1 class="text-4xl lg:text-6xl font-bold mb-12">Contact Me</h1>
    </header>
    <div class="flex justify-center items-start">
      <el-card class="bg-transparent border border-slate-600 shadow-lg w-full lg:w-[900px]">
        <div class="flex flex-wrap lg:flex-nowrap justify-between">
          <div class="w-full lg:w-1/2 px-4">
            <el-form :label-position="right" label-width="auto" :model="formLabelAlign">
              <el-form-item label="Name">
                <el-input v-model="formLabelAlign.name" />
              </el-form-item>
              <el-form-item label="Email">
                <el-input v-model="formLabelAlign.region" />
              </el-form-item>
              <el-form-item label="Message">
                <el-input type="textarea" v-model="formLabelAlign.type" />
              </el-form-item>
              <div class="text-left">
                <button
                  type="button"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-16 rounded uppercase"
                >
                  Send Message
                </button>
              </div>
            </el-form>
          </div>
          <div class="w-full lg:w-1/2 flex justify-end">
            <img
              src="https://em-content.zobj.net/source/microsoft-teams/363/rocket_1f680.png"
              alt="rocket"
              class="lg:h-auto lg:max-w-xs mr-16"
              draggable="false"
            />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormProps } from 'element-plus';

const labelPosition = ref<FormProps['labelPosition']>('right');

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
});
</script>
