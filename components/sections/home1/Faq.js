"use client";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function Faq() {
  const { t } = useTranslation();
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
              <h2>{t('faq.title')}</h2>
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
                    {t('faq.question1')}
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
                      {t('faq.answer1')}
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
                    {t('faq.question2')}
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
                      {t('faq.answer2')}
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
                    {t('faq.question3')}
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
                      {t('faq.answer3')}
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
                    {t('faq.question4')}
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
                      {t('faq.answer4')}
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
