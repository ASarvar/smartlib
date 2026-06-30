import { neon } from "@neondatabase/serverless";
import { revalidatePath } from "next/cache";

async function getComments() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return { comments: [], missingDatabaseUrl: true, loadError: null };
  }

  try {
    const sql = neon(databaseUrl);
    const comments = await sql`SELECT comment FROM comments ORDER BY comment ASC`;

    return { comments, missingDatabaseUrl: false, loadError: null };
  } catch (error) {
    return {
      comments: [],
      missingDatabaseUrl: false,
      loadError:
        "Unable to read from the comments table. Create it in Neon with: CREATE TABLE IF NOT EXISTS comments (comment TEXT);",
    };
  }
}

export default async function NeonTestPage() {
  const { comments, missingDatabaseUrl, loadError } = await getComments();

  async function create(formData) {
    "use server";

    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      throw new Error("DATABASE_URL is not set");
    }

    const comment = String(formData.get("comment") || "").trim();

    if (!comment) {
      return;
    }

    try {
      const sql = neon(databaseUrl);
      await sql`CREATE TABLE IF NOT EXISTS comments (comment TEXT)`;
      await sql`INSERT INTO comments (comment) VALUES (${comment})`;
      revalidatePath("/neon-test");
    } catch (error) {
      console.error("Neon insert failed:", error);
    }
  }

  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <p style={styles.kicker}>Neon connection test</p>
        <h1 style={styles.title}>Connect this Next.js app to Neon</h1>
        <p style={styles.description}>
          Use this page to confirm that your local Vercel environment variables and Neon database are connected correctly.
        </p>

        <form action={create} style={styles.form}>
          <input
            type="text"
            name="comment"
            placeholder="Write a comment"
            aria-label="Comment"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>

        {missingDatabaseUrl ? (
          <p style={styles.warning}>
            DATABASE_URL is missing. Run vercel env pull .env.development.local and restart the dev server.
          </p>
        ) : loadError ? (
          <p style={styles.warning}>{loadError}</p>
        ) : (
          <div style={styles.results}>
            <h2 style={styles.resultsTitle}>Stored comments</h2>
            {comments.length === 0 ? (
              <p style={styles.empty}>No comments yet. Submit one above to verify the connection.</p>
            ) : (
              <ul style={styles.list}>
                {comments.map((row, index) => (
                  <li key={`${row.comment}-${index}`} style={styles.listItem}>
                    {row.comment}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: "48px 20px",
    background:
      "radial-gradient(circle at top, rgba(13, 148, 136, 0.16), transparent 34%), linear-gradient(180deg, #07111f 0%, #0b1728 100%)",
    color: "#e5eefb",
  },
  card: {
    width: "min(720px, 100%)",
    borderRadius: "24px",
    padding: "32px",
    background: "rgba(7, 17, 31, 0.82)",
    border: "1px solid rgba(148, 163, 184, 0.18)",
    boxShadow: "0 24px 80px rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(12px)",
  },
  kicker: {
    margin: 0,
    fontSize: "0.82rem",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#7dd3fc",
  },
  title: {
    margin: "10px 0 12px",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    lineHeight: 1.05,
  },
  description: {
    margin: 0,
    maxWidth: "60ch",
    color: "#b8c7da",
    lineHeight: 1.7,
  },
  form: {
    display: "flex",
    gap: "12px",
    marginTop: "24px",
    flexWrap: "wrap",
  },
  input: {
    flex: "1 1 280px",
    minHeight: "52px",
    borderRadius: "14px",
    border: "1px solid rgba(148, 163, 184, 0.25)",
    background: "rgba(15, 23, 42, 0.85)",
    color: "#e5eefb",
    padding: "0 16px",
    fontSize: "1rem",
    outline: "none",
  },
  button: {
    minHeight: "52px",
    padding: "0 20px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg, #38bdf8, #14b8a6)",
    color: "#04111f",
    fontWeight: 700,
    cursor: "pointer",
  },
  warning: {
    marginTop: "18px",
    color: "#fbbf24",
  },
  results: {
    marginTop: "28px",
    paddingTop: "24px",
    borderTop: "1px solid rgba(148, 163, 184, 0.16)",
  },
  resultsTitle: {
    margin: "0 0 12px",
    fontSize: "1.1rem",
  },
  empty: {
    margin: 0,
    color: "#b8c7da",
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: "10px",
  },
  listItem: {
    padding: "14px 16px",
    borderRadius: "12px",
    background: "rgba(15, 23, 42, 0.72)",
    border: "1px solid rgba(148, 163, 184, 0.14)",
    color: "#dbeafe",
  },
};