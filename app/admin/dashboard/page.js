"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("adminToken");
    if (!saved) {
      router.push("/admin/login");
    } else {
      setToken(saved);
    }
  }, [router]);

  const fetchProducts = useCallback(async (adminToken) => {
    setLoading(true);
    const res = await fetch("/api/admin/products", {
      headers: { "x-admin-token": adminToken },
    });
    if (res.status === 401) {
      sessionStorage.removeItem("adminToken");
      router.push("/admin/login");
      return;
    }
    const data = await res.json();
    setProducts(Object.values(data));
    setLoading(false);
  }, [router]);

  useEffect(() => {
    if (token) fetchProducts(token);
  }, [token, fetchProducts]);

  const handleDelete = async (id) => {
    if (!confirm(`Delete product #${id}? This will remove it from all language files.`)) return;
    setDeleting(id);
    const res = await fetch(`/api/admin/products/${id}`, {
      method: "DELETE",
      headers: { "x-admin-token": token },
    });
    if (res.ok) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
    setDeleting(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={s.page}>
      {/* Sidebar */}
      <aside style={s.sidebar}>
        <div style={s.sidebarLogo}>
          <span style={s.logoText}>SmartLib</span>
          <span style={s.logoSub}>Admin Panel</span>
        </div>
        <nav style={s.nav}>
          <a style={{ ...s.navItem, ...s.navActive }}>📦 Products</a>
          <Link href="/products" target="_blank" style={s.navItem}>🏪 View Store</Link>
          <button onClick={handleLogout} style={s.navLogout}>🚪 Logout</button>
        </nav>
      </aside>

      {/* Main */}
      <main style={s.main}>
        <div style={s.topbar}>
          <div>
            <h1 style={s.pageTitle}>Products</h1>
            <p style={s.pageSubtitle}>{products.length} total products</p>
          </div>
          <Link href="/admin/products/new" style={s.btnPrimary}>
            + Add Product
          </Link>
        </div>

        {/* Search */}
        <div style={s.searchBar}>
          <input
            type="text"
            placeholder="Search by name, category, or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={s.searchInput}
          />
        </div>

        {/* Table */}
        {loading ? (
          <div style={s.loading}>Loading products...</div>
        ) : (
          <div style={s.tableWrapper}>
            <table style={s.table}>
              <thead>
                <tr style={s.thead}>
                  <th style={s.th}>Image</th>
                  <th style={s.th}>Name</th>
                  <th style={s.th}>SKU</th>
                  <th style={s.th}>Category</th>
                  <th style={s.th}>Price</th>
                  <th style={s.th}>Rating</th>
                  <th style={s.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} style={s.empty}>No products found.</td>
                  </tr>
                ) : (
                  filtered.map((product) => (
                    <tr key={product.id} style={s.tr}>
                      <td style={s.td}>
                        {product.images?.[0] ? (
                          <img
                            src={`/${product.images[0]}`}
                            alt={product.name}
                            style={s.productImg}
                            onError={(e) => { e.target.src = "https://via.placeholder.com/60x60?text=No+Image"; }}
                          />
                        ) : (
                          <div style={s.noImg}>N/A</div>
                        )}
                      </td>
                      <td style={s.td}>
                        <span style={s.productName}>{product.name}</span>
                        <br />
                        <span style={s.productId}>ID: {product.id}</span>
                      </td>
                      <td style={s.td}><code style={s.sku}>{product.sku}</code></td>
                      <td style={s.td}><span style={s.badge}>{product.category}</span></td>
                      <td style={s.td}><strong>{product.price}</strong></td>
                      <td style={s.td}>{"⭐".repeat(product.rating || 0)}</td>
                      <td style={s.td}>
                        <div style={s.actions}>
                          <Link href={`/admin/products/${product.id}/edit`} style={s.btnEdit}>
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(product.id)}
                            disabled={deleting === product.id}
                            style={s.btnDelete}
                          >
                            {deleting === product.id ? "..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

const s = {
  page: { display: "flex", minHeight: "100vh", background: "#f1f5f9", fontFamily: "'Segoe UI', sans-serif" },
  sidebar: { width: "220px", background: "#0f172a", display: "flex", flexDirection: "column", padding: "0", flexShrink: 0 },
  sidebarLogo: { padding: "28px 24px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" },
  logoText: { display: "block", fontSize: "20px", fontWeight: "800", color: "#fff" },
  logoSub: { display: "block", fontSize: "11px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginTop: "2px" },
  nav: { padding: "16px 12px", flex: 1, display: "flex", flexDirection: "column", gap: "4px" },
  navItem: { display: "block", padding: "10px 14px", borderRadius: "8px", color: "#cbd5e1", textDecoration: "none", fontSize: "14px", fontWeight: "500", transition: "background 0.2s" },
  navActive: { background: "rgba(255,255,255,0.1)", color: "#fff" },
  navLogout: { marginTop: "auto", padding: "10px 14px", borderRadius: "8px", color: "#f87171", background: "none", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "500", textAlign: "left" },
  main: { flex: 1, padding: "32px", overflowX: "auto" },
  topbar: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px" },
  pageTitle: { fontSize: "28px", fontWeight: "700", color: "#0f172a", margin: "0 0 4px" },
  pageSubtitle: { color: "#64748b", fontSize: "14px", margin: 0 },
  btnPrimary: { display: "inline-block", padding: "10px 22px", background: "linear-gradient(135deg,#1e3a5f,#2563eb)", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: "600", fontSize: "14px", whiteSpace: "nowrap" },
  searchBar: { marginBottom: "20px" },
  searchInput: { width: "100%", maxWidth: "400px", padding: "10px 16px", border: "1.5px solid #e2e8f0", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff", boxSizing: "border-box" },
  tableWrapper: { background: "#fff", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", overflow: "hidden" },
  table: { width: "100%", borderCollapse: "collapse" },
  thead: { background: "#f8fafc" },
  th: { padding: "14px 16px", textAlign: "left", fontSize: "12px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px", borderBottom: "1px solid #e2e8f0" },
  tr: { borderBottom: "1px solid #f1f5f9", transition: "background 0.15s" },
  td: { padding: "14px 16px", fontSize: "14px", verticalAlign: "middle", color: "#334155" },
  productImg: { width: "56px", height: "56px", objectFit: "cover", borderRadius: "8px", border: "1px solid #e2e8f0" },
  noImg: { width: "56px", height: "56px", background: "#f1f5f9", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "#94a3b8" },
  productName: { fontWeight: "600", color: "#1e293b" },
  productId: { fontSize: "12px", color: "#94a3b8" },
  sku: { fontSize: "12px", background: "#f1f5f9", padding: "2px 6px", borderRadius: "4px", color: "#475569" },
  badge: { display: "inline-block", padding: "3px 10px", background: "#eff6ff", color: "#1d4ed8", borderRadius: "999px", fontSize: "12px", fontWeight: "600" },
  actions: { display: "flex", gap: "8px" },
  btnEdit: { padding: "6px 14px", background: "#f0fdf4", color: "#16a34a", borderRadius: "6px", textDecoration: "none", fontSize: "13px", fontWeight: "600", border: "1px solid #bbf7d0" },
  btnDelete: { padding: "6px 14px", background: "#fef2f2", color: "#dc2626", borderRadius: "6px", border: "1px solid #fecaca", fontSize: "13px", fontWeight: "600", cursor: "pointer" },
  empty: { textAlign: "center", padding: "48px", color: "#94a3b8", fontSize: "15px" },
  loading: { textAlign: "center", padding: "80px", color: "#64748b", fontSize: "16px" },
};
