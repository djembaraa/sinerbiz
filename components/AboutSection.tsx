// components/AboutSection.tsx
import React from "react";
import Image from "next/image"; // Menggunakan komponen Image dari Next.js
import { Button } from "@/components/ui/button"; // Menggunakan Button dari Shadcn UI

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-200 rounded-xl shadow-lg mt-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Bagian Gambar */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md md:max-w-none h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x400/E0E7FF/000000?text=Sinerbiz+Team" // Ganti dengan URL gambar Anda
              alt="Tim Sinerbiz Bekerja"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Bagian Konten Teks */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Tentang Sinerbiz
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Sinerbiz adalah agensi digital marketing yang berdedikasi untuk
            memberikan solusi inovatif dan efektif. Kami percaya pada kekuatan
            sinergi antara kreativitas dan teknologi untuk mencapai hasil
            maksimal bagi klien kami.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Dengan platform marketplace kami di{" "}
            <a
              href="https://app.sinerbiz.com"
              className="text-indigo-600 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              app.sinerbiz.com
            </a>
            , kami memudahkan Anda menemukan layanan digital marketing yang
            tepat, kapan pun pun dan di mana pun.
          </p>
          <Button className="bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg px-8 py-3 text-lg shadow-md transition-all duration-300">
            Hubungi Kami Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
}
