<template>
  <footer class="py-5 w-full text-center">
    <div class="container mx-auto">
      <div class="row">
        <div class="col-lg-12">
          <div class="footer-text">
            <div class="social-icons mt-4 mb-2">
              <a href="https://www.linkedin.com/in/parwar-h-6a48a226b" target="_blank" class="mx-2">
                <i class="fab fa-linkedin text-white text-2xl"/>
              </a>
              <a href="https://github.com/parwarr" target="_blank" class="mx-2">
                <i class="fab fa-github text-white text-2xl"/>
              </a>
              <a href="https://leetcode.com/u/parwarr" target="_blank" class="mx-2">
                  <CIcon class="h-6 bg-white rounded-lg" :icon="cibLeetcode"/>
              </a>
            </div>
            <p class="m-0 text-base text-white">
              <span>© 2024 Parwar Habasch</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { cibLeetcode } from '@coreui/icons';
import { CIcon } from '@coreui/icons-vue';

export default {
  name: 'Footer',
  components: {
    CIcon
  },
  setup() {
    return {
      cibLeetcode,
    }
  }
};
</script>

<style>
.social-icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.social-icons a {
  transition: transform 0.2s ease-in-out;
}

.social-icons a:hover {
  transform: translateY(-5px);
}
</style>
