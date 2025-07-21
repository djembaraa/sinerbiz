// app/page.tsx
import HeroSection from "@/components/HeroSection"; // Import komponen HeroSection

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {" "}
      {/* Gunakan flex-col untuk menumpuk HeroSection dan konten lain */}
      <HeroSection />
      {/* Anda bisa menambahkan konten lain yang spesifik untuk halaman Beranda di bawah HeroSection */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Layanan Unggulan Kami
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Sinerbiz menawarkan berbagai solusi inovatif yang dirancang khusus
          untuk memenuhi kebutuhan bisnis Anda dan mendorong pertumbuhan yang
          berkelanjutan.
        </p>
        {/* Di sini Anda bisa menambahkan komponen untuk menampilkan daftar layanan unggulan, testimoni, dll. */}
        {/* Misalnya, Anda bisa membuat komponen <FeaturedServices /> atau <Testimonials /> */}
      </section>
      {/* Contoh bagian lain di halaman Beranda */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-8">
            Mengapa Memilih Sinerbiz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contoh Card menggunakan Shadcn UI */}
            {/* Pastikan Anda sudah `npx shadcn-ui@latest add card` */}
            {/*
            <Card className="p-6 shadow-md rounded-lg">
              <CardHeader>
                <CardTitle>Inovasi</CardTitle>
              </CardHeader>
              <CardContent>
                Kami selalu mencari cara baru dan lebih baik untuk membantu bisnis Anda berkembang.
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md rounded-lg">
              <CardHeader>
                <CardTitle>Keandalan</CardTitle>
              </CardHeader>
              <CardContent>
                Solusi kami dibangun dengan standar kualitas tertinggi untuk performa optimal.
              </CardContent>
            </Card>
            <Card className="p-6 shadow-md rounded-lg">
              <CardHeader>
                <CardTitle>Dukungan Penuh</CardTitle>
              </CardHeader>
              <CardContent>
                Tim ahli kami siap memberikan dukungan penuh kapan pun Anda membutuhkannya.
              </CardContent>
            </Card>
            */}
            <div className="p-6 shadow-md rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-2">Inovasi</h3>
              <p className="text-gray-600">
                Kami selalu mencari cara baru dan lebih baik untuk membantu
                bisnis Anda berkembang.
              </p>
            </div>
            <div className="p-6 shadow-md rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-2">Keandalan</h3>
              <p className="text-gray-600">
                Solusi kami dibangun dengan standar kualitas tertinggi untuk
                performa optimal.
              </p>
            </div>
            <div className="p-6 shadow-md rounded-lg bg-white">
              <h3 className="text-xl font-semibold mb-2">Dukungan Penuh</h3>
              <p className="text-gray-600">
                Tim ahli kami siap memberikan dukungan penuh kapan pun Anda
                membutuhkannya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
