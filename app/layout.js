import "./globals.css";

export const metadata = {
  title: "AP Store",
  description: "Explore the life-transforming books by Acharya Prashant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
