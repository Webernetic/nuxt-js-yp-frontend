<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

const props = defineProps({
    items: {
        type: Array,
        required: false,
        default: []
    },
    bgImage: {
        type: String,
        required: false,
        default: null
    },
    scrollSpaceIndex: {
      type: Number,
      required: false,
      default: 0.02
    }
});


onMounted(() => {
    if (sectionRef.value) {
      gsap.to(sectionRef.value.querySelectorAll('.blocks'), {
        y: (index, target) => {
          const scrollSpace = document.documentElement.scrollHeight - window.innerHeight;
          return scrollSpace * props.scrollSpaceIndex;
        },
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top top',
          scrub: true,
        },
      });
    }
});
</script>
<template>
    <div class="site-section section-3" data-stellar-background-ratio="0.5" :style="props.bgImage ? `background-image: url(${props.bgImage});` : ''" ref="sectionRef">
      <div class="container blocks">
        <slot name="header" />
        <div class="row" v-if="props.items.length">
          <div class="col-lg-4 col-md-6 mb-4" v-for="item in props.items" :key="`service-${item.id}`">
            <div class="service-1">
              <span class="service-1-icon">
                <span :class="item.icon"></span>
              </span>
              <div class="service-1-contents">
                <h3>{{ item.title }}</h3>
                <p v-if="item.description" v-html="item.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>