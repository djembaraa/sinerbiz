// app/services/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/libs/supabaseClient";
import Image from "next/image";
import Footer from "@/components/Footer";

interface Layanan {
  id: number;
  nama_layanan: string;
  deskripsi?: string;
  image_url?: string;
}

export default function ServicesPage() {
  const [layanan, setLayanan] = useState<Layanan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLayanan() {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase.from("layanan").select("*");

        if (error) {
          throw error;
        }
        setLayanan(data || []);
        // --- TAMBAHKAN CONSOLE.LOG INI ---
        console.log("Data layanan yang diterima dari Supabase:", data);
        // --- AKHIR CONSOLE.LOG ---
      } catch (err: any) {
        console.error("Error fetching layanan:", err.message);
        setError("Gagal memuat layanan: " + err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLayanan();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-12 text-center bg-gray-200">
        <p className="text-lg text-gray-600">Memuat layanan...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto px-4 py-12 text-center">
        <p className="text-lg text-red-500">Error: {error}</p>
      </section>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <section className="container mx-auto px-4 py-12 text-center bg-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Layanan Kami</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Jelajahi berbagai solusi inovatif yang kami tawarkan untuk membantu
          bisnis Anda berkembang.
        </p>
      </section>
      {layanan.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">
          Belum ada layanan yang tersedia.
        </p>
      ) : (
        <section className="container mx-auto px-4 py-16 bg-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {layanan.map((layananItem) => {
              const handleImageErrorFallback = (
                e: React.SyntheticEvent<HTMLImageElement, Event>
              ) => {
                console.error(
                  "Failed to load image for service:",
                  layananItem.nama_layanan,
                  e.currentTarget.src
                );
                e.currentTarget.src =
                  "https://placehold.co/400x200/cccccc/000000?text=Gambar+Tidak+Tersedia";
              };

              return (
                <div
                  key={layananItem.id}
                  className="bg-gray-100 rounded-lg shadow-2xl group transition duration-300 hover:shadow-[0_0_30px_5px_rgba(0,123,255,0.4)] overflow-hidden"
                >
                  <div className="relative h-48 w-full">
                    {layananItem.image_url ? (
                      <Image
                        className="object-cover object-center transition duration-300 group-hover:brightness-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        src={layananItem.image_url}
                        alt={layananItem.nama_layanan || "Layanan Gambar"}
                        layout="fill"
                        onError={handleImageErrorFallback}
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-600">
                        Gambar Tidak Tersedia
                      </div>
                    )}
                  </div>

                  <div className="p-6 pb-4">
                    <h4 className="mt-1 text-gray-700 font-semibold text-xl leading-tight">
                      {layananItem.nama_layanan}
                    </h4>
                    <p className="text-gray-700 pt-4">
                      {layananItem.deskripsi ||
                        "Deskripsi layanan belum tersedia."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
      <section className="container mx-auto px-4 py-12 text-center bg-gray-200 mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Ingin Solusi Kustom?
        </h2>
        <p className="text-lg text-gray-600">
          Kami siap membantu Anda dengan kebutuhan spesifik.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 py-3 mt-6 text-lg shadow-md transition-all duration-300"
        >
          Hubungi Kami
        </a>
      </section>
      <Footer />s
    </div>
  );
}
