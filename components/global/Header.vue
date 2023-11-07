<script setup lang="ts">
import { useRoute } from "nuxt/app";
const route = useRoute();

const isActive = (path: string): boolean => {
  return route.path === path;
}
</script>
<template>
  <header class="site-navbar site-navbar-target" role="banner">

    <div class="container">
      <div class="row align-items-center position-relative">

        <div class="col-3 ">
          <div class="site-logo">
            <router-link to="/">Barberz</router-link>
          </div>
        </div>

        <div class="col-9  text-right">


          <span class="d-inline-block d-lg-none"><a href="#" class="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span class="icon-menu h3 text-white"></span></a></span>



          <nav class="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
            <ul class="site-menu main-menu js-clone-nav ml-auto ">
              <li :class="{'active': isActive('/')}"><router-link to="/" class="nav-link">Главная</router-link></li>
              <li :class="{'active': isActive('/services')}"><router-link :to="{name: 'services'}" class="nav-link" >Услуги</router-link></li>
              <li :class="{'active': isActive('/about')}"><router-link :to="{name: 'about'}" class="nav-link">Обо мне</router-link></li>
              <li :class="{'active': isActive('/blog')}"><router-link :to="{name: 'blog'}" class="nav-link">Блог</router-link></li>
              <li :class="{'active': isActive('/contact')}"><router-link :to="{name: 'contact'}" class="nav-link">Контакты</router-link></li>
            </ul>
          </nav>
        </div>


      </div>
    </div>

  </header>
</template>

<style scoped>

</style>