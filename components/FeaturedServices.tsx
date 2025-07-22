// components/FeaturedServices.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Megaphone,
  Newspaper,
  BarChart2,
  Layout,
  Lightbulb,
} from "lucide-react"; // Ikon dari lucide-react

export default function FeaturedServices() {
  const services = [
    {
      icon: <Users className="h-8 w-8 text-[#173362]" />,
      title: "Influencer Marketing",
      description: "Jangkau audiens target Anda melalui influencer tepercaya.",
    },
    {
      icon: <Megaphone className="h-8 w-8 text-[#173362]" />,
      title: "Media Partner",
      description:
        "Perluas jangkauan kampanye Anda dengan jaringan media kami.",
    },
    {
      icon: <Newspaper className="h-8 w-8 text-[#173362]" />,
      title: "Portal Berita",
      description:
        "Publikasikan berita dan konten promosi di portal berita kami.",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-[#173362]" />,
      title: "Social Media Management",
      description: "Kelola dan optimalkan kehadiran media sosial bisnis Anda.",
    },
    {
      icon: <Layout className="h-8 w-8 text-[#173362]" />,
      title: "Landing Page Development",
      description:
        "Buat landing page menarik dan konversi tinggi untuk kampanye Anda.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#173362]" />,
      title: "Layanan Lainnya",
      description:
        "Solusi digital marketing lengkap untuk kebutuhan bisnis Anda.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-200">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Layanan Unggulan Kami
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Solusi lengkap untuk semua kebutuhan digital marketing Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex flex-col items-center text-center p-6 shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex flex-col items-center pb-4">
              <div className="bg-indigo-100 p-3 rounded-full mb-4">
                {service.icon}
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              {service.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
