"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });
  // Phone number with proper formatting
  const phoneNumber = "+77074044744";
  const phoneDisplay = "+7 707 404 47 44";
  const phoneNumber2 = "+998777510017";
  const phoneDisplay2 = "+998 77 751 00 17";

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Layout
        headerStyle={3}
        footerStyle={1}
        breadcrumbTitle={t("solutionsPage.title")}
        breadcrumbBg="assets/img/solution/solution-page-bg.jpg"
      >
        <div>
          {/*Start Services Details */}
          <section className="services-details">
            <div className="container">
              <div className="row">
                {/* Start Services Details Content*/}
                <div className="col-xl-8">
                  <div className="services-details__content">
                    <div className="services-details__content-img1">
                      <img src="assets/img/solution/solution1.jpg" alt="#" />
                    </div>

                    <div
                      className="text-box1"
                      id="rfid-solutions"
                      style={{ scrollMarginTop: "100px" }}
                    >
                      <h4>{t("solutionsPage.mainTitle")}</h4>
                      <p className="text1">{t("solutionsPage.intro1")}</p>
                      <p className="text1">{t("solutionsPage.intro2")}</p>
                      <p className="text1">{t("solutionsPage.intro3")}</p>
                      <p className="text1">{t("solutionsPage.intro4")}</p>
                    </div>

                    <div className="services-details__content-img2">
                      <img src="assets/img/solution/solution3.jpg" alt="#" />
                    </div>

                    <div
                      className="text-box3"
                      id="how-it-works"
                      style={{ scrollMarginTop: "100px" }}
                    >
                      <h4>{t("solutionsPage.howItWorksTitle")}</h4>
                      <p className="text1">{t("solutionsPage.howItWorks1")}</p>
                      <p className="text1">{t("solutionsPage.howItWorks2")}</p>
                      <p className="text1">{t("solutionsPage.howItWorks3")}</p>
                      <p className="text1">{t("solutionsPage.howItWorks4")}</p>
                    </div>

                    <div className="services-details__content-img2">
                      <img src="assets/img/solution/solution2.jpg" alt="#" />
                    </div>

                    <div
                      className="text-box3"
                      id="implementation"
                      style={{ scrollMarginTop: "100px" }}
                    >
                      <h4>{t("solutionsPage.implementationTitle")}</h4>
                      <p className="text1">
                        {t("solutionsPage.implementation1")}
                      </p>
                      <p className="text1">
                        {t("solutionsPage.implementation2")}
                      </p>
                      <p className="text1">
                        {t("solutionsPage.implementation3")}
                      </p>
                    </div>

                    <div
                      className="text-box1"
                      id="why-choose"
                      style={{ scrollMarginTop: "100px" }}
                    >
                      <h4>{t("solutionsPage.whyChooseTitle")}</h4>
                      <p className="text1">{t("solutionsPage.whyChoose1")}</p>
                      <p className="text1">{t("solutionsPage.whyChoose2")}</p>
                      <p className="text1">{t("solutionsPage.whyChoose3")}</p>
                      <ul className="pb10">
                        <li>
                          <div className="icon">
                            <span className="icon-check-mark"></span>
                          </div>
                          <div className="text">
                            <p>{t("solutionsPage.benefit1")}</p>
                          </div>
                        </li>

                        <li>
                          <div className="icon">
                            <span className="icon-check-mark"></span>
                          </div>
                          <div className="text">
                            <p>{t("solutionsPage.benefit2")}</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-check-mark"></span>
                          </div>
                          <div className="text">
                            <p>{t("solutionsPage.benefit3")}</p>
                          </div>
                        </li>
                      </ul>
                      <p className="text1">{t("solutionsPage.whyChoose4")}</p>
                      <p className="text1">{t("solutionsPage.conclusion")}</p>
                    </div>
                  </div>
                </div>
                {/*End Services Details Content */}

                {/*Start Sidebar */}
                <div className="col-xl-4">
                  <div className="sidebar">
                    {/*Start Sidebar Single */}
                    <div className="sidebar__single sidebar__category">
                      {/* <h3 className="sidebar__title">Categories</h3> */}

                      <ul className="sidebar__category-list">
                        <li>
                          <Link className="active" href="#rfid-solutions">
                            {t("solutionsPage.title")}{" "}
                            <span className="icon-left-arrow"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#how-it-works">
                            {t("solutionsPage.howItWorksTitle")}{" "}
                            <span className="icon-left-arrow"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#implementation">
                            {t("solutionsPage.implementationTitle")}{" "}
                            <span className="icon-left-arrow"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#why-choose">
                            {t("solutionsPage.whyChooseTitle")}{" "}
                            <span className="icon-left-arrow"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/*End Sidebar Single */}

                    {/*Start Sidebar Single */}
                    <div className="sidebar__single sidebar__support">
                      <div
                        className="sidebar__support-bg"
                        style={{
                          backgroundImage:
                            "url(assets/img/solution/solution-bg.jpg)",
                        }}
                      ></div>
                      <div className="sidebar__support__inner text-center">
                        <h2>{t("solutionsPage.needAnyService")}</h2>
                        <div className="btn-box">
                          <Link className="thm-btn" href="/contact">
                            <span className="txt">
                              {t("solutionsPage.findSolution")}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/*End Sidebar Single */}

                    {/*Start Sidebar Single */}
                    <div className="sidebar__single sidebar__contact">
                      <div className="sidebar__contact-inner">
                        <div className="icon-box">
                          <span className="icon-phone"></span>
                        </div>

                        <div className="text-box">
                          <p>{t("solutionsPage.callAnytime")}</p>
                          <h4>
                            <Link
                              href={`tel:${phoneNumber}`}
                              aria-label={t("header.callUs")}
                              title={t("header.callUsTitle")}
                            >
                              {phoneDisplay}
                            </Link>
                          </h4>
                          <h4>
                            <Link
                              href={`tel:${phoneNumber2}`}
                              aria-label={t("header.callUs")}
                              title={t("header.callUsTitle")}
                            >
                              {phoneDisplay2}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/*End Sidebar Single */}
                  </div>
                </div>
                {/*End Sidebar */}
              </div>
            </div>
          </section>
          {/*End Services Details */}
        </div>
      </Layout>
    </>
  );
}
