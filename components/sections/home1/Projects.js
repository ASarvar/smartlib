"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <>
      {/*Start Project One */}
      <section className="project-one">
        <div className="auto-container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h5>{t("projects.ourRecentProjects")}</h5>
            </div>
            <h2>
              {t("projects.heading")} <br />
              {t("projects.subHeading")}
            </h2>
          </div>
          <div className="row">
            {/*Start Project One Single */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <img src="assets/img/project/project-1 1.jpg" alt="" />
                  <div className="overlay-btn">
                    <Link
                      className="img-popup"
                      href="assets/img/project/project-1 1.jpg"
                    >
                      <span className="icon-search-interface-symbol"></span>
                    </Link>
                    <Link href="https://library-cisc.uz/">
                      <span className="icon-link"></span>
                    </Link>
                  </div>

                  <div className="overlay-text">
                    <p>{t("projects.tashkent")}</p>
                    <h2>
                      <Link href="#">{t("projects.cisc")}</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/*End Project One Single */}

            {/*Start Project One Single */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <img src="assets/img/project/project-1 2.jpg" alt="" />
                  <div className="overlay-btn">
                    <Link
                      className="img-popup"
                      href="assets/img/project/project-1 2.jpg"
                    >
                      <span className="icon-search-interface-symbol"></span>
                    </Link>
                    <Link href="https://library-cisc.uz/">
                      <span className="icon-link"></span>
                    </Link>
                  </div>

                  <div className="overlay-text">
                    <p>{t("projects.tashkent")}</p>
                    <h2>
                      <Link href="#">{t("projects.cisc")}</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/*End Project One Single */}

            {/*Start Project One Single */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <img src="assets/img/project/project-1 3.jpg" alt="" />
                  <div className="overlay-btn">
                    <Link
                      className="img-popup"
                      href="assets/img/project/project-1 3.jpg"
                    >
                      <span className="icon-search-interface-symbol"></span>
                    </Link>
                    <Link href="https://library-cisc.uz/">
                      <span className="icon-link"></span>
                    </Link>
                  </div>

                  <div className="overlay-text">
                    <p>{t("projects.tashkent")}</p>
                    <h2>
                      <Link href="#">{t("projects.cisc")}</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/*End Project One Single */}

            {/*Start Project One Single */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="project-one__single">
                <div className="project-one__single-img">
                  <img src="assets/img/project/project-1 4.jpg" alt="" />
                  <div className="overlay-btn">
                    <Link
                      className="img-popup"
                      href="assets/img/project/project-1 4.jpg"
                    >
                      <span className="icon-search-interface-symbol"></span>
                    </Link>
                    <Link href="https://library-cisc.uz/">
                      <span className="icon-link"></span>
                    </Link>
                  </div>

                  <div className="overlay-text">
                    <p>{t("projects.tashkent")}</p>
                    <h2>
                      <Link href="#">
                        {t("projects.cisc")}
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            {/*End Project One Single */}
          </div>
        </div>
      </section>
      {/*End Project One */}
    </>
  );
}
