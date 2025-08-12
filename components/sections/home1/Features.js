"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation();

  return (
    <>
      {/*Start Feauture One*/}
      <section className="feauture-one">
        <div className="container">
          <div className="row">
            {/*Start Feauture One Single */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="feauture-one__single">
                <div className="feauture-one__single-text">
                  <p>{t("features.exploreFeature")}</p>
                  <h2>
                    <Link href="/products">{t("features.rfidTechnology")}</Link>
                  </h2>
                </div>

                <div className="feauture-one__single-bottom">
                  <div className="btn-box">
                    <Link href="/products">
                      <span className="icon-plus"></span>
                    </Link>
                  </div>

                  <div className="icon-box">
                    <span className="icon-targeted"></span>
                  </div>
                </div>
              </div>
            </div>
            {/*Start Feauture One Single */}

            {/*Start Feauture One Single */}
            <div
              className="col-xl-4 col-lg-4  wow fadeInRight"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="feauture-one__single">
                <div className="feauture-one__single-text">
                  <p>{t("features.exploreFeature")}</p>
                  <h2>
                    <Link href="/solutions">
                      {t("features.automationSystems")}
                    </Link>
                  </h2>
                </div>

                <div className="feauture-one__single-bottom">
                  <div className="btn-box">
                    <Link href="/solutions">
                      <span className="icon-plus"></span>
                    </Link>
                  </div>

                  <div className="icon-box">
                    <span className="icon-analytics"></span>
                  </div>
                </div>
              </div>
            </div>
            {/*Start Feauture One Single */}

            {/*Start Feauture One Single */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="feauture-one__single">
                <div className="feauture-one__single-text">
                  <p>{t("features.exploreFeature")}</p>
                  <h2>
                    <Link href="/solutions">{t("features.services")}</Link>
                  </h2>
                </div>

                <div className="feauture-one__single-bottom">
                  <div className="btn-box">
                    <Link href="/solutions">
                      <span className="icon-plus"></span>
                    </Link>
                  </div>

                  <div className="icon-box">
                    <span className="icon-solution"></span>
                  </div>
                </div>
              </div>
            </div>
            {/*Start Feauture One Single */}
          </div>
        </div>
      </section>
      {/*End Feauture One */}
    </>
  );
}
