<script setup lang="ts">
import {onMounted, ref} from "vue";

const message = ref('');
onMounted(() => {
  message.value = `Copyright &copy;${String(new Date().getFullYear())} All rights reserved`;
})
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <img src="/images/img_1.jpg" alt="Image" class="img-fluid mb-5">
          <h2 class="footer-heading mb-3">About Us</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
        </div>
        <div class="col-lg-8 ml-auto">
          <div class="row">
            <div class="col-lg-6 ml-auto">
              <h2 class="footer-heading mb-4">Quick Links</h2>
              <ul class="list-unstyled">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <h2 class="footer-heading mb-4">Newsletter</h2>
              <form action="#" class="subscribe d-flex">
                <input type="text" class="form-control mr-3" placeholder="Email">
                <input type="submit" value="Send" class="btn btn-primary">
              </form>
            </div>

          </div>
        </div>
      </div>
      <div class="row pt-5 mt-5 text-center">
        <div class="col-md-12">
          <div class="border-top pt-5">
            <p v-html="message">
            </p>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>