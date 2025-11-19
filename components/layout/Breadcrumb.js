'use client'
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbItems, backgroundImage }) {
    const { t, i18n } = useTranslation();
    const bgImage = backgroundImage || 'assets/img/background/page-header-bg.jpg';
    
    return (
        <>
            
            {/*Start Page Header */}
            <section className="page-header">
                <div className="page-header__bg" style={{backgroundImage: `url(${bgImage})`}}>
                </div>

                <div className="container">
                    <div className="page-header__inner text-center">
                        <ul className="thm-breadcrumb">
                            <li><Link href="/">{t("menu.home")}</Link></li>
                            {breadcrumbItems && breadcrumbItems.map((item, index) => (
                                <li key={index} className={index === breadcrumbItems.length - 1 ? "active" : ""}>
                                    {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
                                </li>
                            ))}
                            {!breadcrumbItems && <li className="active">{breadcrumbTitle}</li>}
                        </ul>
                        <h2>{breadcrumbTitle}</h2>
                    </div>
                </div>
            </section>
            {/*End Page Header */}

        </>
    )
}
