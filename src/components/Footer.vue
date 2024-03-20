<template>
  <footer class="footer-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="footer-text text-center">
            <p>Made with ❤️ by Parwar👋</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer-area {
  background-color: #f9f9f9;
  padding: 20px 20px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footer-text p {
  margin: 0;
  font-size: 14px;
  color: #000;
  font-weight: 500;
  text-transform: uppercase;
}

.footer-text p a {
  color: #007bff;
  text-decoration: none;
}

.footer-text p a:hover {
  color: #61acfd;
}
</style>
<script>
export default {
  name: 'Footer',
};
</script>
