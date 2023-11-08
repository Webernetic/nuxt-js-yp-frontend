<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: false,
        default: []
    }
})
</script>
<template>
    <div class="site-section bg-white">
      <div class="container">
        <slot name="header" />

        <div class="row" v-if="props.items.length">
          <div class="col-lg-4 col-md-6 mb-4" v-for="item in props.items" :key="`post-${item.id}`">
            <div class="post-entry-1 h-100">
              <nuxt-link :to="{name: 'blog-id', params: {id: item.link}}">
                <img :src="item.image" :alt="item.title" class="img-fluid">
              </nuxt-link>
              <div class="post-entry-1-contents">

                <h2><nuxt-link :to="{name: 'blog-id', params: {id: item.link}}">{{ item.title }}</nuxt-link></h2>
                <span class="meta d-inline-block mb-3">{{ item.date }}</span>
                <p v-html="item.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>