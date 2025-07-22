import Link from "next/link"

export default function News() {
    return (
        <>
            {/*Start Blog One */}
            <section className="blog-one">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h5>SMARTLIBRARY INSIGHTS</h5>
                        </div>
                        <h2>Latest RFID Technology Updates</h2>
                    </div>

                    <div className="row">
                        {/*Start Blog One Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <div className="inner">
                                        <img src="assets/img/blog/blog-v1-img1.jpg" alt=""/>
                                        <div className="overlay-icon">
                                            <Link href="#"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-one__single-content">
                                    <ul className="meta-info">
                                        <li>
                                            <p><Link href="#">RFID Technology</Link></p>
                                        </li>
                                        <li>
                                            <p>15 July, 2025</p>
                                        </li>
                                    </ul>
                                    <h2><Link href="/blog-details">How RFID Technology is <br/>
                                            Revolutionizing Library Management? </Link></h2>
                                    <div className="btn-box">
                                        <Link href="/blog-details">READ MORE <span className="icon-left-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Blog One Single */}

                        {/*Start Blog One Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <div className="inner">
                                        <img src="assets/img/blog/blog-v1-img2.jpg" alt=""/>
                                        <div className="overlay-icon">
                                            <Link href="#"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-one__single-content">
                                    <ul className="meta-info">
                                        <li>
                                            <p><Link href="#">Library Solutions</Link></p>
                                        </li>
                                        <li>
                                            <p>10 July, 2025</p>
                                        </li>
                                    </ul>
                                    <h2><Link href="/blog-details">Smart Libraries: The Future of <br/>
                                            Digital Book Management</Link></h2>
                                    <div className="btn-box">
                                        <Link href="/blog-details">READ MORE <span className="icon-left-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Blog One Single */}

                        {/*Start Blog One Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <div className="inner">
                                        <img src="assets/img/blog/blog-v1-img3.jpg" alt=""/>
                                        <div className="overlay-icon">
                                            <Link href="#"><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-one__single-content">
                                    <ul className="meta-info">
                                        <li>
                                            <p><Link href="#">Innovation</Link></p>
                                        </li>
                                        <li>
                                            <p>05 July, 2025</p>
                                        </li>
                                    </ul>
                                    <h2><Link href="/blog-details">Bibliotheca Partnership: Trusted <br/>
                                            Quality & Reliable RFID Solutions </Link></h2>
                                    <div className="btn-box">
                                        <Link href="/blog-details">READ MORE <span className="icon-left-arrow"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Blog One Single */}
                    </div>
                </div>
            </section>
            {/*End Blog One  */}
        </>
    )
}
