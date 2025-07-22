'use client'
import Link from "next/link"
import { useState } from "react"


export default function Pricing() {
    
    return (
        <>
            {/*Start Service One */}
        <section className="service-one">
            <div className="service-one__shape2" style={{backgroundImage: 'url(assets/img/shape/service-v1-shape2.png)'}}>
            </div>
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title">
                        <h5>OUR SERVICES</h5>
                    </div>
                    <h2>Smart RFID Solutions & Services</h2>
                </div>
                <div className="row">
                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                            <div className="service-one__single-inner">
                                <div className="count-text">01</div>
                                <div className="icon-box">
                                    <span className="icon-targeted"></span>
                                </div>
                                <div className="content-box">
                                    <h2><Link href="/catalog">RFID Technology</Link></h2>
                                    <p>RFID solutions for library management including self-service stations, security gates, and automated inventory systems.</p>
                                    <div className="btn-box">
                                        <Link href="/catalog">EXPLORE PRODUCTS</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                            <div className="service-one__single-inner">
                                <div className="count-text">02</div>
                                <div className="icon-box">
                                    <span className="icon-analytics"></span>
                                </div>
                                <div className="content-box">
                                    <h2><Link href="/solutions">Automation Systems</Link></h2>
                                    <p>Complete library automation solutions including integrated library systems, digital catalogs, and workflow optimization tools.</p>
                                    <div className="btn-box">
                                        <Link href="/solutions">EXPLORE SOLUTIONS</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.1s">
                        <div className="service-one__single">
                            <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                            <div className="service-one__single-inner">
                                <div className="count-text">03</div>
                                <div className="icon-box">
                                    <span className="icon-solution"></span>
                                </div>
                                <div className="content-box">
                                    <h2><Link href="/service">Installation & Support</Link></h2>
                                    <p>Professional installation, training, and ongoing technical support for all library technology solutions and equipment systems.</p>
                                    <div className="btn-box">
                                        <Link href="/service">EXPLORE SERVICES</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}

                    {/*Start Service One Single */}
                    <div className="col-xl-6 col-lg-6 wow animated fadeInUp" data-wow-delay="0.2s">
                        <div className="service-one__single">
                            <div className="shape1"><img src="assets/img/shape/service-v1-shape1.png" alt=""/></div>
                            <div className="service-one__single-inner">
                                <div className="count-text">04</div>
                                <div className="icon-box">
                                    <span className="icon-light-bulb"></span>
                                </div>
                                <div className="content-box">
                                    <h2><Link href="/contact">Consulting & Training</Link></h2>
                                    <p>Expert consultation for library modernization projects and comprehensive staff training programs for optimal system usage.</p>
                                    <div className="btn-box">
                                        <Link href="/contact">GET CONSULTATION</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Service One Single */}
                </div>
            </div>
        </section>
        {/*End Service One */}
        </>
    )
}
