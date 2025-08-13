"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  speed: 800,
  effect: "slide",
  centeredSlides: false,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1350: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
};
export default function TestimonialSlider4() {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        {...swiperOptions}
        className="thm-swiper__slider swiper-container"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            {/*Start Testimonials Two Single */}
            <div className="testimonials-two__single">
              <div className="testimonials-two__single-top">
                <div className="img-box">
                  <img
                    src="assets/img/testimonial/testimonials-v2-img1.jpg"
                    alt=""
                  />
                </div>

                <div className="icon-box">
                  <span className="icon-quote"></span>
                </div>
              </div>

              <div className="testimonials-two__single-text">
                <p>{t("testimonials.testimonial1.text")}</p>
              </div>

              <div className="testimonials-two__single-bottom">
                <h3>{t("testimonials.testimonial1.name")}</h3>
                <p>{t("testimonials.testimonial1.position")}</p>
              </div>
            </div>
            {/*End Testimonials Two Single */}
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {/*Start Testimonials Two Single */}
            <div className="testimonials-two__single">
              <div className="testimonials-two__single-top">
                <div className="img-box">
                  <img
                    src="assets/img/testimonial/testimonials-v2-img1.jpg"
                    alt=""
                  />
                </div>

                <div className="icon-box">
                  <span className="icon-quote"></span>
                </div>
              </div>

              <div className="testimonials-two__single-text">
                <p>{t("testimonials.testimonial2.text")}</p>
              </div>

              <div className="testimonials-two__single-bottom">
                <h3>{t("testimonials.testimonial2.name")}</h3>
                <p>{t("testimonials.testimonial2.position")}</p>
              </div>
            </div>
            {/*End Testimonials Two Single */}
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {/*Start Testimonials Two Single */}
            <div className="testimonials-two__single">
              <div className="testimonials-two__single-top">
                <div className="img-box">
                  <img
                    src="assets/img/testimonial/testimonials-v2-img1.jpg"
                    alt=""
                  />
                </div>

                <div className="icon-box">
                  <span className="icon-quote"></span>
                </div>
              </div>

              <div className="testimonials-two__single-text">
                <p>{t("testimonials.testimonial3.text")}</p>
              </div>

              <div className="testimonials-two__single-bottom">
                <h3>{t("testimonials.testimonial3.name")}</h3>
                <p>{t("testimonials.testimonial3.position")}</p>
              </div>
            </div>
            {/*End Testimonials Two Single */}
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            {/*Start Testimonials Two Single */}
            <div className="testimonials-two__single">
              <div className="testimonials-two__single-top">
                <div className="img-box">
                  <img
                    src="assets/img/testimonial/testimonials-v2-img1.jpg"
                    alt=""
                  />
                </div>

                <div className="icon-box">
                  <span className="icon-quote"></span>
                </div>
              </div>

              <div className="testimonials-two__single-text">
                <p>{t("testimonials.testimonial4.text")}</p>
              </div>

              <div className="testimonials-two__single-bottom">
                <h3>{t("testimonials.testimonial4.name")}</h3>
                <p>{t("testimonials.testimonial4.position")}</p>
              </div>
            </div>
            {/*End Testimonials Two Single */}
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
