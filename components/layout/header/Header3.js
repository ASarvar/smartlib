"use client";
import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import LanguageSelector from "@/components/elements/LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Header3({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  const { t } = useTranslation();

  return (
    <>
      {/* <header className="main-header header-style-three"> */}

      <header
        className={`main-header main-header-one style2 style3 ${
          scroll ? "" : ""
        }`}
      >
        <div className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
          {/* header-lower */}
          <div className="main-header-four__top">
            <div className="container">
              <div className="main-header-four__top-inner">
                {/* Site Under Construction Banner */}
                <div className="construction-banner">
                  <span className="construction-text">
                    {t("header.constructionBanner")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="auto-container">
            <div className="menu-area__inner">
              <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="main-header-one__inner">
                    <div className="main-header-one__left">
                      <div className="logo-box">
                        <Link href="/">
                          <img
                            src="assets/img/logo/smartlibrary-logo.svg"
                            alt="SmartLibrary"
                          />
                        </Link>
                      </div>
                    </div>

                    <div className="main-header-three__middle">
                      <div className="navbar-wrap main-menu">
                        <Menu />
                      </div>
                    </div>

                    <div className="main-header-one__right">
                      <LanguageSelector />

                      <div className="btn-box">
                        <Link className="thm-btn" href="/contact">
                          <span className="txt">{t("menu.contact")}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu
          handleMobileMenu={handleMobileMenu}
          isSidebar={isSidebar}
          handleSidebar={handleSidebar}
        />
      </header>
    </>
  );
}
