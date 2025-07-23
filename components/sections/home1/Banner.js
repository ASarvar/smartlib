"use client";
import { useState } from "react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
import React from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  
  return (
    <>
      <section className="main-slider main-slider-two">
        <Swiper {...swiperOptions} className="swiper-wrapper">
          {/* Start Swiper Slide Single*/}
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(assets/img/slider/slider-v1.jpg)",
              }}
            ></div>
            <div
              className="main-slider-two__pattern"
              style={{
                backgroundImage:
                  "url(assets/img/pattern/main-slider-v2-pattern.png)",
              }}
            ></div>

            <div className="container">
              <div className="main-slider-two__single">
                <div className="main-slider-two__content">
                  <div className="big-title">
                    <h2>{t('banner.title')}</h2>
                  </div>
                  <h2>
                    {t('banner.subtitle')}
                  </h2>
                  <div className="intro-text">
                    <p>
                      {t('banner.description')}
                    </p>
                  </div>
                  <div className="btn-box">
                    <div className="btn-one">
                      <Link className="thm-btn" href="/products">
                        <span className="txt">{t('banner.discoverMore')}</span>
                      </Link>
                    </div>
                    <div className="btn-two">
                      <Link className="thm-btn" href="/contact">
                        <span className="txt">{t('banner.getStartedNow')}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*End Swiper Slide Single */}

          {/*End Swiper Slide Single */}
          {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" id="main-slider-two__pagination"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" role="button" aria-label="Go to slide 1" aria-current="true"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 3"></span></div> */}
        </Swiper>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="vfhzo499OeA"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
