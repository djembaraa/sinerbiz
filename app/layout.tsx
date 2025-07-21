// app/layout.tsx
import type { Metadata } from "next";
// Menggunakan font Geist yang benar dari paket 'geist'
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css"; // Pastikan ini mengimpor Tailwind CSS Anda

// Import komponen Navbar yang baru saja kita buat
import Navbar from "@/components/Navbar"; // Perhatikan path importnya

// Metadata untuk SEO dan informasi situs
export const metadata: Metadata = {
  title: "Sinerbiz - Solusi Bisnis Inovatif Anda", // Judul yang lebih spesifik untuk Sinerbiz
  description:
    "Sinerbiz adalah perusahaan yang menyediakan solusi bisnis inovatif untuk meningkatkan efisiensi dan pertumbuhan usaha Anda.", // Deskripsi untuk SEO
  // Anda bisa menambahkan metadata lain seperti keywords, openGraph, dll.
  // icons: {
  //   icon: '/favicon.ico', // Favicon bisa diatur di sini juga
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Menggunakan font Geist dan Geist_Mono pada tag html
    // Mengubah lang="en" menjadi lang="id"
    <html lang="id" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        // Menggunakan font-sans (yang akan merujuk ke GeistSans) dan styling dasar
        className={`font-sans antialiased flex flex-col min-h-screen bg-gray-200 text-gray-800`}
      >
        {/* Memanggil komponen Navbar di sini */}
        <Navbar />

        {/* Konten Halaman (Children) - Di sinilah halaman-halaman Anda akan dirender */}
        <main className="flex-grow">
          {children}{" "}
          {/* Ini adalah tempat konten dari page.tsx akan dirender */}
        </main>
      </body>
    </html>
  );
}
