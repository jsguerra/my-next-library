import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MY Next Library App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <footer style={{ padding: "1rem", textAlign: "center" }}>
          &copy; {currentYear} My Next Library
        </footer>
      </body>
    </html>
  );
}
