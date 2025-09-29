"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Masukkan email Anda!");
    alert(`Terima kasih sudah subscribe, ${email}!`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 bg-[length:400%_400%] animate-gradient text-white">
      {/* Tambahkan animasi gradient */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 10s ease infinite;
        }
      `}</style>

      {/* Navbar */}
      <header className="w-full py-4 px-8 flex justify-between items-center bg-opacity-20 backdrop-blur-md fixed top-0 z-50">
        <h1 className="text-2xl font-extrabold tracking-wide">NextStartup</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#home" className="hover:text-gray-300 transition">Home</a>
          <a href="#features" className="hover:text-gray-300 transition">Features</a>
          <a href="#pricing" className="hover:text-gray-300 transition">Pricing</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center h-screen px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Solusi Digital untuk Masa Depan 🚀
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-gray-200">
          Bangun startup Anda dengan platform modern, cepat, dan terpercaya.
        </p>
        <button
          onClick={() => window.location.href = "#pricing"}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold shadow-lg"
        >
          Mulai Sekarang
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white text-gray-800">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-800">Fitur Unggulan</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">⚡ Cepat</h4>
            <p>Aplikasi berjalan dengan performa tinggi berkat teknologi modern.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">🔒 Aman</h4>
            <p>Keamanan data Anda adalah prioritas kami dengan enkripsi canggih.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-2">🌍 Skalabel</h4>
            <p>Didesain untuk berkembang bersama bisnis Anda ke level global.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-r from-blue-800 to-blue-700">
        <h3 className="text-3xl font-bold text-center mb-12">Paket Harga</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg text-center">
            <h4 className="text-xl font-bold mb-2">Basic</h4>
            <p className="text-3xl font-bold mb-4">Rp 100K</p>
            <ul className="mb-6 space-y-2">
              <li>✔ Akses fitur standar</li>
              <li>✔ Support Email</li>
              <li>✘ Tidak ada custom domain</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              Pilih Paket
            </button>
          </div>
          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg text-center border-4 border-blue-600">
            <h4 className="text-xl font-bold mb-2">Pro</h4>
            <p className="text-3xl font-bold mb-4">Rp 250K</p>
            <ul className="mb-6 space-y-2">
              <li>✔ Semua fitur Basic</li>
              <li>✔ Custom domain</li>
              <li>✔ Support 24/7</li>
            </ul>
            <button className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800">
              Pilih Paket
            </button>
          </div>
          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg text-center">
            <h4 className="text-xl font-bold mb-2">Enterprise</h4>
            <p className="text-3xl font-bold mb-4">Rp 500K</p>
            <ul className="mb-6 space-y-2">
              <li>✔ Semua fitur Pro</li>
              <li>✔ Integrasi API</li>
              <li>✔ Konsultasi khusus</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              Pilih Paket
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center bg-white text-gray-800">
        <h3 className="text-3xl font-bold mb-6 text-blue-800">Tentang Kami</h3>
        <p className="max-w-3xl mx-auto text-lg">
          NextStartup adalah platform digital yang membantu bisnis berkembang lebih cepat dengan teknologi modern. Kami percaya setiap ide hebat pantas diwujudkan dengan solusi terbaik.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center bg-gradient-to-r from-blue-800 to-blue-700">
        <h3 className="text-3xl font-bold mb-6">Hubungi Kami</h3>
        <p className="mb-6">Masukkan email Anda untuk mendapatkan update terbaru.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-blue-900 text-gray-300">
        <p>© {new Date().getFullYear()} NextStartup. All Rights Reserved.</p>
      </footer>
    </div>
  );
}