<template>
  <footer class="py-5 w-full text-center">
    <div class="container mx-auto">
      <div class="row">
        <div class="col-lg-12">
          <div class="footer-text">
            <div class="social-icons mt-4 mb-2">
              <a href="www.linkedin.com/in/parwar-h-6a48a226b" class="mx-2">
                <i class="fab fa-linkedin text-white text-2xl"></i>
              </a>
              <a href="https://github.com/parwarr" class="mx-2">
                <i class="fab fa-github text-white text-2xl"></i>
              </a>
            </div>
            <p class="m-0 text-base text-white">
              <span>© 2024 Parwar Habasch. All Rights Reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
};
</script>

<style>
.social-icons a {
  transition: transform 0.2s ease-in-out;
}

.social-icons a:hover {
  transform: translateY(-5px);
}
</style>
