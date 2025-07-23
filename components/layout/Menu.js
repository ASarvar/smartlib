'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next";

export default function Menu() {
  const pathname = usePathname()
  const { t } = useTranslation();
  
  // Helper function to check if a route is active
  const isActive = (path) => {
    return pathname === path;
  }
  
  // Helper function to check if any submenu item is active
  const hasActiveSubmenu = (paths) => {
    return paths.some(path => pathname === path);
  }

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

      {/* <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                        <li><Link href="/services1">Our Services 1</Link></li>
                        <li><Link href="/services2">Our Services 2</Link></li>
                        <li><Link href="/tax-management">Tax Management</Link></li>
                        <li><Link href="/strategy-planning">Strategy & Planning</Link></li>
                        <li><Link href="/program-manager">Program Manager</Link></li>
                        <li><Link href="/investment-policy">Investment Policy</Link></li>
                        <li><Link href="/financial-advices">Financial Advices</Link></li>
                        <li><Link href="/insurance-strategy">Insurance Strategy</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Pages</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Team</Link>
                            <ul>
                                <li><Link href="/team">Team Member</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/pricing-table">Pricing Table</Link></li>
                        <li><Link href="/career">Career</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/404">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/product-details">Product Details</Link></li>
                        <li><Link href="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-2">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li> 
                <li><Link href="/contact">Contact</Link></li>
            </ul> */}
      <ul className="navigation">
        <li className={`menu-item-has-children ${isActive('/') ? 'active' : ''}`}>
          <Link href="/">{t('menu.home')}</Link>
        </li>

        <li className={isActive('/products') ? 'active' : ''}>
          <Link href="/products">{t('menu.products')}</Link>
        </li>
        <li className={isActive('/solutions') ? 'active' : ''}>
          <Link href="/solutions">{t('menu.solutions')}</Link>
        </li>
        <li className={`menu-item-has-children ${hasActiveSubmenu(['/blog', '/blog-sidebar', '/blog-details']) ? 'active' : ''}`}>
          <Link href="#">{t('menu.resources')}</Link>
          <ul className="sub-menu">
            <li>
              <Link href="/blog">{t('menu.news')}</Link>
            </li>
            <li>
              <Link href="/brochures">{t('menu.brochures')}</Link>
            </li>
            <li>
              <Link href="/gallery">{t('menu.gallery')}</Link>
            </li>
          </ul>
        </li>
        <li className={isActive('/about') ? 'active' : ''}>
          <Link href="/about">{t('menu.about')}</Link>
        </li>
        <li className={isActive('/contact') ? 'active' : ''}>
          <Link href="/contact">{t('menu.contact')}</Link>
        </li>
      </ul>
    </>
  );
}
