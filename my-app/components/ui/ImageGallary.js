import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ImageGallary.module.css"
const ImageGalllary = () => {
  return (
    <>
      <div className={styles.sliderWrap} style={{ width: "100%", padding: "10px" }}>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: -80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          centeredSlides={true}
          slidesPerView="auto"
          navigation
          pagination={{ type: "fraction" }}
        >
          <SwiperSlide>
            <Image
              src="/images/photo1.png"
              alt="Image 1"
              width={359}
              height={419}
              style={{ borderRadius: "35px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/photo2.png"
              alt="Image 2"
              width={359}
              height={419}
              style={{ borderRadius: "35px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/photo3.png"
              alt="Image 3"
              width={359}
              height={419}
              style={{ borderRadius: "35px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/photo4.png"
              alt="Image 4"
              width={359}
              height={419}
              style={{ borderRadius: "35px" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ImageGalllary;
