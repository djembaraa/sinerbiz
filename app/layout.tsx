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
        className={`font-sans antialiased flex flex-col min-h-screen bg-gray-50 text-gray-800`}
      >
        {/* Memanggil komponen Navbar di sini */}
        <Navbar />

        {/* Konten Halaman (Children) - Di sinilah halaman-halaman Anda akan dirender */}
        <main className="flex-grow">
          {children}{" "}
          {/* Ini adalah tempat konten dari page.tsx akan dirender */}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0 mb-6">
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors duration-200"
              >
                Kebijakan Privasi
              </a>
              <a
                href="/terms-of-service"
                className="hover:text-white transition-colors duration-200"
              >
                Syarat & Ketentuan
              </a>
              {/* Tambahkan tautan media sosial di sini jika diinginkan */}
              {/* Contoh: <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a> */}
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Sinerbiz. Hak Cipta Dilindungi
              Undang-Undang.
            </p>
            <p className="text-xs mt-2">Dibuat dengan ❤️ oleh Tim Sinerbiz.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
