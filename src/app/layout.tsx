import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/shared/navbar";


const poppins = Poppins({
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
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
