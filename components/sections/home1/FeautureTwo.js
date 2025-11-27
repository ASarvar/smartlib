"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function FeautureTwo() {
  const { t } = useTranslation();

  return (
    <>
      {/*Start Feauture Two */}
      <section className="feauture-two">
        <div className="container">
          <div className="row">
            {/*Start Feauture Two Single */}
            <div
              className="col-xl-6 wow animated fadeInRight"
              data-wow-delay="0.1s"
            >
              <div className="feauture-two__single">
                <div
                  className="feauture-two__single-img"
                  style={{
                    backgroundImage:
                      "url(assets/img/resource/feature-1.jpg)",
                  }}
                >
                  <div className="icon-box">
                    <span className="icon-targeted"></span>
                  </div>
                </div>
                <div className="feauture-two__single-content">
                  <h2>
                    <Link href="/products">
                      {t("features.advancedRfidSolutions")}
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            {/*End Feauture Two Single */}

            {/*Start Feauture Two Single */}
            <div
              className="col-xl-6 wow animated fadeInLeft"
              data-wow-delay="0.1s"
            >
              <div className="feauture-two__single">
                <div
                  className="feauture-two__single-img"
                  style={{
                    backgroundImage:
                      "url(assets/img/resource/feature-2.jpg)",
                  }}
                >
                  <div className="icon-box">
                    <span className="icon-solution"></span>
                  </div>
                </div>
                <div className="feauture-two__single-content">
                  <h2>
                    <Link href="/solutions">
                      {t("features.expertTechnicalSupport")}
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
            {/*End Feauture Two Single */}
          </div>
        </div>
      </section>
      {/*End Feauture Two */}
    </>
  );
}
