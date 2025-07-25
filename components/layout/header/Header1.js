import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  return (
    <>
      <header className={`main-header main-header-one ${scroll ? "" : ""}`}>
        <div className={`menu-area ${scroll ? "sticky-menu" : ""}`}>
          {/* header-lower */}
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

                    <div className="main-header-one__middle">
                      <div className="navbar-wrap main-menu">
                        <Menu />
                      </div>
                    </div>

                    <div className="main-header-one__right">
                      <div className="btn-box">
                        <Link className="thm-btn" href="/contact">
                          <span className="txt">Get Started</span>
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
