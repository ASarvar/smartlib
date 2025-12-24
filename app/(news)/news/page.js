"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle={t("news.pageTitle")}
      >
        <div>
          {/*Start Blog One */}
          <section className="blog-one">
            <div className="container">
              <div className="row">
                {/*Start Blog One Single */}
                <div
                  className="col-xl-4 col-lg-4 wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-one__single">
                    <div className="blog-one__single-img">
                      <div className="inner">
                        <img src="assets/img/news/news-1-img1.jpg" alt="" />
                        <div className="overlay-icon">
                          <Link href="/news-details">
                            <span className="icon-plus"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="blog-one__single-content">
                      <ul className="meta-info">
                        <li>
                          <p>
                            <Link href="#">{t("news.article1.category")}</Link>
                          </p>
                        </li>
                        <li>
                          <p>{t("news.article1.date")}</p>
                        </li>
                      </ul>
                      <h2>
                        <Link href="/news-details">
                          {t("news.article1.title")}
                        </Link>
                      </h2>
                      <div className="btn-box">
                        <Link href="/news-details">
                          {t("news.readMore")}{" "}
                          <span className="icon-left-arrow"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*End Blog One Single */}
              </div>
            </div>
          </section>
          {/*End Blog One */}
        </div>
      </Layout>
    </>
  );
}
