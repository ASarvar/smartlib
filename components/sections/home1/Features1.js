import Link from "next/link"


export default function Features1() {
    return (
        <>
        
        {/*Start Feauture Three */}
        <section className="feauture-three">
            <div className="shape1 float-bob-y"><img src="assets/img/shape/feauture-v3-shape1.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/*Start Feauture Three Img */}
                    <div className="col-xl-5 wow animated fadeInLeft" data-wow-delay="0.1s">
                        <div className="feauture-three__img">
                            <div className="inner clearfix">
                                <img src="assets/img/resource/feauture-v3-img1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    {/*End Feauture Three Img */}

                    {/*Start Feauture Three Content */}
                    <div className="col-xl-7">
                        <div className="feauture-three__content">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h5>EXPLORE OUR SOLUTIONS</h5>
                                </div>
                                <h2>We provide the best <br/>
                                    RFID library management systems</h2>
                            </div>

                            <div className="text-box">
                                <p>SmartLibrary features cutting-edge RFID technology solutions. Our platform is expertly 
                                    designed for modern libraries and information centers. With SmartLibrary, we make your 
                                    library operations more efficient and user-friendly.</p>
                            </div>
                            <div className="btn-box">
                                <Link className="thm-btn" href="/services">
                                    <span className="txt">Discover More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/*End Feauture Three Content */}
                </div>
            </div>
        </section>
        {/*End Feauture Three */}
        </>
    )
}
