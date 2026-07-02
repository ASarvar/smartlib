"use client";
import { useState, useRef, useCallback } from "react";

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

// ---- Image Uploader with drag-and-drop + preview ----
function ImageUploader({ images, onChange, token }) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const uploadFiles = useCallback(
    async (files) => {
      setUploadError("");
      const results = [];
      setUploading(true);

      for (const file of Array.from(files)) {
        const fd = new FormData();
        fd.append("file", file);
        try {
          const res = await fetch("/api/admin/upload", {
            method: "POST",
            headers: { "x-admin-token": token },
            body: fd,
          });
          const data = await res.json();
          if (res.ok) {
            results.push(data.path);
          } else {
            setUploadError(data.error || "Upload failed.");
          }
        } catch {
          setUploadError("Upload failed. Check your connection.");
        }
      }

      setUploading(false);
      if (results.length > 0) {
        const existing = (images || []).filter((p) => p.trim() !== "");
        onChange([...existing, ...results]);
      }
    },
    [images, onChange, token]
  );

  const handleFileChange = (e) => uploadFiles(e.target.files);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
  };

  const removeImage = (idx) => {
    onChange((images || []).filter((_, i) => i !== idx));
  };

  const moveImage = (from, to) => {
    const next = [...(images || [])];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    onChange(next);
  };

  const updatePath = (idx, val) => {
    const next = [...(images || [])];
    next[idx] = val;
    onChange(next);
  };

  const addManual = () => onChange([...(images || []), ""]);

  return (
    <div>
      {/* Drag-and-drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        style={{
          ...iu.dropzone,
          ...(dragging ? iu.dropzoneActive : {}),
          ...(uploading ? iu.dropzoneUploading : {}),
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {uploading ? (
          <span style={iu.dropText}>⏳ Uploading...</span>
        ) : (
          <>
            <span style={iu.dropIcon}>🖼️</span>
            <span style={iu.dropText}>Drag & drop images here, or click to select</span>
            <span style={iu.dropHint}>JPG, PNG, WebP — max 5MB each</span>
          </>
        )}
      </div>

      {uploadError && <p style={iu.uploadError}>{uploadError}</p>}

      {/* Image previews */}
      {(images || []).length > 0 && (
        <div style={iu.grid}>
          {(images || []).map((imgPath, idx) => (
            <div key={idx} style={iu.card}>
              {imgPath.trim() ? (
                <img
                  src={imgPath.startsWith("api/") ? `/${imgPath}` : `/${imgPath}`}
                  alt={`Image ${idx + 1}`}
                  style={iu.preview}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              ) : (
                <div style={iu.noPreview}>No preview</div>
              )}
              <div style={iu.cardBody}>
                <input
                  value={imgPath}
                  onChange={(e) => updatePath(idx, e.target.value)}
                  placeholder="assets/img/shop/..."
                  style={iu.pathInput}
                />
                <div style={iu.cardActions}>
                  <button
                    type="button"
                    onClick={() => idx > 0 && moveImage(idx, idx - 1)}
                    disabled={idx === 0}
                    title="Move left"
                    style={iu.iconBtn}
                  >◀</button>
                  <span style={iu.imgIdx}>#{idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => idx < images.length - 1 && moveImage(idx, idx + 1)}
                    disabled={idx === images.length - 1}
                    title="Move right"
                    style={iu.iconBtn}
                  >▶</button>
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    title="Remove"
                    style={iu.removeBtn}
                  >✕</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <button type="button" onClick={addManual} style={fs.btnAdd}>+ Add path manually</button>
    </div>
  );
}

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
function LangTab({ data, onChange, lang, label, token }) {
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
            <label style={fs.label}>Product Images</label>
            <ImageUploader images={data.images} onChange={(v) => set("images", v)} token={token} />
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
export default function ProductForm({ initial, onSubmit, submitLabel = "Save Product", saving, token = "" }) {
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
        {activeTab === "en" && <LangTab lang="en" label="English" data={en} onChange={handleEnChange} token={token} />}
        {activeTab === "ru" && <LangTab lang="ru" label="Russian" data={ru} onChange={setRu} token={token} />}
        {activeTab === "uz" && <LangTab lang="uz" label="Uzbek" data={uz} onChange={setUz} token={token} />}
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

const iu = {
  dropzone: { border: "2px dashed #cbd5e1", borderRadius: "10px", padding: "28px 16px", textAlign: "center", cursor: "pointer", background: "#f8fafc", marginBottom: "16px", transition: "all 0.2s" },
  dropzoneActive: { borderColor: "#2563eb", background: "#eff6ff" },
  dropzoneUploading: { borderColor: "#f59e0b", background: "#fffbeb", cursor: "wait" },
  dropIcon: { display: "block", fontSize: "28px", marginBottom: "6px" },
  dropText: { display: "block", fontSize: "14px", fontWeight: "600", color: "#374151", marginBottom: "4px" },
  dropHint: { display: "block", fontSize: "12px", color: "#94a3b8" },
  uploadError: { color: "#ef4444", fontSize: "13px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "6px", padding: "8px 12px", marginBottom: "12px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "12px", marginBottom: "12px" },
  card: { border: "1.5px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", background: "#fff" },
  preview: { width: "100%", height: "120px", objectFit: "cover", display: "block" },
  noPreview: { width: "100%", height: "120px", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "#94a3b8" },
  cardBody: { padding: "8px" },
  pathInput: { width: "100%", fontSize: "11px", padding: "4px 6px", border: "1px solid #e2e8f0", borderRadius: "4px", boxSizing: "border-box", color: "#475569", marginBottom: "6px" },
  cardActions: { display: "flex", alignItems: "center", gap: "4px" },
  iconBtn: { padding: "2px 6px", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: "4px", cursor: "pointer", fontSize: "11px", color: "#475569" },
  imgIdx: { flex: 1, textAlign: "center", fontSize: "11px", color: "#94a3b8" },
  removeBtn: { padding: "2px 6px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "4px", cursor: "pointer", fontSize: "11px", color: "#dc2626" },
};

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
