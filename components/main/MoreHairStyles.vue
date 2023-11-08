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
    <div class="site-section">
      <div class="container">
        <slot name="header" />
        <div class="row hair-style" v-if="props.items">
          <div class="col-lg-4 col-md-4 col-sm-6 col-12" v-for="item in props.items" :key="`item-${item.id}`">
            <a href="#" class="place">
              <img 
                v-if="item.image"
                :src="item.image"
                :alt="item.title"
                >
              <h2>{{ item.title }}</h2>
              <span v-if="item.price">{{ item.price }}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
</template>