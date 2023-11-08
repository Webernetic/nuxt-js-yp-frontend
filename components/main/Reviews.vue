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
     <div class="site-section bg-light">
      <div class="container">
        <slot name="header" />
        <div class="row" v-if="props.items.length">
          <div class="col-lg-4 mb-4 mb-lg-0" v-for="item in props.items" :key="`review-${item.id}`">
            <div class="testimonial-2">
              <div class="d-flex v-card align-items-center mb-4">
                <img v-if="item.image" :src="item.image" :alt="item.name" class="img-fluid mr-3">
                <span>{{ item.name }}</span>
              </div>
              <blockquote>
                <p v-html="item.description"></p>
              </blockquote>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>