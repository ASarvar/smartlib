"use client";
import Link from "next/link";
import { useState } from "react";
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
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

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
