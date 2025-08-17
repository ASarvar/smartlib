"use client";

import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [emailVisible, setEmailVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("kazakhstan");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Anti-spam email obfuscation - Kazakhstan (Default)
  const emailUser = "info";
  const emailDomain = "smartlibrary.asia";
  const email = `${emailUser}@${emailDomain}`;

  // Kazakhstan contact info (Default)
  const kazakhstanEmailUser = "info";
  const kazakhstanEmailDomain = "smartlibrary.asia";
  const kazakhstanEmail = `${kazakhstanEmailUser}@${kazakhstanEmailDomain}`;

  // Phone numbers with proper formatting - Kazakhstan (Default)
  // const uzbekistanPhoneNumber = "+998712007009";
  // const uzbekistanPhoneDisplay = "+998 71 200 70 09";
  const kazakhstanPhoneNumber = "+77074044744";
  const kazakhstanPhoneDisplay = "+7 707 404 47 44";

  useEffect(() => {
    setEmailVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Basic XSS prevention
    const sanitizedValue = value.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ""
    );
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error(t("contact.fillAllFields"));
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t("contact.validEmail"));
      setIsSubmitting(false);
      return;
    }

    try {
      // Show loading toast
      const loadingToast = toast.loading(t("contact.sending"));

      // Send form data to API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
          selectedCountry: activeTab,
          language: i18n.language,
        }),
      });

      const result = await response.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (result.success) {
        toast.success(result.message || t("contact.messageSuccess"), {
          duration: 5000,
          icon: "✅",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(result.message || t("contact.messageError"), {
          duration: 5000,
          icon: "❌",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(t("contact.messageError"), {
        duration: 5000,
        icon: "❌",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle={t("contact.contactUs")}
      >
        <div>
          {/*Start Contact Tabs */}
          {/* <section className="contact-tabs-section">
            <div className="container">
              <div className="contact-tabs">
                <ul className="tab-nav">
                  {/* Uzbekistan tab - temporarily hidden */}
          {/* <li
                    className={activeTab === "uzbekistan" ? "active" : ""}
                    onClick={() => setActiveTab("uzbekistan")}
                  >
                    <a href="#uzbekistan" onClick={(e) => e.preventDefault()}>
                      {t("contact.uzbekistan")}
                    </a>
                  </li> 
                    className={activeTab === "kazakhstan" ? "active" : ""}
                    onClick={() => setActiveTab("kazakhstan")}
                  >
                    <a href="#kazakhstan" onClick={(e) => e.preventDefault()}>
                      {t("contact.kazakhstan")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section> */}
          {/*End Contact Tabs */}

          {/*Start Contact Page */}
          <section className="contact-page">
            <div className="contact-page__top">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-page__top-content">
                      <div className="contact-page__top-content-top">
                        <h2>{t("contact.getInTouch")}</h2>
                        <p>
                          {/* Show Kazakhstan description by default */}
                          {t("contact.kazakhstanDescription")}
                        </p>
                      </div>

                      <div className="contact-page__top-content-bottom">
                        <h2>{t("contact.contactInfo")}</h2>
                        <ul>
                          <li>
                            <div className="inner">
                              <div className="icon-box">
                                <span className="icon-pin"></span>
                              </div>

                              <div className="content-box">
                                <h4>{t("contact.address")}</h4>
                                <p>
                                  {/* Show Kazakhstan address by default */}
                                  {t("contact.kazakhstanAddressDetails")}
                                </p>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="inner">
                              <div className="icon-box">
                                <span className="icon-phone"></span>
                              </div>

                              <div className="content-box">
                                <h4>{t("contact.phone")}</h4>
                                <p>
                                  <a
                                    href={`tel:${kazakhstanPhoneNumber}`}
                                    aria-label={t("contact.callUs")}
                                    title={t("contact.callUsTitle")}
                                  >
                                    {/* Show Kazakhstan phone by default */}
                                    {kazakhstanPhoneDisplay}
                                  </a>
                                </p>
                              </div>
                            </div>
                          </li>

                          <li>
                            <div className="inner">
                              <div className="icon-box">
                                <span className="icon-envelope"></span>
                              </div>

                              <div className="content-box">
                                <h4>{t("contact.email")}</h4>
                                <p>
                                  {emailVisible ? (
                                    <a
                                      href={`mailto:${
                                        activeTab === "uzbekistan"
                                          ? email
                                          : kazakhstanEmail
                                      }`}
                                      aria-label={t("contact.emailUs")}
                                      title={t("contact.emailUsTitle")}
                                      rel="noopener noreferrer"
                                    >
                                      {activeTab === "uzbekistan"
                                        ? email
                                        : kazakhstanEmail}
                                    </a>
                                  ) : (
                                    <span>{t("contact.loading")}</span>
                                  )}
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <div className="contact-page__google-map">
                      <iframe
                        src={
                          activeTab === "uzbekistan"
                            ? "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d516.7556805859915!2d69.27404415543796!3d41.295972351165425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1755243452437!5m2!1suz!2s"
                            : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.5348927968967!2d76.94557587640016!3d43.23888987113481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883692bfe0f4d4d%3A0x20203c91e2b52b96!2sAlmaty%2C%20Kazakhstan!5e0!3m2!1sen!2s!4v1692345678901!5m2!1sen!2s"
                        }
                        className="contact-page-google-map__one"
                        title={
                          activeTab === "uzbekistan"
                            ? t("contact.mapTitle")
                            : t("contact.kazakhstanMapTitle")
                        }
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-page__bottom">
              {/*Start Contact Two */}
              <div className="contact-two">
                <div className="container">
                  <div className="contact-two__inner">
                    <div className="title-box">
                      <h2>{t("contact.discussProject")}</h2>
                      <p>{t("contact.shareRequirements")}</p>
                    </div>
                    <div className="contact-two__inner-box">
                      <form
                        onSubmit={handleSubmit}
                        className="contact-page__form contact-form-validated"
                        noValidate
                      >
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-page__input-box">
                              <input
                                type="text"
                                placeholder={t(
                                  "contact.libraryNamePlaceholder"
                                )}
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                aria-label={t("contact.libraryNameLabel")}
                                maxLength={100}
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-page__input-box">
                              <input
                                type="email"
                                placeholder={t("contact.emailPlaceholder")}
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                aria-label={t("contact.emailLabel")}
                                maxLength={100}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-page__input-box">
                              <input
                                type="text"
                                placeholder={t("contact.phonePlaceholder")}
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                aria-label={t("contact.phoneLabel")}
                                maxLength={20}
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-page__input-box">
                              <input
                                type="text"
                                placeholder={t(
                                  "contact.rfidRequirementsPlaceholder"
                                )}
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                aria-label={t("contact.rfidRequirementsLabel")}
                                maxLength={100}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="contact-page__input-box">
                              <textarea
                                name="message"
                                placeholder={t("contact.messagePlaceholder")}
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                aria-label={t("contact.messageLabel")}
                                rows="6"
                                maxLength={1000}
                              ></textarea>
                            </div>
                            <div className="contact-page__btn">
                              <button
                                className="thm-btn"
                                type="submit"
                                disabled={isSubmitting}
                                aria-label={t("contact.sendMessageLabel")}
                              >
                                <span className="txt">
                                  {isSubmitting
                                    ? t("contact.sending")
                                    : t("contact.sendMessage")}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Contact Two */}
            </div>
          </section>
          {/*End Contact Page */}
        </div>
      </Layout>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#333",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            padding: "12px 16px",
            maxWidth: "400px",
          },
          success: {
            style: {
              border: "1px solid #10B981",
              color: "#059669",
            },
          },
          error: {
            style: {
              border: "1px solid #EF4444",
              color: "#DC2626",
            },
          },
          loading: {
            style: {
              border: "1px solid #3B82F6",
              color: "#1D4ED8",
            },
          },
        }}
      />
    </>
  );
}
