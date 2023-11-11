<script setup>
import { ref } from 'vue';
import SectionCover from '../components/banner/SectionCover';
import 'v-calendar/style.css';
import { DatePicker } from 'v-calendar';

const date = ref(new Date())
const rules = ref({
  hours: {max: 22, min: 9},
  minutes: {interval: 15}
});
</script>

<template>
<div>
  <div class="ftco-blocks-cover-1">
    <SectionCover
        title="Контакты"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veritatis in tenetur doloremque, maiores doloribus officia iste. Dolores."
        bg-image="/images/hero_1.jpg"
    ></SectionCover>
  </div>

  <div class="site-section bg-light" id="contact-section">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-7 text-center mb-5">
          <h2>Вы можете уточнить запись на стрижку</h2>
          <p>Оставьте Ваше имя, контактные данные, предпочитаемый способ связи и выберите день и время для записи на стрижку. Я отвечу Вам в самое ближайшее время</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mb-5" >
          <form action="#" method="post" id="book-order">
            <div class="form-group row">
              <div class="col-md-6 mb-4 mb-lg-0">
                <input type="text" name="name" class="form-control" placeholder="Имя">
              </div>
              <div class="col-md-6">
                <input type="text" name="phone" class="form-control" placeholder="Телефон">
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <textarea name="" id="" class="form-control" placeholder="Оставте сообщение. Если хотите :=)" cols="30" rows="10"></textarea>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-12">
                <DatePicker
                    v-model="date"
                    mode="dateTime"
                    is24hr
                    locale="ru"
                    hide-time-header
                    :rules="rules"
                    expanded
                >
                  <template #footer>
                    <div class="w-full px-4 pb-3">
                      <button
                          class="btn btn-block btn-primary text-white bg-indigo-600 py-3 px-5 hover:bg-indigo-700 text-white font-bold w-full px-3 py-1 rounded-md"
                      >
                        Узнать
                      </button>
                    </div>
                  </template>
                </DatePicker>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-4 ml-auto">
          <div class="bg-white p-3 p-md-5">
            <h3 class="text-black mb-4">Contact Info</h3>
            <ul class="list-unstyled footer-link">
              <li class="d-block mb-3">
                <span class="d-block text-black">Address:</span>
                <span>34 Street Name, City Name Here, United States</span></li>
              <li class="d-block mb-3"><span class="d-block text-black">Phone:</span><span>+1 242 4942 290</span></li>
              <li class="d-block mb-3"><span class="d-block text-black">Email:</span><span>info@yourdomain.com</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.vc-time-select-group{
  border: none;
}

button.btn{
  border-radius: 10px;
}
</style>