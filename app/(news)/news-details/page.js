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
        breadcrumbTitle={t("newsDetails.pageTitle")}
      >
        {/*Start Blog Details */}
        <section className="blog-details">
          <div className="container">
            <div className="row">
              {/*Start Blog Sidebar Content */}
              <div className="col-xl-8">
                <div className="blog-details__content">
                  <div className="blog-details__content-img1">
                    <img src="assets/img/news/news-1-details-img1.jpg" alt="" />
                  </div>

                  <div className="blog-details__content-text1">
                    <h2>{t("newsDetails.mainTitle")}</h2>
                    <p className="text1">{t("newsDetails.metadata")}</p>
                    <p className="text2">{t("newsDetails.paragraph1")}</p>
                  </div>

                  <div className="blog-details__content-img2">
                    <div className="row">
                      <div className="col-xl-12 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img2.jpg"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img4.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-details__content-text2">
                    <h3>{t("newsDetails.section2Title")}</h3>
                    <p>{t("newsDetails.paragraph2")}</p>
                    <p className="pt-20">{t("newsDetails.paragraph2-1")}</p>
                  </div>

                  <div className="blog-details__content-img2">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img5.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img6.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img7.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img8.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-details__content-text2">
                    <h3>{t("newsDetails.section3Title")}</h3>
                    <p>{t("newsDetails.paragraph3")}</p>
                  </div>
                  <div className="blog-details__content-img2">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img9.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img10.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img11.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img12.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-details__content-text2">
                    <h3>{t("newsDetails.section4Title")}</h3>
                    <p>{t("newsDetails.paragraph4")}</p>
                  </div>
                  <div className="blog-details__content-img2">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img13.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="blog-details__content-img2-single">
                          <img
                            src="assets/img/news/news-1-details-img14.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-details__content-text3 text-center">
                    <div className="icon-box">
                      <span className="icon-right-quotation-mark"></span>
                    </div>

                    <div className="text-box">
                      <p>{t("newsDetails.quote")}</p>
                      <p className="author">{t("newsDetails.quoteAuthor")}</p>
                    </div>
                  </div>

                  <div className="blog-details__content-text4">
                    <div className="tag-box">
                      <div className="title">
                        <h3>{t("newsDetails.postedIn")}</h3>
                      </div>

                      <div className="tag-box-list">
                        <ul>
                          <li>
                            <Link href="#">{t("newsDetails.tag1")}</Link>
                          </li>
                          <li>
                            <Link href="#">{t("newsDetails.tag2")}</Link>
                          </li>
                          <li>
                            <Link href="#">{t("newsDetails.tag3")}</Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="icon-box">
                      <Link href="#">
                        <span className="icon-share"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Blog Sidebar Content */}

              {/*Start Sidebar */}
              <div className="col-xl-4">
                <div className="sidebar">
                  {/*Start Sidebar Single */}
                  <div className="sidebar__single sidebar__category">
                    <h3 className="sidebar__title">
                      {t("newsDetails.categories")}
                    </h3>

                    <ul className="sidebar__category-list">
                      <li>
                        <Link className="active" href="#">
                          {t("newsDetails.category1")}{" "}
                          <span className="icon-left-arrow"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          {t("newsDetails.category2")}{" "}
                          <span className="icon-left-arrow"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          {t("newsDetails.category3")}{" "}
                          <span className="icon-left-arrow"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          {t("newsDetails.category4")}{" "}
                          <span className="icon-left-arrow"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          {t("newsDetails.category5")}{" "}
                          <span className="icon-left-arrow"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          {t("newsDetails.category6")}{" "}
                          <span className="icon-left-arrow"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/*End Sidebar Single */}

                  {/*Start Sidebar Single */}
                  <div className="sidebar__single sidebar__recent-post">
                    <h3 className="sidebar__title">
                      {t("newsDetails.recentPost")}
                    </h3>

                    <ul className="sidebar__recent-post-box">
                      <li>
                        <div className="inner">
                          <div className="img-box">
                            <img
                              src="assets/img/blog/sidebar-img1.jpg"
                              alt=""
                            />
                          </div>

                          <div className="content-box">
                            <h4>
                              <Link href="#">
                                {t("newsDetails.recentPost1")}
                              </Link>
                            </h4>
                            <p>
                              <span className="icon-clock"></span>{" "}
                              {t("newsDetails.recentPost1Date")}
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="img-box">
                            <img
                              src="assets/img/blog/sidebar-img2.jpg"
                              alt=""
                            />
                          </div>

                          <div className="content-box">
                            <h4>
                              <Link href="#">
                                {t("newsDetails.recentPost2")}
                              </Link>
                            </h4>
                            <p>
                              <span className="icon-clock"></span>{" "}
                              {t("newsDetails.recentPost2Date")}
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="img-box">
                            <img
                              src="assets/img/blog/sidebar-img3.jpg"
                              alt=""
                            />
                          </div>

                          <div className="content-box">
                            <h4>
                              <Link href="#">
                                {t("newsDetails.recentPost3")}
                              </Link>
                            </h4>
                            <p>
                              <span className="icon-clock"></span>{" "}
                              {t("newsDetails.recentPost3Date")}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*End Sidebar Single */}

                  {/*Start Sidebar Single */}
                  <div className="sidebar__single sidebar__tags">
                    <h3 className="sidebar__title">{t("newsDetails.tags")}</h3>
                    <ul className="sidebar__tags-list clearfix">
                      <li>
                        <Link href="#">{t("newsDetails.sidebarTag1")}</Link>
                      </li>
                      <li>
                        <Link href="#">{t("newsDetails.sidebarTag2")}</Link>
                      </li>
                      <li>
                        <Link href="#">{t("newsDetails.sidebarTag3")}</Link>
                      </li>
                      <li>
                        <Link href="#">{t("newsDetails.sidebarTag4")}</Link>
                      </li>
                      <li>
                        <Link href="#">{t("newsDetails.sidebarTag5")}</Link>
                      </li>
                      <li>
                        <Link href="#">{t("newsDetails.sidebarTag6")}</Link>
                      </li>
                      <li>
                        <Link href="#">{t("newsDetails.sidebarTag7")}</Link>
                      </li>
                    </ul>
                  </div>
                  {/*End Sidebar Single */}
                </div>
              </div>
              {/*End Sidebar */}
            </div>
          </div>
        </section>
        {/*End Blog Details */}
      </Layout>
    </>
  );
}
