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
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center">
      <el-card class="bg-transparent border border-slate-600 shadow-lg p-5 flex justify-center">
        <div class="flex-grow p-5">
          <el-form
            ref="formRef"
            style="max-width: 600px"
            :model="dynamicValidateForm"
            label-width="auto"
            class="demo-dynamic"
            method="POST"
            data-netlify="true"
            name="contact-form"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <el-form-item
              prop="name"
              :rules="[
                {
                  required: true,
                  message: 'Please input your name',
                  trigger: 'blur',
                },
                {
                  type: 'string',
                  message: 'The name must be a string',
                  trigger: ['blur', 'change'],
                },
              ]"
            >
              <el-input v-model="dynamicValidateForm.name" placeholder="Name*" />
            </el-form-item>
            <el-form-item
              prop="email"
              :rules="[
                {
                  required: true,
                  message: 'Please input email address',
                  trigger: 'blur',
                },
                {
                  type: 'email',
                  message: 'Please input correct email address',
                  trigger: ['blur', 'change'],
                },
              ]"
            >
              <el-input v-model="dynamicValidateForm.email" placeholder="Email*" />
            </el-form-item>
            <el-form-item
              prop="message"
              :rules="[
                {
                  required: true,
                  message: 'Please input your message',
                  trigger: 'blur',
                },
                {
                  type: 'string',
                  message: 'The message must be a string',
                  trigger: ['blur', 'change'],
                },
              ]"
            >
              <el-input v-model="dynamicValidateForm.message" placeholder="Message*" type="textarea" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
              <el-button @click="resetForm(formRef)">Reset</el-button>
            </el-form-item>
          </el-form>
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
  message: string;
}>({
  email: '',
  name: '',
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
  formEl.validate(valid => {
    if (valid) {
      console.log('submit!');
      console.log(dynamicValidateForm);

      // Send form data to backend
      // axios.post('http://localhost:3000/contact', dynamicValidateForm).then(response => {
      //   console.log(response);
      // });
      setTimeout(() => {
        open2();
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
