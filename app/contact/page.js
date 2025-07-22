import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Contact Us">
        <div>
          {/*Start Contact Page */}
          <section className="contact-page">
            <div className="contact-page__top">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-page__top-content">
                      <div className="contact-page__top-content-top">
                        <h2>Get in Touch</h2>
                        <p>
                          Ready to transform your library with cutting-edge RFID
                          technology? SmartLibrary offers comprehensive
                          solutions for modern libraries. Contact us today to
                          discuss your library automation needs.
                        </p>
                      </div>

                      <div className="contact-page__top-content-bottom">
                        <h2>Contact Info</h2>
                        <ul>
                          <li>
                            <div className="inner">
                              <div className="icon-box">
                                <span className="icon-pin"></span>
                              </div>

                              <div className="content-box">
                                <h4>Address</h4>
                                <p>
                                  Tashkent, Uzbekistan
                                  <br />
                                  Innovation Hub, Tech District
                                </p>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="inner">
                              <div className="icon-box">
                                <span className="icon-phone"></span>
                              </div>

                              <div className="content-box">
                                <h4>Phone</h4>
                                <p>
                                  <a href="tel:+998712007009">+998 71 200 70 09</a>{" "}
                                  or{" "}
                                  <a href="tel:+998712007008">+998 71 200 70 08</a>
                                </p>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="inner">
                              <div className="icon-box">
                                <span className="icon-envelope"></span>
                              </div>

                              <div className="content-box">
                                <h4>Email</h4>
                                <p>
                                  <a href="mailto:info@smartlibrary.uz">
                                    info@smartlibrary.uz
                                  </a>
                                  or{" "}
                                  <a href="mailto:support@smartlibrary.uz">
                                    support@smartlibrary.uz
                                  </a>
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-page__google-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                        className="contact-page-google-map__one"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-page__bottom">
              {/*Start Contact Two */}
              <div className="contact-two">
                <div className="container">
                  <div className="contact-two__inner">
                                                        <div className="title-box">
                                        <h2>Let's Discuss Your Library Project</h2>
                                        <p>Ready to upgrade your library with RFID technology? Share your requirements below and we'll get back to you.</p>
                                    </div>
                    <div className="contact-two__inner-box">
                      <form
                        action="/"
                        className="contact-page__form contact-form-validated"
                      >
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-page__input-box">
                              <input
                                type="text"
                                placeholder="Library Name*"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-page__input-box">
                              <input
                                type="email"
                                placeholder="Your Email*"
                                name="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-page__input-box">
                              <input
                                type="text"
                                placeholder="Phone*"
                                name="phone"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-page__input-box">
                              <input
                                type="text"
                                placeholder="RFID Requirements*"
                                name="subject"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="contact-page__input-box">
                              <textarea
                                name="message"
                                placeholder="Tell us about your library and RFID technology needs*"
                              ></textarea>
                            </div>
                            <div className="contact-page__btn">
                              <button
                                className="thm-btn"
                                type="submit"
                                data-loading-text="Please wait..."
                              >
                                <span className="txt">SEND MESSAGE</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Contact Two */}
            </div>
          </section>
          {/*End Contact Page */}
        </div>
      </Layout>
    </>
  );
}
