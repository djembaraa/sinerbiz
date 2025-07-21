// components/Navbar.tsx
import React from "react";

// Import komponen Shadcn UI yang dibutuhkan
// Pastikan komponen ini sudah ditambahkan dengan `npx shadcn-ui@latest add button sheet`
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Import ikon dari lucide-react
import { MenuIcon } from "lucide-react"; // SunIcon dan MoonIcon dihapus

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Sinerbiz */}
        <a href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-white">Sinerbiz</span>{" "}
          {/* Teks Logo putih, ukuran lebih besar */}
        </a>

        {/* Navigasi Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {" "}
          {/* Tambahkan items-center */}
          {/* Menggunakan relative dan after untuk underline yang lebih terkontrol */}
          <a
            href="/"
            className="relative text-gray-300 hover:text-white font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="relative text-gray-300 hover:text-white font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
          >
            About
          </a>
          {/* Tautan Services sekarang juga memiliki efek hover underline */}
          <a
            href="/services"
            className="relative text-gray-300 hover:text-white font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
          >
            Services
          </a>
          <a
            href="/contact"
            className="relative text-gray-300 hover:text-white font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
          >
            Contact
          </a>
          {/* Ikon Sun/Moon (contoh untuk dark mode toggle) - Dihapus */}
          {/* Tombol Sign Up */}
          <Button className="bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg px-6 py-2 shadow-md">
            Sign Up
          </Button>
        </div>

        {/* Navigasi Mobile (Hamburger Menu) */}
        <div className="md:hidden flex items-center space-x-2">
          {" "}
          {/* Tambahkan items-center */}
          {/* Ikon Sun/Moon untuk mobile - Dihapus */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                {" "}
                {/* Tombol hamburger putih */}
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] sm:w-[300px] bg-gray-900 text-white"
            >
              {" "}
              {/* Sheet content juga gelap */}
              <nav className="flex flex-col gap-4 pt-8">
                {/* Untuk mobile, kita bisa tetap pakai hover:underline sederhana atau styling yang sama */}
                <a
                  href="/"
                  className="text-lg font-medium hover:text-indigo-400 hover:underline transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-lg font-medium hover:text-indigo-400 hover:underline transition-colors duration-200"
                >
                  About
                </a>
                {/* Tautan Services mobile juga memiliki efek hover underline */}
                <a
                  href="/services"
                  className="text-lg font-medium hover:text-indigo-400 hover:underline transition-colors duration-200"
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="text-lg font-medium hover:text-indigo-400 hover:underline transition-colors duration-200"
                >
                  Contact
                </a>
                <Button className="bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg px-6 py-2 shadow-md mt-4">
                  Sign Up
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
