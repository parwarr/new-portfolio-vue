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
      <div class="flex flex-col items-center justify-center mt-4">
        <p class="text-slate-400 max-w-[70ch] text-center">
          Feel free to send me a message if you are interested in getting in touch. You can reach me through <a href="https://www.linkedin.com/in/parwar-h-6a48a226b/" target="_blank" class="font-poppins font-normal text-[#05CBEE]">LinkedIn</a> or directly via <a href="mailto:parwar.habasch@gmx.de" target="_blank" class="font-poppins font-normal text-[#05CBEE]">E-Mail</a>.<br/> If you are curious about my further development, you can follow me on <a href="https://github.com/parwarr" target="_blank" class="font-poppins font-normal text-[#05CBEE]">Github</a>.
        </p>
      </div>
<!--      <el-card-->
<!--        class="bg-transparent border border-slate-600 shadow-lg p-5 flex justify-center"-->
<!--      >-->
<!--        <div class="flex-grow p-5">-->
<!--          <form-->
<!--            name="contact"-->
<!--            method="POST"-->
<!--            netlify-honeypot="bot-field"-->
<!--            data-netlify="true"-->
<!--          >-->
<!--            <input type="hidden" name="form-name" value="contact" />-->
<!--            <p>-->
<!--              <label>Name<input type="text" name="name" /></label>-->
<!--            </p>-->
<!--            <p>-->
<!--              <label>Email<input type="email" name="email" /></label>-->
<!--            </p>-->
<!--            <p>-->
<!--              <label>Subject<input type="text" name="subject" /></label>-->
<!--            </p>-->
<!--            <p>-->
<!--              <label>Message<textarea name="message"></textarea></label>-->
<!--            </p>-->
<!--            <p>-->
<!--              <button type="submit">Send</button>-->
<!--            </p>-->
<!--          </form>-->

<!--          <div class="flex-shrink-0 lg:w-1/3">-->
<!--            <img-->
<!--              src="https://em-content.zobj.net/source/microsoft-teams/363/rocket_1f680.png"-->
<!--              alt="rocket"-->
<!--              class="lg:h-auto lg:max-w-xs"-->
<!--              draggable="false"-->
<!--            />-->
<!--          </div>-->
<!--        </div>-->
<!--      </el-card>-->
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
