import Header from "@/layouts/Header/Header";
import Footer from "@/layouts/Footer";
import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "../styles/globals.css";
import { Providers } from "./Providers";

const livvic = Livvic({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Jasper Supplies",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${livvic.className} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
