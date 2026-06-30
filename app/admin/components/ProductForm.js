"use client";
import { useState } from "react";

// Blank template for a single language version of a product
export const blankProduct = {
  name: "",
  price: "",
  sku: "",
  category: "",
  tags: "",
  rating: 5,
  reviewsCount: 0,
  images: [""],
  description: "",
  fullDescription: "",
  specifications: {},
  features: [""],
  technicalSpecs: "",
  videoId: "",
};

// ---- Dynamic key-value editor (for specifications) ----
function KVEditor({ value, onChange }) {
  const entries = Object.entries(value || {});

  const update = (idx, key, val) => {
    const next = [...entries];
    next[idx] = [key, val];
    onChange(Object.fromEntries(next));
  };

  const add = () => {
    onChange({ ...value, "": "" });
  };

  const remove = (idx) => {
    const next = entries.filter((_, i) => i !== idx);
    onChange(Object.fromEntries(next));
  };

  return (
    <div>
      {entries.map(([k, v], idx) => (
        <div key={idx} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
          <input
            placeholder="Key (e.g. Weight)"
            value={k}
            onChange={(e) => update(idx, e.target.value, v)}
            style={fs.input}
          />
          <input
            placeholder="Value"
            value={v}
            onChange={(e) => update(idx, k, e.target.value)}
            style={fs.input}
          />
          <button type="button" onClick={() => remove(idx)} style={fs.btnRemove}>✕</button>
        </div>
      ))}
      <button type="button" onClick={add} style={fs.btnAdd}>+ Add Spec</button>
    </div>
  );
}

// ---- Dynamic list editor (for features / images) ----
function ListEditor({ value, onChange, placeholder }) {
  const items = value || [""];

  const update = (idx, val) => {
    const next = [...items];
    next[idx] = val;
    onChange(next);
  };

  const add = () => onChange([...items, ""]);

  const remove = (idx) => onChange(items.filter((_, i) => i !== idx));

  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
          <input
            value={item}
            onChange={(e) => update(idx, e.target.value)}
            placeholder={placeholder}
            style={fs.input}
          />
          <button type="button" onClick={() => remove(idx)} style={fs.btnRemove}>✕</button>
        </div>
      ))}
      <button type="button" onClick={add} style={fs.btnAdd}>+ Add</button>
    </div>
  );
}

// ---- Language Tab ----
function LangTab({ data, onChange, lang, label }) {
  const set = (field, value) => onChange({ ...data, [field]: value });

  return (
    <div>
      <div style={fs.grid2}>
        <div style={fs.field}>
          <label style={fs.label}>Name <span style={fs.req}>*</span></label>
          <input value={data.name} onChange={(e) => set("name", e.target.value)} required style={fs.input} placeholder="Product name" />
        </div>
        <div style={fs.field}>
          <label style={fs.label}>Price <span style={fs.req}>*</span></label>
          <input value={data.price} onChange={(e) => set("price", e.target.value)} required style={fs.input} placeholder="e.g. $2,499.00 or Contact for Quote" />
        </div>
      </div>

      {lang === "en" && (
        <div style={fs.grid2}>
          <div style={fs.field}>
            <label style={fs.label}>SKU <span style={fs.req}>*</span></label>
            <input value={data.sku} onChange={(e) => set("sku", e.target.value)} required style={fs.input} placeholder="e.g. RSG-001" />
          </div>
          <div style={fs.field}>
            <label style={fs.label}>Rating</label>
            <select value={data.rating} onChange={(e) => set("rating", Number(e.target.value))} style={fs.input}>
              {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n} ★</option>)}
            </select>
          </div>
        </div>
      )}

      <div style={fs.grid2}>
        <div style={fs.field}>
          <label style={fs.label}>Category <span style={fs.req}>*</span></label>
          <input value={data.category} onChange={(e) => set("category", e.target.value)} required style={fs.input} placeholder="e.g. Security Gates" />
        </div>
        <div style={fs.field}>
          <label style={fs.label}>Tags</label>
          <input value={data.tags} onChange={(e) => set("tags", e.target.value)} style={fs.input} placeholder="comma-separated" />
        </div>
      </div>

      <div style={fs.field}>
        <label style={fs.label}>Short Description <span style={fs.req}>*</span></label>
        <textarea value={data.description} onChange={(e) => set("description", e.target.value)} required rows={3} style={fs.textarea} placeholder="Brief product description" />
      </div>

      <div style={fs.field}>
        <label style={fs.label}>Full Description</label>
        <textarea value={data.fullDescription} onChange={(e) => set("fullDescription", e.target.value)} rows={5} style={fs.textarea} placeholder="Detailed product description" />
      </div>

      <div style={fs.field}>
        <label style={fs.label}>Technical Specs</label>
        <textarea value={data.technicalSpecs} onChange={(e) => set("technicalSpecs", e.target.value)} rows={2} style={fs.textarea} placeholder="Technical specifications summary" />
      </div>

      <div style={fs.field}>
        <label style={fs.label}>Features</label>
        <ListEditor value={data.features} onChange={(v) => set("features", v)} placeholder="e.g. 99.9% detection rate" />
      </div>

      <div style={fs.field}>
        <label style={fs.label}>Specifications (key-value)</label>
        <KVEditor value={data.specifications} onChange={(v) => set("specifications", v)} />
      </div>

      {lang === "en" && (
        <>
          <div style={fs.field}>
            <label style={fs.label}>Images (paths relative to /public)</label>
            <ListEditor value={data.images} onChange={(v) => set("images", v)} placeholder="assets/img/shop/product.jpg" />
          </div>
          <div style={fs.field}>
            <label style={fs.label}>YouTube Video ID</label>
            <input value={data.videoId || ""} onChange={(e) => set("videoId", e.target.value)} style={fs.input} placeholder="e.g. Nqsw7X0DLdY" />
          </div>
        </>
      )}
    </div>
  );
}

