"use client";
import type { Metadata } from "next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main
          className="relative overflow-hidden"
          data-scroll-container
          ref={containerRef}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
