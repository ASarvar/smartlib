import Link from "next/link"


export default function Projects() {
    return (
        <>
            
            {/*Start Project One */}
            <section className="project-one">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h5>OUR RECENT PROJECTS</h5>
                        </div>
                        <h2>Latest Library Implementations <br/>
                            Check Our Success Stories</h2>
                    </div>
                    <div className="row">
                        {/*Start Project One Single */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="project-one__single">
                                <div className="project-one__single-img">
                                    <img src="assets/img/project/project-v1-img1.jpg" alt=""/>
                                    <div className="overlay-btn">
                                        <Link className="img-popup" href="assets/img/project/project-v1-img1.jpg"><span
                                                className="icon-search-interface-symbol"></span></Link>
                                        <Link href="/project-details"><span className="icon-link"></span></Link>
                                    </div>

                                    <div className="overlay-text">
                                        <p>Tashkent</p>
                                        <h2><Link href="/project-details">National University Library</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project One Single */}

                        {/*Start Project One Single */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                            <div className="project-one__single">
                                <div className="project-one__single-img">
                                    <img src="assets/img/project/project-v1-img2.jpg" alt=""/>
                                    <div className="overlay-btn">
                                        <Link className="img-popup" href="assets/img/project/project-v1-img2.jpg"><span
                                                className="icon-search-interface-symbol"></span></Link>
                                        <Link href="/project-details"><span className="icon-link"></span></Link>
                                    </div>

                                    <div className="overlay-text">
                                        <p>Samarkand</p>
                                        <h2><Link href="/project-details">Regional Public Library</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project One Single */}

                        {/*Start Project One Single */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="project-one__single">
                                <div className="project-one__single-img">
                                    <img src="assets/img/project/project-v1-img3.jpg" alt=""/>
                                    <div className="overlay-btn">
                                        <Link className="img-popup" href="assets/img/project/project-v1-img3.jpg"><span
                                                className="icon-search-interface-symbol"></span></Link>
                                        <Link href="/project-details"><span className="icon-link"></span></Link>
                                    </div>

                                    <div className="overlay-text">
                                        <p>Bukhara</p>
                                        <h2><Link href="/project-details">Educational Institute Library</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project One Single */}

                        {/*Start Project One Single */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInDown" data-wow-delay=".3s">
                            <div className="project-one__single">
                                <div className="project-one__single-img">
                                    <img src="assets/img/project/project-v1-img4.jpg" alt=""/>
                                    <div className="overlay-btn">
                                        <Link className="img-popup" href="assets/img/project/project-v1-img4.jpg"><span
                                                className="icon-search-interface-symbol"></span></Link>
                                        <Link href="/project-details"><span className="icon-link"></span></Link>
                                    </div>

                                    <div className="overlay-text">
                                        <p>Nukus</p>
                                        <h2><Link href="/project-details">Digital Archive Center</Link></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Project One Single */}
                    </div>
                </div>
            </section>
            {/*End Project One */}

        </>
    )
}
