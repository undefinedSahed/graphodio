import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "@/components/shared/navbar";
// import SplashCursor from "@/components/cursor/SplashCursor";


const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})


export const metadata: Metadata = {
  title: "Graphodio",
  description: "The best agency for graphics, seo and web solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased`}
      >
        <Navbar />
        {children}
        {/* <SplashCursor /> */}
      </body>
    </html>
  );
}
