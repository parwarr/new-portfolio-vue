<template>
  <div id="contact" class="text-slate-200 px-5 lg:px-20 py-10">
    <header class="text-center">
      <h1 class="text-4xl lg:text-6xl font-bold mb-12">Contact</h1>
    </header>
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
      <el-form
        ref="formRef"
        style="max-width: 600px"
        :model="dynamicValidateForm"
        label-width="auto"
        class="demo-dynamic"
      >
        <el-form-item
          prop="name"
          label="Name"
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
          <el-input v-model="dynamicValidateForm.name" />
        </el-form-item>
        <el-form-item
          prop="email"
          label="Email"
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
          <el-input v-model="dynamicValidateForm.email" />
        </el-form-item>
        <el-form-item
          prop="message"
          label="Message"
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
          <el-input v-model="dynamicValidateForm.message" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
          <el-button @click="resetForm(formRef)">Reset</el-button>
        </el-form-item>
      </el-form>
      <div class="w-full lg:w-auto flex justify-center lg:justify-end">
        <img
          src="https://em-content.zobj.net/source/microsoft-teams/363/rocket_1f680.png"
          alt="rocket"
          class="lg:h-auto lg:max-w-xs mr-16"
          draggable="false"
        />
      </div>
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
