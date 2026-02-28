export const metadata = {
  title: 'Next.js Jenkins Demo',
  description: 'CI/CD Pipeline using Jenkins & Docker',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}