<script setup>
import {computed} from 'vue';
const props = defineProps({
    image: {
        type: String,
        required: false,
        default: null
    },
    title: {
        type: String,
        required: false,
        default: null
    }
})

const imageBlock = computed({
    src: props.image ? props.image : ''
})
</script>

<template>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="img-years" v-if="props.image">
              <img :src="props.image" alt="Image" class="img-fluid">
              <div class="year" v-if="props.title" v-html="props.title">
              </div>
            </div>

          </div>
          <slot name="footer"/>
        </div>
      </div>
    </div>
</template>