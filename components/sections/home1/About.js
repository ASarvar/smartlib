import Link from "next/link";
import CounterUp from "@/components/elements/CounterUp";
export default function About() {
  return (
    <>
      {/*Start About One */}
      <section className="about-one">
        <div className="shape1 float-bob-y">
          <img src="assets/img/shape/about-v1-shape1.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            {/*Start About One Img */}
            <div
              className="col-xl-5 wow animated fadeInRight"
              data-wow-delay="0.1s"
            >
              <div className="about-one__img">
                <div className="inner">
                  <img src="assets/img/about/about-v1-img1.jpg" alt="" />
                </div>
                <div className="experience-box">
                  <div className="counter-box">
                    <h2 className="count">
                      <CounterUp end={4} />
                    </h2>
                  </div>
                  <div className="text-box">
                    <p>
                      YEARS <br />
                      WORKING <br />
                      EXPERIENCE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*End About One Img */}

            {/*Start About One Content */}
            <div
              className="col-xl-7 wow animated fadeInLeft"
              data-wow-delay="0.1s"
            >
              <div className="about-one__content">
                <div className="sec-title">
                  <div className="sub-title">
                    <h5>About SmartLibrary</h5>
                  </div>
                  <h2>
                    Leading RFID Solutions <br />
                    for Modern Libraries
                  </h2>
                </div>

                <div className="text-box">
                  <p>
                    SmartLibrary is the official partner of Bibliotheca in
                    Uzbekistan, providing cutting-edge RFID technology solutions
                    for libraries, archives, and educational institutions. We
                    specialize in library automation systems that enhance
                    efficiency and improve user experience.
                  </p>
                </div>

                <div className="about-one__content-progress">
                  <div className="about-one__content-progress-single">
                    <div className="title">
                      <h4>RFID Technology</h4>
                    </div>
                    <div className="bar">
                      <div className="bar-inner1 count-bar" data-percent="95%">
                        <div className="count-text">95%</div>
                      </div>
                    </div>
                  </div>

                  <div className="about-one__content-progress-single mb0">
                    <div className="title">
                      <h4>Automation Systems</h4>
                    </div>
                    <div className="bar">
                      <div className="bar-inner2 count-bar" data-percent="90%">
                        <div className="count-text style2">90%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-one__content-bottom">
                  <div className="about-one__content-bottom-author-box">
                    <div className="btn-box">
                      <Link className="thm-btn" href="/about">
                        <span className="txt">Discover More</span>
                      </Link>
                    </div>

                    <div className="author-info">
                      <div className="img-box">
                        <img src="assets/img/about/about-v1-img2.jpg" alt="" />
                      </div>
                      <div className="signature-box">
                        <img src="assets/img/about/signature-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h4>
                      Need RFID solutions for your library? Call Us:{" "}
                      <Link href="tel:+998711234567">+998 71 123 45 67</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/*End About One Content */}
          </div>
        </div>
      </section>
      {/*End About One */}
    </>
  );
}
