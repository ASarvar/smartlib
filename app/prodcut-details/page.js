"use client";
import QuantityInput from "@/components/elements/QuantityInput";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import productDetailsData from "@/data/product-details.json";

export default function ProductDetails() {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productId = searchParams.get("id") || "1";
    const productData = productDetailsData[productId];

    if (productData) {
      setProduct(productData);
      setSelectedImage(0);
    }
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Loading...">
        <div className="container">
          <div className="text-center">
            <h2>Loading product details...</h2>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Product Not Found"
      >
        <div className="container">
          <div className="text-center">
            <h2>Product not found</h2>
            <Link href="/products" className="thm-btn">
              <span className="txt">Back to Products</span>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle={product.name}>
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
                        <div className="shop-details__link">
                          <Link
                            className="img-popup"
                            href={product.images[selectedImage]}
                          >
                            <span className="icon-search-interface-symbol"></span>
                          </Link>
                        </div>
                      </div>
                      {product.images.length > 1 && (
                        <div
                          className="image-thumbnails"
                          style={{ marginTop: "15px" }}
                        >
                          {product.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${product.name} ${index + 1}`}
                              onClick={() => setSelectedImage(index)}
                              style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "cover",
                                margin: "0 5px",
                                cursor: "pointer",
                                border:
                                  selectedImage === index
                                    ? "2px solid #007bff"
                                    : "1px solid #ddd",
                              }}
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
                        <p>{product.description}</p>
                      </div>

                      <div className="shop-details__top-content-text2">
                        <h4>Key Features</h4>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                          {product.features.map((feature, index) => (
                            <li key={index} style={{ marginBottom: "5px" }}>
                              ✓ {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="shop-details__top-content-text3">
                        <div className="inner">
                          <div className="product-quantity">
                            <div className="product-quantity-box">
                              <div className="input-box">
                                <QuantityInput />
                              </div>
                            </div>
                          </div>

                          <div className="cart-btn">
                            <button
                              className="thm-btn"
                              type="submit"
                              data-loading-text="Please wait..."
                            >
                              <span className="txt">Add to Cart</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="shop-details__top-content-text4">
                        <p>
                          <span>Category:</span> {product.category}
                        </p>
                        <p>
                          <span>Tags:</span> {product.tags}
                        </p>
                      </div>

                      <div className="shop-details__top-content-text5">
                        <div className="title-box">
                          <p>Share:</p>
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
                <h2>Product Description</h2>
                <p>{product.fullDescription}</p>

                {product.specifications && (
                  <div style={{ marginTop: "30px" }}>
                    <h3>Technical Specifications</h3>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "15px",
                        marginTop: "15px",
                      }}
                    >
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            style={{
                              padding: "10px",
                              border: "1px solid #eee",
                              borderRadius: "5px",
                            }}
                          >
                            <strong>{key}:</strong> {value}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          {/*End Shop Details */}
        </div>
      </Layout>
    </>
  );
}
