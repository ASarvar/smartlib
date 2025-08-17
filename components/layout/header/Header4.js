import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import LanguageSelector from "@/components/elements/LanguageSelector";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Header4({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
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
      {/* <header className="main-header main-header-one style4"> */}

      <header
        className={`main-header main-header-one style4 ${scroll ? "" : ""}`}
      >
        <div className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
          {/* header-lower */}
          <div className="main-header-four__top">
            <div className="container">
              <div className="main-header-four__top-inner">
                <div className="header-contact-box">
                  <ul>
                    <li>
                      <Link
                        href={`tel:${phoneNumber}`}
                        aria-label={t("header.callUs")}
                        title={t("header.callUsTitle")}
                      >
                        {phoneDisplay}
                      </Link>
                    </li>
                    <li>
                      {emailVisible ? (
                        <Link
                          href={`mailto:${email}`}
                          aria-label={t("header.emailUs")}
                          title={t("header.emailUsTitle")}
                          rel="noopener noreferrer"
                        >
                          {email}
                        </Link>
                      ) : (
                        <span>{t("header.loading")}</span>
                      )}
                    </li>
                  </ul>
                </div>

                {/* Site Under Construction Banner */}
                <div className="construction-banner">
                  <span className="construction-text">
                    {t("header.constructionBanner")}
                  </span>
                </div>

                <div className="header-social-links">
                  <ul>
                    <li>
                      <Link
                        href="#"
                        aria-label={t("header.telegramAria")}
                        title={t("header.telegramTitle")}
                        rel="noopener noreferrer"
                      >
                        <span className="icon-telegram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        aria-label={t("header.instagramAria")}
                        title={t("header.instagramTitle")}
                        rel="noopener noreferrer"
                      >
                        <span className="icon-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        aria-label={t("header.facebookAria")}
                        title={t("header.facebookTitle")}
                        rel="noopener noreferrer"
                      >
                        <span className="icon-facebook"></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        aria-label={t("header.youtubeAria")}
                        title={t("header.youtubeTitle")}
                        rel="noopener noreferrer"
                      >
                        <span className="icon-youtube"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="main-header-four__bottom">
            <div className="container">
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
                            {" "}
                            <img
                              src="assets/img/logo/smartlibrary-logo.svg"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>

                      <div className="main-header-one__middle">
                        <div className="navbar-wrap main-menu">
                          <Menu />
                        </div>
                      </div>

                      <div className="main-header-one__right">
                        <LanguageSelector />
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        handleMobileMenu={handleMobileMenu}
        isSidebar={isSidebar}
        handleSidebar={handleSidebar}
      />
    </>
  );
}
