export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Arial', sans-serif",
        background: "linear-gradient(135deg, #e0f7fa, #80deea)",
        color: "#1a237e",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        🚀 Next.js CI/CD Demo
      </h1>
      <p style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
        📦 Deployed with Jenkins & Docker
      </p>
      <p style={{ fontSize: "1rem", color: "#3949ab" }}>
        👨‍💻 By Adnan Khan
      </p>
      <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#1a237e" }}>
        ⚡ Enjoy seamless CI/CD deployment!
      </p>
    </main>
 );
}


//#ertfgyhjkl