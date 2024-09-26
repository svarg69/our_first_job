import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.news__swiper', {
  slidesPerView: '4',
  loop: true,
  autoHeight:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
