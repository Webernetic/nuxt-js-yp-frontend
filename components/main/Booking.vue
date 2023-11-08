<script setup>
const props = defineProps({
    bgImage: {
        type: String,
        required: false,
        default: null
    }
});
</script>
<template>
    <div class="site-section section-3" data-stellar-background-ratio="0.5" :style="props.bgImage ? `background-image: url(${props.bgImage});`: ''">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-7 text-center mb-5">
           <slot />
          </div>
        </div>
      </div>
    </div>
</template>