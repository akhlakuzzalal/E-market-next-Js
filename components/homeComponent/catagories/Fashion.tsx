import Image from 'next/image';
import { Autoplay, EffectCube, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../public/images/catagories/f1.jpeg';
import img2 from '../../../public/images/catagories/f2.jpg';
import img3 from '../../../public/images/catagories/f3.jpg';
import img4 from '../../../public/images/catagories/f4.jpg';

const Fashion = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <h6 className="ml-0 absolute -top-1 left-0 text-white bg-secondary px-2 py-1 rounded-lg z-50">
            Fashion
          </h6>
          <Image width="300px" height="200px" src={img1} alt="swiper" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <h6 className="ml-0 absolute -top-1 left-0 text-white bg-secondary px-2 py-1 rounded-lg z-50">
            Fashion
          </h6>
          <Image width="300px" height="200px" src={img2} alt="swiper" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <h6 className="ml-0 absolute -top-1 left-0 text-white bg-secondary px-2 py-1 rounded-lg z-50">
            Fashion
          </h6>
          <Image width="300px" height="200px" src={img3} alt="swiper" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <h6 className="ml-0 absolute -top-1 left-0 text-white bg-secondary px-2 py-1 rounded-lg z-50">
            Fashion
          </h6>
          <Image width="300px" height="200px" src={img4} alt="swiper" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Fashion;
