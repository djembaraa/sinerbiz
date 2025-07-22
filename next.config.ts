/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // Mungkin sudah ada jika Anda menggunakan gambar Unsplash
      "placehold.co", // Mungkin sudah ada jika Anda menggunakan placeholder
      "blnnzbbbhhmojerscrlh.supabase.co", // <--- TAMBAHKAN HOSTNAME INI
    ],
  },
};

module.exports = nextConfig;
