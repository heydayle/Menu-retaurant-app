import {
  Swiper as SwiperClass,
  Controller,
  Pagination,
  EffectFade,
  EffectCoverflow,
  Autoplay,
  Navigation,
} from "swiper";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
// Swiper style (>= Swiper 6.x)
import "swiper/swiper.scss";
// Swiper modules
import "swiper/modules/effect-fade/effect-fade.scss";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

// Swiper modules
SwiperClass.use([
  Pagination,
  EffectFade,
  EffectCoverflow,
  Autoplay,
  Navigation,
  Controller,
]);

// local component
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
