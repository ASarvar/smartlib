"use client";
import QuantityInput from "@/components/elements/QuantityInput";
import Layout from "@/components/layout/Layout";
import Preloader from "@/components/elements/Preloader";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";
import ModalVideo from "react-modal-video";

export default function ProductDetails() {
  const { t, i18n } = useTranslation();
  const searchParams = useSearchParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [productDetailsData, setProductDetailsData] = useState({});

  // Load appropriate product data based on language
  useEffect(() => {
    const loadProductData = async () => {
      try {
        let data;
        const currentLang = i18n.language;
        
        console.log('Current language detected:', currentLang); // Debug log
        
        // Handle different language code formats (En, Ru, Uz, en, ru, uz)
        const normalizedLang = currentLang.toLowerCase();
        
        if (normalizedLang === 'ru' || normalizedLang === 'russian') {
          console.log('Loading Russian product data...'); // Debug log
          const module = await import('@/data/product-details-ru.json');
          data = module.default;
        } else if (normalizedLang === 'uz' || normalizedLang === 'uzbek') {
          console.log('Loading Uzbek product data...'); // Debug log
          const module = await import('@/data/product-details-uz.json');
          data = module.default;
        } else {
          // Default to English (handles 'En', 'en', 'English', etc.)
          console.log('Loading English product data...'); // Debug log
          const module = await import('@/data/product-details.json');
          data = module.default;
        }
        
        console.log('Loaded product data:', Object.keys(data).length, 'products'); // Debug log
        setProductDetailsData(data);
      } catch (error) {
        console.error('Error loading product data:', error);
        // Fallback to English data
        const module = await import('@/data/product-details.json');
        setProductDetailsData(module.default);
      }
    };

    loadProductData();
  }, [i18n.language]);

  // Load product based on ID and language data
  useEffect(() => {
    if (Object.keys(productDetailsData).length > 0) {
      const productId = searchParams.get("id") || "1";
      const productData = productDetailsData[productId];

      if (productData) {
        setProduct(productData);
        setSelectedImage(0);
      }
      setLoading(false);
    }
  }, [searchParams, productDetailsData]);

  // Auto-slide effect
  useEffect(() => {
    if (!product || !isAutoSliding || product.images.length <= 1) return;

    const interval = setInterval(() => {
      setSelectedImage((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [product, isAutoSliding]);

  const handleImageSelect = (index) => {
    setSelectedImage(index);
    setIsAutoSliding(false); // Stop auto-slide when user manually selects

    // Resume auto-slide after 5 seconds of no interaction
    setTimeout(() => {
      setIsAutoSliding(true);
    }, 5000);
  };

  if (loading) {
    return <Preloader />;
  }

  if (!product) {
    return (
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle={t("productDetailsPage.productNotFound")}
      >
        <div className="container">
          <div className="text-center">
            <h2>{t("productDetailsPage.productNotFoundMessage")}</h2>
            <Link href="/products" className="thm-btn">
              <span className="txt">{t("productDetailsPage.backToProducts")}</span>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout 
        headerStyle={4} 
        footerStyle={1} 
        breadcrumbTitle={product.name}
        breadcrumbItems={[
          { label: t("menu.products"), href: "/products" },
          { label: product.name }
        ]}
      >
        <div>
          {/*Start Shop Details */}
          <section className="shop-details">
            <div className="container">
              <div className="shop-details__top">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="shop-details__top-img">
                      <div className="inner">
                        <img
                          src={product.images[selectedImage]}
                          alt={product.name}
                        />

                        {product.images.length > 1 && (
                          <>
                            {/* Auto-slide control */}
                            {/* <div className="auto-slide-control">
                              <button
                                onClick={() => setIsAutoSliding(!isAutoSliding)}
                                className="slide-control-btn"
                                title={
                                  isAutoSliding
                                    ? "Pause slideshow"
                                    : "Play slideshow"
                                }
                              >
                                {isAutoSliding ? "⏸️" : "▶️"}
                              </button>
                            </div> */}

                            {/* Slide indicators
                            <div className="slide-indicators">
                              {product.images.map((_, index) => (
                                <div
                                  key={index}
                                  className={`indicator ${
                                    selectedImage === index ? "active" : ""
                                  }`}
                                  onClick={() => handleImageSelect(index)}
                                />
                              ))}
                            </div> */}
                          </>
                        )}
                      </div>
                      {product.images.length > 1 && (
                        <div className="image-thumbnails">
                          {product.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${product.name} ${index + 1}`}
                              onClick={() => handleImageSelect(index)}
                              className={`thumbnail-image ${
                                selectedImage === index ? "active" : ""
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                    <div className="shop-details__top-content">
                      <div className="shop-details__top-content-text1">
                        <h2>{product.name}</h2>
                        <p className="product-description-clamp">
                          {product.description}
                        </p>
                      </div>

                      <div className="shop-details__top-content-text2">
                        <div className="product-features-details">
                          <h4>{t("productDetailsPage.keyFeatures")}</h4>
                          <div className="table-content">
                            <ul>
                              {product.features.map((feature, index) => (
                                <li key={index}>
                                  <div className="icon-box">
                                    <span className="icon-check-mark"></span>
                                  </div>{" "}
                                  <div className="text-box">
                                    <p>{feature}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="shop-details__top-content-text3">
                        <div className="btn-box">
                          <div className="btn-one">
                            <Link className="thm-btn" href="/products">
                              <span className="txt">{t("productDetailsPage.downloadBrochure")}</span>
                            </Link>
                          </div>
                          <div className="btn-two">
                            <Link className="thm-btn" href="/contact">
                              <span className="txt">{t("productDetailsPage.contactUs")}</span>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="shop-details__top-content-text4">
                        <p>
                          <span>{t("productDetailsPage.category")}:</span> {product.category}
                        </p>
                        <p>
                          <span>{t("productDetailsPage.tags")}:</span> {product.tags}
                        </p>
                      </div>

                      <div className="shop-details__top-content-text5">
                        <div className="title-box">
                          <p>{t("productDetailsPage.share")}:</p>
                        </div>
                        <div className="social-links">
                          <ul>
                            <li>
                              <Link href="#">
                                <span className="icon-telegram"></span>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <span className="icon-instagram"></span>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <span className="icon-facebook"></span>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <span className="icon-twitter"></span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shop-details__description">
                <h2>{t("productDetailsPage.productDescription")}</h2>
                <p>{product.fullDescription}</p>

                {product.specifications && (
                  <div className="specifications-section">
                    <h3>{t("productDetailsPage.technicalSpecifications")}</h3>
                    <div className="specifications-grid">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div key={key} className="specification-item">
                            <strong>{key}:</strong> {value}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Product Video Section */}
                <div className="product-video-section">
                  <div className="video-one__inner text-center">
                    <div
                      className="video-one__bg"
                      style={{
                        backgroundImage:
                          `url(https://img.youtube.com/vi/${product.videoId}/maxresdefault.jpg)`,
                      }}
                    ></div>
                    <div className="title-box">
                      <h2>
                        {i18n.language.toLowerCase() === 'ru' 
                          ? `Увидеть ${product.name} в действии`
                          : i18n.language.toLowerCase() === 'uz'
                          ? `${product.name} ni amalda ko'ring`
                          : `See ${product.name} in Action`
                        }
                      </h2>
                    </div>
                    <div className="video-one__video-btn">
                      <a
                        onClick={() => setVideoOpen(true)}
                        className="video-one__icon video-popup"
                        style={{ cursor: "pointer" }}
                      >
                        <span className="icon-play-button-1"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End Shop Details */}
        </div>
      </Layout>

      {/* Modal Video */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isVideoOpen}
        videoId={product.videoId}
        onClose={() => setVideoOpen(false)}
      />
    </>
  );
}