// ---- Main Form ----
export default function ProductForm({ initial, onSubmit, submitLabel = "Save Product", saving }) {
  const makeBlank = () => ({ ...blankProduct, specifications: {}, features: [""], images: [""] });

  const [en, setEn] = useState(initial?.en || makeBlank());
  const [ru, setRu] = useState(initial?.ru || makeBlank());
  const [uz, setUz] = useState(initial?.uz || makeBlank());
  const [activeTab, setActiveTab] = useState("en");
  const [error, setError] = useState("");

  // Sync shared fields (images, videoId, sku, rating) from EN to other langs
  const handleEnChange = (data) => {
    setEn(data);
    setRu((prev) => ({ ...prev, sku: data.sku, rating: data.rating, images: data.images, videoId: data.videoId, reviewsCount: data.reviewsCount }));
    setUz((prev) => ({ ...prev, sku: data.sku, rating: data.rating, images: data.images, videoId: data.videoId, reviewsCount: data.reviewsCount }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const cleanList = (arr) => (arr || []).filter((i) => i.trim() !== "");
    const cleanImages = cleanList(en.images);
    if (cleanImages.length === 0) {
      setError("Please add at least one product image path.");
      return;
    }

    const buildProduct = (data, sharedImages) => ({
      ...data,
      images: sharedImages,
      features: cleanList(data.features),
      reviewsCount: Number(data.reviewsCount) || 0,
      rating: Number(data.rating) || 5,
      reviews: data.reviews || [],
    });

    onSubmit({
      en: buildProduct(en, cleanImages),
      ru: buildProduct({ ...ru, images: cleanImages }, cleanImages),
      uz: buildProduct({ ...uz, images: cleanImages }, cleanImages),
    });
  };

  const tabs = [
    { id: "en", label: "🇬🇧 English" },
    { id: "ru", label: "🇷🇺 Russian" },
    { id: "uz", label: "🇺🇿 Uzbek" },
  ];

  return (
    <form onSubmit={handleSubmit}>
      {/* Tabs */}
      <div style={fs.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            style={{ ...fs.tab, ...(activeTab === tab.id ? fs.tabActive : {}) }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={fs.tabContent}>
        {activeTab === "en" && <LangTab lang="en" label="English" data={en} onChange={handleEnChange} />}
        {activeTab === "ru" && <LangTab lang="ru" label="Russian" data={ru} onChange={setRu} />}
        {activeTab === "uz" && <LangTab lang="uz" label="Uzbek" data={uz} onChange={setUz} />}
      </div>

      {error && <p style={fs.error}>{error}</p>}

      <div style={fs.footer}>
        <p style={fs.note}>
          ℹ️ Images, Video ID, SKU and Rating are shared across all languages. Fill all 3 language tabs before saving.
        </p>
        <button type="submit" disabled={saving} style={fs.btnSave}>
          {saving ? "Saving..." : submitLabel}
        </button>
      </div>
    </form>
  );
}

const fs = {
  tabs: { display: "flex", gap: "4px", borderBottom: "2px solid #e2e8f0", marginBottom: "28px" },
  tab: { padding: "10px 20px", border: "none", background: "none", cursor: "pointer", fontSize: "14px", fontWeight: "600", color: "#64748b", borderRadius: "6px 6px 0 0", transition: "all 0.2s" },
  tabActive: { background: "#eff6ff", color: "#1d4ed8", borderBottom: "2px solid #2563eb" },
  tabContent: { background: "#fafafa", borderRadius: "8px", padding: "24px", border: "1px solid #e2e8f0", marginBottom: "24px" },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "0" },
  field: { marginBottom: "18px" },
  label: { display: "block", fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "6px" },
  req: { color: "#ef4444" },
  input: { width: "100%", padding: "9px 13px", border: "1.5px solid #d1d5db", borderRadius: "7px", fontSize: "14px", outline: "none", boxSizing: "border-box", background: "#fff" },
  textarea: { width: "100%", padding: "9px 13px", border: "1.5px solid #d1d5db", borderRadius: "7px", fontSize: "14px", outline: "none", boxSizing: "border-box", resize: "vertical", background: "#fff", fontFamily: "inherit" },
  btnAdd: { padding: "5px 14px", background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe", borderRadius: "6px", fontSize: "13px", cursor: "pointer", fontWeight: "600" },
  btnRemove: { padding: "5px 10px", background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca", borderRadius: "6px", fontSize: "13px", cursor: "pointer", flexShrink: 0 },
  error: { color: "#ef4444", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "6px", padding: "10px 14px", fontSize: "13px", marginBottom: "16px" },
  footer: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" },
  note: { fontSize: "13px", color: "#64748b", margin: 0, flex: 1 },
  btnSave: { padding: "12px 32px", background: "linear-gradient(135deg,#1e3a5f,#2563eb)", color: "#fff", border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" },
};
