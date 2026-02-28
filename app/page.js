export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>
      <h1>🚀 Next.js CI/CD Demo</h1>
      <p>Deployed using Jenkins Pipeline + Docker</p>
      <p>By Adnan Khan</p>
    </main>
  );
}