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
            name="contact-form"
          >
            <!-- Hidden form for Netlify -->
            <form name="contact-form" netlify netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <textarea name="message"></textarea>
            </form>

            <el-form-item
              prop="name"
              name="name"
              :rules="[
                { required: true, message: 'Please input your name', trigger: 'blur' },
                { type: 'string', message: 'The name must be a string', trigger: ['blur', 'change'] },
              ]"
            >
              <el-input v-model="dynamicValidateForm.name" placeholder="Name*" name="name" />
            </el-form-item>
            <el-form-item
              prop="email"
              name="email"
              :rules="[
                { required: true, message: 'Please input email address', trigger: 'blur' },
                { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
              ]"
            >
              <el-input v-model="dynamicValidateForm.email" placeholder="Email*" name="email" />
            </el-form-item>
            <el-form-item
              prop="message"
              name="message"
              :rules="[
                { required: true, message: 'Please input your message', trigger: 'blur' },
                { type: 'string', message: 'The message must be a string', trigger: ['blur', 'change'] },
              ]"
            >
              <el-input v-model="dynamicValidateForm.message" placeholder="Message*" type="textarea" name="message" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
              <el-button @click="resetForm(formRef)">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios';
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
  formEl.validate(async valid => {
    if (valid) {
      // Convert form data to URL-encoded string
      const formData = new FormData();
      formData.append('form-name', 'contact-form'); // Important: matches the name attribute of your form
      formData.append('name', dynamicValidateForm.name);
      formData.append('email', dynamicValidateForm.email);
      formData.append('message', dynamicValidateForm.message);

      // URL encode the form data for submission
      const urlEncodedData = new URLSearchParams();
      formData.forEach((value, key) => {
        urlEncodedData.append(key, value);
      });

      try {
        await axios({
          method: 'post',
          url: '/',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: urlEncodedData,
        });

        // Success message and form reset
        open2();
        resetForm(formEl);
      } catch (error) {
        console.error('Submission error', error);
      }
    } else {
      console.log('Validation failed');
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
