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
        backgroundColor: "#f5f5f5",
        color: "#333",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        🚀 Next.js CI/CD Demo
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
        Deployed using Jenkins Pipeline + Docker
      </p>
      <p style={{ fontSize: "1rem", color: "#666" }}>By Adnan Khan</p>
    </main>
  );
}