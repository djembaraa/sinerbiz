// components/Footer.tsx
import React from "react";
import { Building, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import ikon dari lucide-react

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-900 pt-16 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Kolom 1: Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-3 mb-4">
              <Building className="h-8 w-8 text-[#173362]" />
              <span className="text-2xl font-bold text-[#173362]">
                Sinerbiz
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-xs">
              One Stop Digital Marketing Solution. Purwokerto, Indonesia.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#173362] mb-6">
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-500 hover:text-[#173362] transition-colors duration-200"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-500 hover:text-[#173362] transition-colors duration-200"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-500 hover:text-[#173362] transition-colors duration-200"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-gray-500 hover:text-[#173362] transition-colors duration-200"
                >
                  Harga
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-500 hover:text-[#173362] transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Services */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#173362] mb-6">
              Layanan
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/services/web-development"
                  className="text-gray-500 hover:text-[#173362] transition-colors duration-200"
                >
                  Pengembangan Web
                </a>
              </li>
              <li>
                <a
                  href="/services/mobile-apps"
                  className="text-gray-500 hover:text-[#173362] transition-colors duration-200"
                >
                  Aplikasi Mobile
                </a>
              </li>
              <li>
                <a
                  href="/services/ui-ux-design"
                  className="text-gray-500 hover:text-[#173362] transition-colors duration-200"
                >
                  Desain UI/UX
                </a>
              </li>
              <li>
                <a
                  href="/services/digital-marketing"
                  className="text-gray-500 hover:text-[#173362] transition-colors duration-200"
                >
                  Pemasaran Digital
                </a>
              </li>
              <li>
                <a
                  href="/services/cloud-solutions"
                  className="text-gray-500 hover:text-[#173362] transition-colors duration-200"
                >
                  Solusi Cloud
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Contact Us */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#173362] mb-6">
              Hubungi Kami
            </h3>
            <address className="not-italic space-y-3 text-gray-500">
              <p>Jl. Lesanpura No.3A, Kalibiru</p>
              <p>Purwokerto Selatan, Kabupaten Banyumas</p>
              <p>Jawa Tengah, 53145</p>
              <p>
                Email:{" "}
                <a href="mailto:info@sinerbiz.com" className="hover:text-white">
                  info@sinerbiz.com
                </a>
              </p>
              <p>Telepon: +1 (123) 456-7890</p>
            </address>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-gray-700 my-8" />

        {/* Bagian Copyright dan Kebijakan */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <p>
            Designed by{" "}
            <a href="https://djembaraa-djembaraas-projects.vercel.app/">
              {" "}
              djembaraa{" "}
            </a>
          </p>
          <div className="flex space-x-6">
            <a
              href="/privacy-policy"
              className="hover:text-[#173362] transition-colors duration-200"
            >
              Kebijakan Privasi
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-[#173362] transition-colors duration-200"
            >
              Syarat & Ketentuan
            </a>
            <a
              href="/cookies"
              className="hover:text-[#173362] transition-colors duration-200"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
