<script setup lang="ts">
  import { onMounted, ref, computed } from "vue";
  import { gsap } from 'gsap'
  import {ScrollTrigger} from "gsap/ScrollTrigger";
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = ref<HTMLElement | null>(null);

  const props = defineProps({
    title: {
      type: String,
      default: 'More Than Just A Haircut',
      required: false
    },
    bgImage: {
      type: String,
      default: null,
      required: false
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    learnMoreButton: {
      type: String,
      required: false,
      default: 'Узнать больше'
    },
    scrollSpaceIndex: {
      type: Number,
      required: false,
      default: 0.06
    }
  });

  const backgroundStyle = computed(() => {
    return {
      backgroundImage: props.bgImage ? `url(${props.bgImage})` : ''
    }
  })

  onMounted(() => {
    if (sectionRef.value) {
      gsap.to(sectionRef.value.querySelectorAll('.background-image'), {
        y: (index, target) => {
          const scrollSpace = document.documentElement.scrollHeight - window.innerHeight;
          return scrollSpace * props.scrollSpaceIndex;
        },
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top top',
          scrub: true,
          // pin:true,
          // markers: true
        },
        stagger: 0.2,
        duration: 0.1
      });
    }
  });
</script>

<template>
  <div class="ftco-blocks-cover-1">
    <div
        class="site-section-cover overlay"
        :style="backgroundStyle"
        ref="sectionRef"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-7 background-image">
            <h1 class="mb-3">{{ props.title }}</h1>
            <p v-if="props.description">{{ props.description }}</p>
            <p><a href="#" class="btn btn-primary">{{ learnMoreButton }}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>



</style>