"use client";
import Link from "next/link";
import TestimonialSlider4 from "@/components/slider/TestimonialSlider4";
import BrandSlider2 from "@/components/slider/BrandSlider2";
import Layout from "@/components/layout/Layout";
import CounterUp from "@/components/elements/CounterUp";
import TeamSlider2 from "@/components/slider/TeamSlider2";

export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="About Us">
        <div>
          {/*Start About One */}
          <section className="about-one about-one--about">
            <div className="shape1 float-bob-y">
              <img src="assets/img/shape/about-v1-shape1.png" alt="" />
            </div>
            <div className="container">
              <div className="row">
                {/*Start About One Img */}
                <div
                  className="col-xl-5 wow animated fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <div className="about-one__img">
                    <div className="inner">
                      <img src="assets/img/about/about-v1-img1.jpg" alt="" />
                    </div>
                    <div className="experience-box">
                      <div className="counter-box">
                        <h2 className="count">
                          <CounterUp end={4} />
                        </h2>
                      </div>
                      <div className="text-box">
                        <p>
                          YEARS <br />
                          WORKIGN <br />
                          EXPERIENCE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End About One Img */}

                {/*Start About One Content */}
                <div
                  className="col-xl-7 wow animated fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <div className="about-one__content">
                    <div className="sec-title">
                      <div className="sub-title">
                        <h5>About SmartLibrary</h5>
                      </div>
                      <h2>Leading RFID Solutions for Modern Libraries</h2>
                    </div>

                    <div className="text-box">
                      <p>
                        SmartLibrary is at the forefront of RFID technology,
                        delivering innovative solutions that redefine library
                        management. Our systems are designed to enhance
                        efficiency, streamline operations, and improve the user
                        experience for libraries of all sizes.
                      </p>
                    </div>

                    <div className="about-one__content-progress">
                      <div className="about-one__content-progress-single">
                        <div className="title">
                          <h4>RFID Solutions</h4>
                        </div>
                        <div className="bar">
                          <div
                            className="bar-inner1 count-bar"
                            data-percent="95%"
                          >
                            <div className="count-text">95%</div>
                          </div>
                        </div>
                      </div>

                      <div className="about-one__content-progress-single mb0">
                        <div className="title">
                          <h4>Library Automation</h4>
                        </div>
                        <div className="bar">
                          <div
                            className="bar-inner2 count-bar"
                            data-percent="90%"
                          >
                            <div className="count-text style2">90%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="about-one__content-bottom">
                      <div className="about-one__content-bottom-author-box">
                        <div className="btn-box">
                          <Link className="thm-btn" href="/about">
                            <span className="txt">More About Us</span>
                          </Link>
                        </div>

                        <div className="author-info">
                          <div className="img-box">
                            <img
                              src="assets/img/about/about-v1-img2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="signature-box">
                            <img
                              src="assets/img/about/signature-1.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text">
                        <h4>
                          Need RFID solutions for your library? Call Us:{" "}
                          <Link href="tel:+998712007009">
                            +998 71 200 70 09
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End About One Content */}
              </div>
            </div>
          </section>
          {/*End About One */}

          {/*Start Testimonials Two */}
          <section className="testimonials-two">
            <div
              className="testimonials-two__pattern"
              style={{
                backgroundImage:
                  "url(assets/img/pattern/testimonials-v2-pattern.png)",
              }}
            ></div>
            <div className="shape1 float-bob-x">
              <img src="assets/img/shape/testimonials-v2-shape1.png" alt="" />
            </div>
            <div className="container">
              <div className="sec-title text-center">
                <div className="sub-title">
                  <h5>OUR CLIENT TESTIMONIALS</h5>
                </div>
                <h2>
                  Why Our Clients Trust <br />
                  SmartLibrary
                </h2>
              </div>

              <TestimonialSlider4 />
              {/*If we need navigation buttons */}
            </div>
          </section>
          {/*End Testimonials Two */}

          {/*Start Brand Two */}
          <div className="brand-one brand-one--two about">
            <div className="container">
              <BrandSlider2 />
            </div>
          </div>
          {/*End Brand Two */}

          {/*Start Why Choose Us One */}
          <div className="why-choose-us-one">
            <div className="container">
              <div className="row">
                {/*Start Why Choose Us One Img */}
                <div
                  className="col-xl-6 wow animated fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <div className="why-choose-us-one__img">
                    <div className="shape1">
                      <img
                        src="assets/img/shape/why-choose-us-v1-shape1.png"
                        alt=""
                      />
                    </div>
                    <ul>
                      <li>
                        <div className="img-box">
                          <img
                            src="assets/img/resource/why-choose-us-v1-img1.jpg"
                            alt=""
                          />
                        </div>
                      </li>

                      <li>
                        <div className="img-box">
                          <img
                            src="assets/img/resource/why-choose-us-v1-img2.jpg"
                            alt=""
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*End Why Choose Us One Img */}

                {/*Start Why Choose Us Content */}
                <div
                  className="col-xl-6 wow animated fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <div className="why-choose-us-one__content">
                    <ul>
                      <li>
                        <div className="inner">
                          <div className="icon-box">
                            <span className="icon-rfid-chip"></span>
                          </div>
                          <div className="content-box">
                            <h2>Advanced RFID Technology</h2>
                            <p>
                              We leverage state-of-the-art RFID technology to
                              provide reliable and efficient library solutions.
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="icon-box">
                            <span className="icon-library-automation"></span>
                          </div>
                          <div className="content-box">
                            <h2>Seamless Library Automation</h2>
                            <p>
                              Our systems automate key library processes, from
                              check-in/out to inventory management.
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="icon-box">
                            <span className="icon-expert-support"></span>
                          </div>
                          <div className="content-box">
                            <h2>Expert Support & Planning</h2>
                            <p>
                              We offer professional planning and dedicated
                              support to ensure successful implementation and
                              operation.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*End Why Choose Us Content */}
              </div>
            </div>
          </div>
          {/*End Why Choose Us One */}

          {/*Start Call To Action One */}
          <section className="call-to-action-one">
            <div
              className="call-to-action-one__bg"
              style={{
                backgroundImage:
                  "url(assets/img/background/call-to-action-v1-bg.jpg)",
              }}
            ></div>
            <div className="container">
              <div className="call-to-action-one__inner">
                <div className="call-to-action-one__content text-center">
                  <h2>Ready to Upgrade Your Library?</h2>
                  <h3>Contact Us for RFID Technology Solutions</h3>
                  <div className="btn-box">
                    <Link className="thm-btn" href="/contact">
                      <span className="txt">GET IN TOUCH</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End Call To Action One */}
          {/*Start Team One */}
          <section className="team-one p100-top">
            <div className="container">
              <div className="team-one__top">
                <div className="sec-title">
                  <div className="sub-title">
                    <h5>OUR TEAM MEMBERS</h5>
                  </div>
                  <h2>
                    Expert Team Behind <br />
                    SmartLibrary Solutions
                  </h2>
                </div>
              </div>

              <TeamSlider2 />
              {/*If we need navigatsion button */}
            </div>
          </section>
          {/*End Team One */}
        </div>
      </Layout>
    </>
  );
}
