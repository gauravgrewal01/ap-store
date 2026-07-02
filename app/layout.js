import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "AP Store",
  description: "Explore the life-transforming books by Acharya Prashant.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body cz-shortcut-listen="true">
        <Header />
        {children}
        </body>
    </html>
  );
}
