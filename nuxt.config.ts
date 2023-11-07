// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
      '~/public/fonts/icomoon/style.css',
      '~/public/css/bootstrap.min.css',
      '~/public/css/bootstrap-datepicker.css',
      '~/public/css/jquery.fancybox.min.css',
      '~/public/css/owl.carousel.min.css',
      '~/public/css/owl.theme.default.min.css',
      '~/public/fonts/flaticon/font/flaticon.css',
      '~/public/css/aos.css',
      '~/public/css/style.css'
  ],
  app: {
    head: {
      title: 'Barberz Website Template by Colorlib',
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1, shrink-to-fit=no"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=DM+Sans:300,400,700&display=swap'}
      ],
      script: [
          {src: '/js/jquery-3.3.1.min.js', body: true},
          {src: '/js/jquery-migrate-3.0.0.js', body: true},
          {src: '/js/popper.min.js', body: true},
          {src: '/js/bootstrap.min.js', body: true},
          {src: '/js/owl.carousel.min.js', body: true},
          {src: '/js/jquery.sticky.js', body: true},
          {src: '/js/jquery.waypoints.min.js', body: true},
          {src: '/js/jquery.animateNumber.min.js', body: true},
          {src: '/js/jquery.fancybox.min.js', body: true},
          {src: '/js/jquery.stellar.min.js', body: true},
          {src: '/js/jquery.easing.1.3.js', body: true},
          {src: '/js/bootstrap-datepicker.min.js', body: true},
          {src: '/js/aos.js', body: true},
          {src: '/js/main.js', body: true},
      ],
       bodyAttrs: {
          class: 'barber',
           'data-spy': 'scroll',
           'data-target': '.site-navbar-target',
           'data-offset': '300'
       }
    }
  }
})
