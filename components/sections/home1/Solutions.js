"use client";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <>
      {/*Start Service One */}
      <section className="service-one">
        <div
          className="service-one__shape2"
          style={{
            backgroundImage: "url(assets/img/shape/service-v1-shape2.png)",
          }}
        ></div>
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h5>{t("solutions.ourServices")}</h5>
            </div>
            <h2>{t("solutions.heading")}</h2>
          </div>
          <div className="row">
            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">01</div>
                  <div className="icon-box">
                    <span className="icon-targeted"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="/products">
                        {t("solutions.rfidTechnology")}
                      </Link>
                    </h2>
                    <p>{t("solutions.rfidDescription")}</p>
                    <div className="btn-box">
                      <Link href="/products">
                        {t("solutions.exploreProducts")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}

            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">02</div>
                  <div className="icon-box">
                    <span className="icon-analytics"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="/solutions">
                        {t("solutions.automationSystems")}
                      </Link>
                    </h2>
                    <p>{t("solutions.automationDescription")}</p>
                    <div className="btn-box">
                      <Link href="/solutions">
                        {t("solutions.exploreSolutions")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}

            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">03</div>
                  <div className="icon-box">
                    <span className="icon-solution"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="/solutions">
                        {t("solutions.installationSupport")}
                      </Link>
                    </h2>
                    <p>{t("solutions.installationDescription")}</p>
                    <div className="btn-box">
                      <Link href="/solutions">
                        {t("solutions.exploreServices")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}

            {/*Start Service One Single */}
            <div
              className="col-xl-6 col-lg-6 wow animated fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="service-one__single">
                <div className="shape1">
                  <img src="assets/img/shape/service-v1-shape1.png" alt="" />
                </div>
                <div className="service-one__single-inner">
                  <div className="count-text">04</div>
                  <div className="icon-box">
                    <span className="icon-light-bulb"></span>
                  </div>
                  <div className="content-box">
                    <h2>
                      <Link href="/contact">
                        {t("solutions.consultingTraining")}
                      </Link>
                    </h2>
                    <p>{t("solutions.consultingDescription")}</p>
                    <div className="btn-box">
                      <Link href="/contact">
                        {t("solutions.getConsultation")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Service One Single */}
          </div>
        </div>
      </section>
      {/*End Service One */}
    </>
  );
}
