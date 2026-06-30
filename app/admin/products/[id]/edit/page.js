"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import ProductForm from "../../../components/ProductForm";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [token, setToken] = useState("");
  const [initial, setInitial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("adminToken");
    if (!saved) {
      router.push("/admin/login");
    } else {
      setToken(saved);
    }
  }, [router]);

  useEffect(() => {
    if (!token || !id) return;
    (async () => {
      const res = await fetch(`/api/admin/products/${id}`, {
        headers: { "x-admin-token": token },
      });
      if (res.status === 401) {
        sessionStorage.removeItem("adminToken");
        router.push("/admin/login");
        return;
      }
      if (res.status === 404) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setInitial(data);
      setLoading(false);
    })();
  }, [token, id, router]);

  const handleSubmit = async (payload) => {
    setSaving(true);
    setError("");

    const res = await fetch(`/api/admin/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": token,
      },
      body: JSON.stringify(payload),
    });

    setSaving(false);

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      const data = await res.json();
      setError(data.error || "Failed to update product.");
    }
  };

  return (
    <div style={s.page}>
      {/* Sidebar */}
      <aside style={s.sidebar}>
        <div style={s.sidebarLogo}>
          <span style={s.logoText}>SmartLib</span>
          <span style={s.logoSub}>Admin Panel</span>
        </div>
        <nav style={s.nav}>
          <Link href="/admin/dashboard" style={s.navItem}>📦 Products</Link>
          <Link href="/products" target="_blank" style={s.navItem}>🏪 View Store</Link>
          <button onClick={() => { sessionStorage.removeItem("adminToken"); router.push("/admin/login"); }} style={s.navLogout}>🚪 Logout</button>
        </nav>
      </aside>

      {/* Main */}
      <main style={s.main}>
        <div style={s.topbar}>
          <div>
            <div style={s.breadcrumb}>
              <Link href="/admin/dashboard" style={s.breadLink}>Products</Link>
              <span style={s.breadSep}> / </span>
              <span>Edit #{id}</span>
            </div>
            <h1 style={s.pageTitle}>Edit Product #{id}</h1>
          </div>
        </div>

        <div style={s.card}>
          {loading && <p style={s.loading}>Loading product data...</p>}
          {notFound && <p style={s.error}>Product #{id} not found.</p>}
          {error && <p style={s.error}>{error}</p>}
          {!loading && !notFound && initial && (
            <ProductForm initial={initial} onSubmit={handleSubmit} saving={saving} submitLabel="Save Changes" />
          )}
        </div>
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
  navItem: { display: "block", padding: "10px 14px", borderRadius: "8px", color: "#cbd5e1", textDecoration: "none", fontSize: "14px", fontWeight: "500" },
  navLogout: { marginTop: "auto", padding: "10px 14px", borderRadius: "8px", color: "#f87171", background: "none", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: "500", textAlign: "left" },
  main: { flex: 1, padding: "32px", overflowX: "auto" },
  topbar: { marginBottom: "24px" },
  breadcrumb: { fontSize: "13px", color: "#64748b", marginBottom: "6px" },
  breadLink: { color: "#2563eb", textDecoration: "none" },
  breadSep: { margin: "0 6px" },
  pageTitle: { fontSize: "26px", fontWeight: "700", color: "#0f172a", margin: 0 },
  card: { background: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" },
  error: { color: "#ef4444", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "6px", padding: "10px 14px", fontSize: "13px", marginBottom: "16px" },
  loading: { color: "#64748b", textAlign: "center", padding: "40px", fontSize: "15px" },
};
