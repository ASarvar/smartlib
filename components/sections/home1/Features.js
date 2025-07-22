import Link from "next/link"


export default function Features() {
    return (
        <>
        
        {/*Start Feauture One*/}
        <section className="feauture-one">
            <div className="container">
                <div className="row">
                    {/*Start Feauture One Single */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single">
                            <div className="feauture-one__single-text">
                                <p>EXPLORE FEATURE</p>
                                <h2><Link href="/catalog">RFID Technology</Link></h2>
                            </div>

                            <div className="feauture-one__single-bottom">
                                <div className="btn-box">
                                    <Link href="/catalog"><span className="icon-plus"></span></Link>
                                </div>

                                <div className="icon-box">
                                    <span className="icon-targeted"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Start Feauture One Single */}

                    {/*Start Feauture One Single */}
                    <div className="col-xl-4 col-lg-4  wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single">
                            <div className="feauture-one__single-text">
                                <p>EXPLORE FEATURE</p>
                                <h2><Link href="/solutions">Automation Systems</Link></h2>
                            </div>

                            <div className="feauture-one__single-bottom">
                                <div className="btn-box">
                                    <Link href="/solutions"><span className="icon-plus"></span></Link>
                                </div>

                                <div className="icon-box">
                                    <span className="icon-analytics"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Start Feauture One Single */}

                    {/*Start Feauture One Single */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="feauture-one__single">
                            <div className="feauture-one__single-text">
                                <p>EXPLORE FEATURE</p>
                                <h2><Link href="/service">Services</Link></h2>
                            </div>

                            <div className="feauture-one__single-bottom">
                                <div className="btn-box">
                                    <Link href="/service"><span className="icon-plus"></span></Link>
                                </div>

                                <div className="icon-box">
                                    <span className="icon-solution"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Start Feauture One Single */}
                </div>
            </div>
        </section>
        {/*End Feauture One */}
        </>
    )
}
