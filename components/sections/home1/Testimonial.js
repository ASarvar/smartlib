import TestimonialSlider4 from "@/components/slider/TestimonialSlider4";

export default function Testimonial() {
  return (
    <>
      {/*Start Testimonials Two */}
      <section className="testimonials-two">
        <div
          className="testimonials-two__pattern"
          style={{
            backgroundImage:
              "url(assets/img/pattern/testimonials-v2-pattern.png)",
          }}
        ></div>
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h5>CLIENT TESTIMONIALS</h5>
            </div>
            <h2>
              Why Libraries Choose <br />
              SmartLibrary Solutions
            </h2>
          </div>

          <TestimonialSlider4 />
          {/*If we need navigation buttons */}
          <div
            className="swiper-pagination"
            id="testimonials-two__pagination"
          ></div>
        </div>
      </section>
      {/*End Testimonials Two */}
    </>
  );
}
