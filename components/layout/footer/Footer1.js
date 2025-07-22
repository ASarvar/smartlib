import Link from "next/link";

export default function Footer1() {
  return (
    <>
      {/*Start Footer One */}
      <footer className="footer-one">
        <div className="shape1">
          <img
            className="float-bob-y"
            src="assets/img/shape/footer-v1-shape1.png"
            alt=""
          />
        </div>
        {/*Start Footer Main */}
        <div className="footer-main">
          <div className="container">
            <div className="row">
              {/*Start Single Footer Widget */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="single-footer-widget footer-widget__about">
                  <div className="logo-box">
                    <Link href="/">
                      <img
                        src="assets/img/logo/smartlibrary-logo-white.svg"
                        alt="SmartLibrary"
                      />
                    </Link>
                  </div>

                  <div className="footer-widget__about-inner">
                    <div className="text-box">
                      <p>Official Partner of Bibliotheca </p>
                    </div>
                    <div className="number-box">
                      <Link href="tel:+998711234567"><i className="icon-call">   </i>+998 71 123 45 67</Link>
                    </div>
                    <div className="footer-social-link">
                      <Link href="#">
                        <i className="icon-telegram"></i>
                      </Link>
                      <Link href="#">
                        <i className="icon-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="icon-facebook"></i>
                      </Link>
                      <Link href="#">
                        <i className="icon-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Footer Widget */}

              {/*Start Single Footer Widget */}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>Navigation</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/catalog">Products</Link>
                      </li>
                      <li>
                        <Link href="/solutions">Services</Link>
                      </li>
                      <li>
                        <Link href="/solutions">Solutions</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*End Single Footer Widget */}

              {/*Start Single Footer Widget */}
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget footer-widget__newsletter">
                  <div className="title">
                    <h2>Contact Info</h2>
                  </div>

                  <div className="footer-widget__newsletter-box">
                    <div className="footer-widget__newsletter-text">
                      <div className="contact-item">
                        <i className="icon-pin">{" "}</i>
                        <span> Tashkent, Uzbekistan, Mirzo Ulugbek District, 100125</span>
                      </div>
                      
                      <div className="contact-item">
                        <i className="icon-envelope">{" "}</i>
                        <span>
                          <Link href="mailto:yourmail@email.com"> info@smartlibrary.uz</Link>
                        </span>
                      </div>
                      
                      <div className="contact-item">
                        <i className="icon-clock">{" "}</i>
                        <span> Mon - Fri: 9:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Footer Widget */}
            </div>
          </div>
        </div>
        {/*End Footer Main */}

        {/*Start Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom__inner">
              <div className="footer-bottom__text text-center">
                <p>
                  Copyright © 2025 Smartlibrary. All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*End Footer Bottom */}
      </footer>
      {/*End Footer One */}
    </>
  );
}
