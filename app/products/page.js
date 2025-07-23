"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const categories = [
    { id: "all", name: "All Products" },
    { id: "kiosks", name: "Kiosks" },
    { id: "security", name: "Security Gates" },
    { id: "readers", name: "RFID Readers" },
    { id: "returns", name: "Return Systems" },
    { id: "software", name: "Software" },
    { id: "tags", name: "Tags & Labels" },
    { id: "antennas", name: "Antennas" },
    { id: "workstations", name: "Workstations" },
  ];

  // Sample products data
  const products = [
    {
      id: 1,
      name: "RFID Security Gates",
      description:
        "Advanced RFID-enabled security gates for library entrances. Features automatic detection, alarm system, and integration with library management systems.",
      image: "assets/img/shop/shop-page-img1.jpg",
      category: "security",
      features: [
        "99.9% detection rate",
        "Silent alarm",
        "LED indicators",
        "Remote monitoring",
      ],
    },
    {
      id: 2,
      name: "RFID Tags & Labels",
      description:
        "High-quality RFID tags and labels for books, media, and library materials. Durable, tamper-evident, and compatible with all major library systems.",
      image: "assets/img/shop/shop-page-img2.jpg",
      category: "tags",
      features: [
        "ISO 15693 compliant",
        "Tamper-evident",
        "Long lifespan",
        "Compatible with all systems",
      ],
    },
    {
      id: 3,
      name: "Self-Checkout Kiosks",
      description:
        "User-friendly self-service stations enabling patrons to check out books independently. Touchscreen interface with multilingual support.",
      image: "assets/img/shop/shop-page-img3.jpg",
      category: "kiosks",
      features: [
        "Touch screen interface",
        "RFID reader",
        "Receipt printer",
        "Multi-language support",
      ],
    },
    {
      id: 4,
      name: "Handheld RFID Readers",
      description:
        "Portable RFID readers for inventory management and collection maintenance. Lightweight design with long battery life.",
      image: "assets/img/shop/shop-page-img4.jpg",
      category: "readers",
      features: [
        "Fast processing",
        "Ergonomic design",
        "Multi-tag reading",
        "Durable construction",
      ],
    },
    {
      id: 5,
      name: "Staff Workstations",
      description:
        "Complete RFID-enabled workstations for library staff. Includes integrated reader, monitor, and professional software suite.",
      image: "assets/img/shop/shop-page-img5.jpg",
      category: "workstations",
      features: [
        "Integrated RFID reader",
        '21" HD monitor',
        "Professional software",
        "Ergonomic design",
      ],
    },
    {
      id: 6,
      name: "Smart Return Bins",
      description:
        "Automated book return system with RFID verification. Sorts materials automatically and provides instant receipt confirmation.",
      image: "assets/img/shop/shop-page-img6.jpg",
      category: "returns",
      features: [
        "Automated sorting",
        "Secure storage",
        "24/7 operation",
        "Weather resistant",
      ],
    },
    {
      id: 7,
      name: "RFID Antennas",
      description:
        "High-performance RFID antennas for various library applications. Optimized for library environments with adjustable sensitivity.",
      image: "assets/img/shop/shop-page-img7.jpg",
      category: "antennas",
      features: [
        "High performance",
        "Adjustable sensitivity",
        "Library optimized",
        "Easy installation",
      ],
    },
    {
      id: 8,
      name: "Library Management",
      description:
        "Comprehensive library management system with RFID integration. Includes cataloging, circulation, and analytics modules.",
      image: "assets/img/shop/shop-page-img8.jpg",
      category: "software",
      features: [
        "Inventory management",
        "Patron management",
        "Reporting tools",
        "Cloud-based",
      ],
    },
    {
      id: 9,
      name: "RFID Card Readers",
      description:
        "Proximity card readers for patron identification and access control. Compatible with standard library cards and student IDs.",
      image: "assets/img/shop/shop-page-img9.jpg",
      category: "readers",
      features: [
        "Wireless connectivity",
        "Long battery life",
        "Lightweight design",
        "Real-time sync",
      ],
    },
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
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

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
                          <Link href={`/products/${product.category}`}>
                            VIEW DETAILS
                          </Link>
                        </div>
                      </div>

                      <div className="shop-page__single-content">
                        <div className="text-box">
                          <h4>
                            <Link href={`/products/${product.category}`}>
                              {product.name}
                            </Link>
                          </h4>
                          <p>{product.description}</p>
                          <ul className="product-features">
                            {product.features.map((feature, featureIndex) => (
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

                <ul className="styled-pagination text-center clearfix">
                                    
                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;
                    return (
                      <li key={pageNumber} className={currentPage === pageNumber ? 'active' : ''}>
                        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(pageNumber); }}>
                          {pageNumber}
                        </a>
                      </li>
                    );
                  })}
                </ul>
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
