<template>
  <div id="contact" class="text-slate-200 px-5 lg:px-20 py-10">
    <header class="text-center">
      <h3
        class="font-poppins font-normal text-[#05CBEE] sm:text-[20px] text-[16px] tracking-[0.2rem] mb-[8px] text-center"
      >
        FEEL FREE TO REACH OUT
      </h3>
      <h2
        class="font-poppins font-normal md:text-[48px] ss:text-[32px] text-[26px] text-white md:leading-[1.15] leading-[1.6] w-full z-[2] text-center mb-4"
      >
        Contact
      </h2>
    </header>
    <div
      class="container mx-auto flex flex-col lg:flex-row items-center justify-center"
    >
      <el-card
        class="bg-transparent border border-slate-600 shadow-lg p-5 flex justify-center"
      >
        <div class="flex-grow p-5">
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            class="space-y-4"
          >
            <div class="flex flex-col space-y-2">
              <label class="text-slate-200 font-medium"
                >Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="p-2 rounded-md bg-transparent border border-slate-600 text-slate-200 focus:ring focus:ring-[#05CBEE] focus:border-[#05CBEE]"
                />
              </label>
            </div>
            <div class="flex flex-col space-y-2">
              <label class="text-slate-200 font-medium"
                >Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  class="p-2 rounded-md bg-transparent border border-slate-600 text-slate-200 focus:ring focus:ring-[#05CBEE] focus:border-[#05CBEE]"
                />
              </label>
            </div>
            <div class="flex flex-col space-y-2">
              <label class="text-slate-200 font-medium"
                >Subject
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  class="p-2 rounded-md bg-transparent border border-slate-600 text-slate-200 focus:ring focus:ring-[#05CBEE] focus:border-[#05CBEE]"
                />
              </label>
            </div>
            <div class="flex flex-col space-y-2">
              <label class="text-slate-200 font-medium"
                >Message
                <textarea
                  name="message"
                  id="message"
                  rows="2"
                  class="p-2 rounded-md bg-transparent border border-slate-600 text-slate-200 focus:ring focus:ring-[#05CBEE] focus:border-[#05CBEE]"
                ></textarea>
              </label>
            </div>
            <div class="flex justify-center">
              <button
                type="submit"
                class="px-4 py-2 rounded-md bg-[#05CBEE] text-white hover:bg-[#03a9d4] focus:outline-none focus:ring focus:ring-[#05CBEE]"
              >
                Send
              </button>
            </div>
          </form>

          <div class="flex-shrink-0 lg:w-1/3">
            <img
              src="https://em-content.zobj.net/source/microsoft-teams/363/rocket_1f680.png"
              alt="rocket"
              class="lg:h-auto lg:max-w-xs"
              draggable="false"
            />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus';
import { ElMessage } from 'element-plus';

import { reactive, ref } from 'vue';

const formRef = ref<FormInstance>();
const dynamicValidateForm = reactive<{
  name: string;
  email: string;
  subject: string;
  message: string;
}>({
  email: '',
  name: '',
  subject: '',
  message: '',
});

const open2 = () => {
  ElMessage({
    message: 'Thanks! Your Message was sent!',
    type: 'success',
  });
};

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');

      setTimeout(() => {
        open2();
        resetForm(formEl);
      }, 1000);
      return true;
    } else {
      console.log('error submit!');
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
