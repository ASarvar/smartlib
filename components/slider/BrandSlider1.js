'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 2,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 5,
        },
    }
}

const brandsBase = [
    { id: 1, image: 'assets/img/brand/brand-1.png', alt: 'Brand Partner 1' },
    { id: 2, image: 'assets/img/brand/brand-2.png', alt: 'Brand Partner 2' },
    { id: 7, image: 'assets/img/brand/brand-7.png', alt: 'Brand Partner 7' },
    { id: 8, image: 'assets/img/brand/brand-8.png', alt: 'Brand Partner 8' },
    { id: 9, image: 'assets/img/brand/brand-9.png', alt: 'Brand Partner 9' },
    { id: 10, image: 'assets/img/brand/brand-10.png', alt: 'Brand Partner 10' },
    { id: 11, image: 'assets/img/brand/brand-11.png', alt: 'Brand Partner 11' },
    { id: 12, image: 'assets/img/brand/brand-12.png', alt: 'Brand Partner 12' },
]

// Duplicate brands for smooth infinite loop
const brands = [...brandsBase, ...brandsBase.map(b => ({ ...b, id: b.id + 100 }))]

export default function BrandSlider1() {
    return (
        <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
            {brands.map((brand) => (
                <SwiperSlide key={brand.id} className="swiper-slide">
                    <div className="img-box">
                        <img src={brand.image} alt={brand.alt} loading="lazy" />
                    </div>
                    <div className="img-box2">
                        <img src={brand.image} alt={brand.alt} loading="lazy" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
