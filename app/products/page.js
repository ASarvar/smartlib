"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import productDetailsData from "@/data/product-details.json";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Convert JSON object to array for easier handling
  const products = Object.values(productDetailsData).map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    image: product.images[0], // Use first image as main image
    category: product.category,
    features: product.features || [],
  }));

  // Helper function to truncate text to specified number of lines
  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  // Generate categories dynamically from product data
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  const categories = [
    { id: "all", name: "All Products" },
    ...uniqueCategories.map((category) => ({ id: category, name: category })),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Reset to page 1 when filters change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Products">
        <div>
          {/*Start Shop Page */}
          <section className="shop-page">
            <div className="container">
              <div className="shop-page__top">
                <div className="shop-page__top-right">
                  <div className="category-filters">
                    <div className="filter-buttons">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          className={`filter-btn ${
                            selectedCategory === category.id ? "active" : ""
                          }`}
                          onClick={() => handleCategoryChange(category.id)}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {currentProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay={`${index * 0.1}s`}
                  >
                    <div className="shop-page__single">
                      <div className="shop-page__single-img">
                        <img src={product.image} alt={product.name} />
                        <div className="btn-box">
                          <Link href={`/prodcut-details?id=${product.id}`}>
                            VIEW DETAILS
                          </Link>
                        </div>
                      </div>

                      <div className="shop-page__single-content">
                        <div className="text-box">
                          <h4>
                            <Link href={`/prodcut-details?id=${product.id}`}>
                              {product.name}
                            </Link>
                          </h4>
                          <p style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            lineHeight: '1.4em',
                            maxHeight: '5.6em'
                          }}>
                            {product.description}
                          </p>
                          <ul className="product-features">
                            {product.features.slice(0, 5).map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredProducts.length === 0 && (
                  <div className="col-12">
                    <div className="no-products">
                      <h3>No products found</h3>
                      <p>
                        Try adjusting your search criteria or browse all
                        categories.
                      </p>
                    </div>
                  </div>
                )}

                {totalPages > 1 && (
                  <ul className="styled-pagination text-center clearfix">
                    {Array.from({ length: totalPages }, (_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <li
                          key={pageNumber}
                          className={currentPage === pageNumber ? "active" : ""}
                        >
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(pageNumber);
                            }}
                          >
                            {pageNumber}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
                {/* Custom Quote Section */}
                <div className="col-xl-12">
                  <div className="custom-quote-section">
                    <div className="custom-quote-inner">
                      <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                          <div className="custom-quote-content">
                            <h3>Need a Custom RFID Solution?</h3>
                            <p>
                              Get a personalized quote tailored to your
                              library's specific requirements
                            </p>
                            <Link href="/contact" className="thm-btn">
                              <span className="txt">Get In Touch</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End Shop Page */}
        </div>
      </Layout>
    </>
  );
}
