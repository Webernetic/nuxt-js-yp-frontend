<script setup>
import { onMounted, ref } from 'vue';
import SectionCover from '~/components/banner/SectionCover';
import Welcome from '~/components/main/Welcome';
import Slider from '~/components/main/Slider';
import MoreHairStyles from '~/components/main/MoreHairStyles';
import MoreServices from '~/components/main/MoreServices';
import Reviews from '~/components/main/Reviews';
import Blog from '~/components/main/Blog';
import Booking from '~/components/main/Booking';

const items = ref([
  {
    id: 1,
    image: '/images/img_1.jpg',
    title: 'Бритье Бороды',
    price: '35 BYN'
  },
  {
    id: 2,
    image: '/images/img_2.jpg',
    title: 'Бритье Бороды 2',
    price: '30 BYN'
  },
  {
    id: 3,
    image: '/images/img_3.jpg',
    title: 'Бритье Бороды 3',
    price: '50 BYN'
  }
]);

const services = ref([
  {
    id: 1,
    title: 'Стрижка',
    icon: 'flaticon-bald',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.'
  },
  {
    id: 2,
    title: 'Уход за лицом',
    icon: 'flaticon-beard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.'
  },
  {
    id: 3,
    title: 'Hair Cut',
    icon: 'flaticon-scissors',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.'
  },
  {
    id: 4,
    title: 'Стрижка',
    icon: 'flaticon-hair-spray',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.'
  },
  {
    id: 5,
    title: 'Facial &amp; Body Care',
    icon: 'flaticon-hair',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.'
  },
  {
    id: 6,
    title: 'Massages',
    icon: 'flaticon-barber-shop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam.'
  }
]);

const reviews = ref([
  {
    id: 1,
    image: '/images/person_1.jpg',
    name: 'Mike Fisher',
    description: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"'
  },
  {
    id: 1,
    image: '/images/person_2.jpg',
    name: 'Jean Stanley',
    description: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"'
  },
  {
    id: 1,
    image: '/images/person_3.jpg',
    name: 'Katie Rose',
    description: '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"'
  }
]);

const posts = ref([
  {
    id: 1,
    image: '/images/img_1.jpg',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
    date: 'July 17, 2019',
    link: 'lorem-ipsum-1'
  },
  {
    id: 1,
    image: '/images/img_2.jpg',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
    date: 'July 15, 2019',
    link: 'lorem-ipsum-2'
  },
  {
    id: 1,
    image: '/images/img_3.jpg',
    title: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eos soluta, dolore harum molestias consectetur.',
    date: 'July 14, 2019',
    link: 'lorem-ipsum-3'
  }
]);

onMounted(() => {
  document.body.classList.add('index');
});

</script>
<template>
  <div>
    <SectionCover
        title="Лучший барбер города"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores."
        bg-image="/images/hero_1.jpg"
        :scroll-space-index="0.035"
    ></SectionCover>

    <Welcome image="/images/img_1.jpg" title="<span>3 <span>года <br>отличного сервиса</span></span>">
      <template v-slot:footer>
        <div class="col-lg-5 ml-auto pl-lg-5 text-center">
            <h3 class="scissors text-center">Добро пожаловать!</h3>
            <p class="mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum maxime neque!</p>
            <p><a href="#" class="btn btn-primary">Узнать больше</a></p>
          </div>
      </template>
    </Welcome>

    <Slider>
      <template v-slot:header>
        <h3 class="scissors text-center">Услуги &amp; Цены</h3>
        <p class="mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum maxime neque!</p>
      </template>
    </Slider>

    <MoreHairStyles :items="items">
      <template v-slot:header>
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center">
            <h3 class="scissors text-center">Больше причесок</h3>
            <p class="mb-5 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure nesciunt nemo vel earum maxime neque!</p>
          </div>
        </div>
      </template>
    </MoreHairStyles>
    <!-- END section -->
    <MoreServices :items="services" :bg-image="'/images/hero_2.jpg'">
      <template v-slot:header>
        <div class="row justify-content-center text-center">
          <div class="col-7 text-center mb-5">
            <h2 class="text-white scissors primary-color-icon text-center">Больше услуг</h2>
            <p class="lead text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quo doloribus, suscipit libero, voluptate aliquam.</p>
          </div>
        </div>
      </template>
    </MoreServices>

   <Reviews :items="reviews">
    <template v-slot:header>
      <div class="row justify-content-center text-center mb-5">
          <div class="col-7 text-center mb-5">
            <h2 class="scissors text-center">Отзывы клиентов</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
          </div>
        </div>
    </template>
  </Reviews>

  <Blog :items="posts">
    <template #header>
      <div class="row justify-content-center text-center mb-5">
          <div class="col-7 text-center mb-5">
            <h2 class="scissors text-center">Мой блог</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
          </div>
        </div>
    </template>
  </Blog>
  <Booking :bg-image="'/images/hero_1.jpg'">
    <template>
      <h2 class="text-white scissors primary-color-icon text-center">Записаться на стрижку</h2>
      <p class="lead text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quo doloribus, suscipit libero, voluptate aliquam.</p>
      <p><a href="#" class="btn btn-primary">Записаться</a></p>
    </template>
  </Booking>
  </div>
</template>

<style scoped lang="scss">

</style>