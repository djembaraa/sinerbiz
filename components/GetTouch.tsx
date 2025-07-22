// components/WhyChooseUs.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react"; // Ikon centang

export default function WhyChooseUs() {
  return (
    <section className="container mx-auto px-8 py-10 bg-gray-200 mt-12 rounded-xl shadow-lg">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Kolom Kiri: Welcome to Sinerbiz */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Selamat Datang di <br className="hidden md:inline" /> Sinerbiz
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            Kami merevolusi industri dengan solusi inovatif yang disesuaikan
            dengan kebutuhan Anda. Temukan berbagai layanan digital marketing
            terbaik kami melalui marketplace Sinerbiz. Solusi cepat, mudah, dan
            terpercaya.
          </p>
          <Button className="bg-[#173362] hover:bg-blue-700 text-white rounded-lg px-8 py-3 text-lg shadow-md transition-all duration-300">
            Pelajari Lebih Lanjut
          </Button>
        </div>

        {/* Kolom Kanan: Why Choose Us? */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Card className="p-8 shadow-xl rounded-xl w-full max-w-md bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-gray-800 text-center lg:text-left">
                Mengapa Memilih Kami?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-lg text-gray-700">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Teknologi terdepan di industri</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Dukungan pelanggan 24/7</span>
                </li>
                <li className="flex items-start text-lg text-gray-700">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Solusi yang dapat disesuaikan</span>
                </li>
              </ul>
              <div className="flex flex-col space-y-4">
                <Button className="bg-[#173362] hover:bg-blue-700 text-white rounded-lg px-8 py-3 text-lg shadow-md transition-all duration-300">
                  Mulai Sekarang
                </Button>
                <Button
                  variant="outline"
                  className=" text-white hover:bg-blue-50 hover:text-blue-700 rounded-lg px-8 py-3 text-lg transition-all duration-300"
                >
                  Hubungi Penjualan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
