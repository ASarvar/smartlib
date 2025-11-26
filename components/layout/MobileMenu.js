"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../elements/LanguageSelector";

export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [emailVisible, setEmailVisible] = useState(false);
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  // Obfuscated email parts for anti-spam
  const emailUser = "info";
  const emailDomain = "smartlibrary.asia";
  const email = `${emailUser}@${emailDomain}`;

  // Phone numbers with proper formatting
  const phoneNumber = "+77074044744";
  const phoneDisplay = "+7 707 404 47 44";
  const phoneNumber2 = "+998777510017";
  const phoneDisplay2 = "+998 77 751 00 17";

  useEffect(() => {
    setEmailVisible(true);
  }, []);

  // Helper function to check if a route is active
  const isActivePath = (path) => {
    return pathname === path;
  };

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
      {/*Mobile Menu */}
      <div className="mobile-menu">
        <nav className="menu-box">
          <div className="close-btn" onClick={handleMobileMenu}>
            <i className="fas fa-times"></i>
          </div>
          <div className="nav-logo">
            <Link href="/">
              <img src="assets/img/logo/smartlibrary-logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation clearfix">
              <li className={`${isActivePath("/") ? "active" : ""}`}>
                <Link href="/" onClick={handleMobileMenu}>
                  {t("menu.home")}
                </Link>
              </li>
              <li className={`${isActivePath("/products") ? "active" : ""}`}>
                <Link href="/products" onClick={handleMobileMenu}>
                  {t("menu.products")}
                </Link>
              </li>
              <li className={`${isActivePath("/solutions") ? "active" : ""}`}>
                <Link href="/solutions" onClick={handleMobileMenu}>
                  {t("menu.solutions")}
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="#" onClick={() => handleToggle(2)}>
                  {t("menu.resources")}
                </Link>
                <ul
                  style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
                >
                  <li>
                    <Link href="/blog" onClick={handleMobileMenu}>
                      {t("menu.news")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/brochures" onClick={handleMobileMenu}>
                      {t("menu.brochures")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery" onClick={handleMobileMenu}>
                      {t("menu.gallery")}
                    </Link>
                  </li>
                </ul>
                <div
                  className={
                    isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                  }
                  onClick={() => handleToggle(2)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>
              <li className={`${isActivePath("/about") ? "active" : ""}`}>
                <Link href="/about" onClick={handleMobileMenu}>
                  {t("menu.about")}
                </Link>
              </li>
              <li className={`${isActivePath("/contact") ? "active" : ""}`}>
                <Link href="/contact" onClick={handleMobileMenu}>
                  {t("menu.contact")}
                </Link>
              </li>
            </ul>
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
          </div>
          {/* <div className="contact-info">
            <div className="icon-box">
              <span className="icon-call"></span>
            </div>
            <p>
              <Link href="tel:123456789">(629) 555-0129</Link>
            </p>
          </div> */}
          <div className="mobile-language-selector">
            <LanguageSelector />
          </div>

          {/* Mobile Construction Banner */}
          <div className="mobile-construction-banner">
            <div className="construction-banner">
              <span className="construction-text">
                {t("header.constructionBanner")}
              </span>
            </div>
          </div>

          {/* Mobile Contact Info */}
          <div className="mobile-contact-info">
            <div className="header-contact-box">
              <ul>
                <li>
                  <Link
                    href={`tel:${phoneNumber}`}
                    aria-label={t("header.callUs")}
                    title={t("header.callUsTitle")}
                  >
                    <span className="icon-phone"></span> {phoneDisplay}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`tel:${phoneNumber2}`}
                    aria-label={t("header.callUs")}
                    title={t("header.callUsTitle")}
                  >
                    <span className="icon-phone"></span> {phoneDisplay2}
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
                      <span className="icon-envelope"></span> {email}
                    </Link>
                  ) : (
                    <span>{t("header.loading")}</span>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Social Links */}
          <div className="mobile-social-links">
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

          {/* <div className="social-links">
            <ul className="clearfix list-wrap">
              <li>
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div> */}
        </nav>
      </div>
      <div className="menu-backdrop" onClick={handleMobileMenu}></div>
      {/*End Mobile Menu */}
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
