// components/HeroSection.tsx
"use client"; // Tetap pertahankan "use client" karena ini adalah Client Component

import React from "react"; // Tidak perlu useState, useEffect, useRef lagi
import { ArrowRight } from "lucide-react"; // Menggunakan ikon dari lucide-react

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 lg:px-16 py-16 md:py-32 overflow-hidden">
      {/* GIF Background */}
      <img
        src="/hero.gif" // PATH YANG BENAR: Pastikan nama file GIF Anda di folder public/ adalah 'hero.gif'
        alt="Sinerbiz Background GIF"
        className="absolute inset-0 w-full h-full object-cover z-0"
        // Anda bisa menambahkan loading="lazy" jika GIF sangat besar
      />

      {/* Overlay untuk membuat teks lebih mudah dibaca */}
      <div className="absolute inset-0 bg-gray-900 opacity-40 z-10"></div>

      {/* Konten Hero */}
      <div className="relative z-20 text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Selamat Datang di Sinerbiz
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Solusi bisnis inovatif untuk mendorong pertumbuhan dan efisiensi usaha
          Anda.
        </p>
        <div className="mt-8">
          <a
            href="/contact" // Ganti dengan link yang relevan, misalnya ke halaman kontak
            className="group inline-flex items-center justify-center px-8 py-4 bg-[#173362] hover:bg-indigo-700 text-white rounded-xl text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Mulai Sekarang
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
