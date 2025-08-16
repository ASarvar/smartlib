"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function Footer1() {
  const { t } = useTranslation();
  const [emailVisible, setEmailVisible] = useState(false);

  // Obfuscated email parts for anti-spam
  const emailUser = "info";
  const emailDomain = "smartlibrary.asia"; // Updated to match footer
  const email = `${emailUser}@${emailDomain}`;

  // Phone number with proper formatting
  const phoneNumber = "+77074044744";
  const phoneDisplay = "+7 707 404 47 44";

  useEffect(() => {
    setEmailVisible(true);
  }, []);

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
                      <p>{t("footer.officialPartner")}</p>
                    </div>
                    <div className="number-box">
                      <Link
                        href={`tel:${phoneNumber}`}
                        aria-label={t("footer.callUs")}
                        title={t("footer.callUsTitle")}
                      >
                        {phoneDisplay}
                      </Link>
                    </div>
                    <div className="footer-social-link">
                      <Link
                        href="#"
                        rel="noopener noreferrer"
                        aria-label={t("footer.telegramAria")}
                        title={t("footer.telegramTitle")}
                      >
                        <i className="icon-telegram"></i>
                      </Link>
                      <Link
                        href="#"
                        rel="noopener noreferrer"
                        aria-label={t("footer.instagramAria")}
                        title={t("footer.instagramTitle")}
                      >
                        <i className="icon-instagram"></i>
                      </Link>
                      <Link
                        href="#"
                        rel="noopener noreferrer"
                        aria-label={t("footer.facebookAria")}
                        title={t("footer.facebookTitle")}
                      >
                        <i className="icon-facebook"></i>
                      </Link>
                      <Link
                        href="#"
                        rel="noopener noreferrer"
                        aria-label={t("footer.youtubeAria")}
                        title={t("footer.youtubeTitle")}
                      >
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
                    <h2>{t("footer.navigation")}</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="/">{t("footer.home")}</Link>
                      </li>
                      <li>
                        <Link href="/products">{t("footer.products")}</Link>
                      </li>
                      <li>
                        <Link href="/solutions">{t("footer.solutions")}</Link>
                      </li>
                      <li>
                        <Link href="/news">{t("menu.news")}</Link>
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
                    <h2>{t("footer.contactInfo")}</h2>
                  </div>

                  <div className="footer-widget__newsletter-box">
                    <div className="footer-widget__newsletter-text">
                      <div className="contact-item">
                        <i className="icon-pin"> </i>
                        <span>{t("footer.address")}</span>
                      </div>

                      <div className="contact-item">
                        <i className="icon-envelope"> </i>
                        <span>
                          {emailVisible ? (
                            <Link
                              href={`mailto:${email}`}
                              aria-label={t("footer.emailUs")}
                              title={t("footer.emailUsTitle")}
                              rel="noopener noreferrer"
                            >
                              {email}
                            </Link>
                          ) : (
                            <span>{t("footer.loading")}</span>
                          )}
                        </span>
                      </div>

                      <div className="contact-item">
                        <i className="icon-clock"> </i>
                        <span>{t("footer.workingHours")}</span>
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
                <p>{t("footer.copyright")}</p>
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
