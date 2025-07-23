"use client";
import Link from "next/link";
import { useState } from "react";
export default function Faq() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

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
      {/*Start Faq One */}
      <section className="faq-one">
        <div className="container clearfix">
          <div className="faq-one__inner">
            <div className="big-title">
              <h2>FAQ</h2>
            </div>
            <ul
              className="accrodion-grp faq-one__accrodion"
              data-grp-name="faq-one-accrodion"
            >
              {/*Start Faq One Single */}
              <li
                className={isActive.key == 1 ? "accrodion active" : "accrodion"}
                onClick={() => handleToggle(1)}
              >
                <div className="accrodion-title">
                  <h3>
                    What is RFID technology and how does it benefit libraries?
                  </h3>
                </div>
                <div
                  className={
                    isActive.key == 1
                      ? "accrodion-content current"
                      : "accrodion-content"
                  }
                >
                  <div className="inner">
                    <p>
                      RFID (Radio Frequency Identification) technology uses
                      electromagnetic fields to automatically identify and track
                      tags attached to books and materials. It enables faster
                      check-in/check-out processes, automated inventory
                      management, enhanced security, and improved patron
                      experience through self-service stations.
                    </p>
                  </div>
                </div>
              </li>
              {/*End Faq One Single */}

              {/*Start Faq One Single */}
              <li
                className={isActive.key == 2 ? "accrodion active" : "accrodion"}
                onClick={() => handleToggle(2)}
              >
                <div className="accrodion-title">
                  <h3>
                    How long does it take to implement RFID in our library?
                  </h3>
                </div>
                <div
                  className={
                    isActive.key == 2
                      ? "accrodion-content current"
                      : "accrodion-content"
                  }
                >
                  <div className="inner">
                    <p>
                      Implementation time varies depending on library size and
                      collection volume. Typically, a small to medium library
                      takes 2-4 weeks, while larger institutions may require 6-8
                      weeks. This includes system setup, staff training, and
                      material tagging. We provide a detailed timeline during
                      consultation.
                    </p>
                  </div>
                </div>
              </li>
              {/*End Faq One Single */}

              {/*Start Faq One Single */}
              <li
                className={isActive.key == 3 ? "accrodion active" : "accrodion"}
                onClick={() => handleToggle(3)}
              >
                <div className="accrodion-title">
                  <h3>
                    What support and training do you provide after installation?
                  </h3>
                </div>
                <div
                  className={
                    isActive.key == 3
                      ? "accrodion-content current"
                      : "accrodion-content"
                  }
                >
                  <div className="inner">
                    <p>
                      We provide comprehensive staff training, detailed user
                      manuals, and ongoing technical support. Our support
                      package includes system maintenance, software updates,
                      troubleshooting assistance, and 24/7 helpdesk service. We
                      also offer refresher training sessions as needed.
                    </p>
                  </div>
                </div>
              </li>
              {/*End Faq One Single */}

              {/*Start Faq One Single */}
              <li
                className={isActive.key == 4 ? "accrodion active" : "accrodion"}
                onClick={() => handleToggle(4)}
              >
                <div className="accrodion-title">
                  <h3>
                    Can RFID systems integrate with existing library management
                    software?
                  </h3>
                </div>
                <div
                  className={
                    isActive.key == 4
                      ? "accrodion-content current"
                      : "accrodion-content"
                  }
                >
                  <div className="inner">
                    <p>
                      Yes, our RFID solutions are designed to integrate
                      seamlessly with most existing library management systems
                      (LMS). As official Bibliotheca partners, we ensure
                      compatibility with popular LMS platforms and provide
                      custom integration services when needed to maintain your
                      current workflows.
                    </p>
                  </div>
                </div>
              </li>
              {/*End Faq One Single */}
            </ul>
          </div>
        </div>
      </section>
      {/*End Faq One */}
    </>
  );
}
