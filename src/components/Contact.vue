<template>
  <div>
    <h2>Contact Us</h2>
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
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
