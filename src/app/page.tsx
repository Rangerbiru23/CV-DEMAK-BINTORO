'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, Leaf, Shield, Sprout, Truck, ChevronRight, Star, CheckCircle } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CV DEMAK BINTORO</h1>
                <p className="text-xs text-green-600 font-medium">Pupuk & Pemberantas Hama</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Tentang</a>
              <a href="#produk" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Produk</a>
              <a href="#kontak" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Kontak</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-3">
                <a href="#beranda" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Beranda</a>
                <a href="#tentang" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Tentang</a>
                <a href="#produk" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Produk</a>
                <a href="#kontak" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Kontak</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Solusi Terbaik untuk
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                    {" "}Pertanian Anda
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  CV DEMAK BINTORO - Partner terpercaya untuk pupuk berkualitas dan pemberantas hama efektif. 
                  Tingkatkan hasil panen Anda dengan produk unggulan kami!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                  Hubungi Kami
                </button>
                <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors">
                  Lihat Produk
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Pelanggan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Produk</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 md:h-full min-h-[400px] bg-gradient-to-br from-green-200 to-emerald-300 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <img src="/logo.png" alt="CV DEMAK BINTORO" className="w-24 h-24 object-contain" />
                  </div>
                  <p className="text-white font-semibold text-lg">Logo Perusahaan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen menyediakan produk pertanian terbaik dengan kualitas terjamin dan harga kompetitif
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pupuk Berkualitas</h3>
              <p className="text-gray-600 leading-relaxed">
                Pupuk organik dan anorganik dengan kualitas terbaik untuk meningkatkan kesuburan tanah dan hasil panen
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pemberantas Hama</h3>
              <p className="text-gray-600 leading-relaxed">
                Produk pestisida aman dan efektif untuk melindungi tanaman dari hama dan penyakit
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pengiriman Cepat</h3>
              <p className="text-gray-600 leading-relaxed">
                Layanan pengiriman cepat dan tepat waktu ke seluruh wilayah Banyuwangi dan sekitarnya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai produk pertanian berkualitas untuk kebutuhan pertanian Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Pupuk Urea", category: "Pupuk Anorganik", color: "from-blue-500 to-cyan-600" },
              { name: "Pupuk NPK", category: "Pupuk Majemuk", color: "from-purple-500 to-pink-600" },
              { name: "Pupuk Kandang", category: "Pupuk Organik", color: "from-green-500 to-emerald-600" },
              { name: "Pestisida", category: "Pemberantas Hama", color: "from-red-500 to-orange-600" },
              { name: "Fungisida", category: "Pemberantas Penyakit", color: "from-yellow-500 to-amber-600" },
              { name: "Herbisida", category: "Pemberantas Gulma", color: "from-indigo-500 to-purple-600" },
              { name: "Pupuk Kompos", category: "Pupuk Organik", color: "from-green-600 to-teal-600" },
              { name: "Insektisida", category: "Pemberantas Serangga", color: "from-orange-500 to-red-600" }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`h-32 bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                  <Sprout className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">{product.name}</h3>
                  <button className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">CV DEMAK BINTORO</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                CV DEMAK BINTORO adalah perusahaan yang bergerak di bidang perdagangan eceran pupuk dan pemberantas hama. 
                Dengan pengalaman bertahun-tahun, kami telah menjadi mitra terpercaya bagi para petani di wilayah Banyuwangi dan sekitarnya.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami menyediakan berbagai produk pertanian berkualitas dengan harga kompetitif. Komitmen kami adalah membantu 
                meningkatkan produktivitas pertanian melalui produk-produk unggulan dan layanan terbaik.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Produk berkualitas terjamin</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Harga kompetitif</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Pelayanan prima</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Pengiriman tepat waktu</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-gray-700 font-medium">Kepuasan Pelanggan</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">4.8</div>
                    <p className="text-sm text-gray-600">Rating</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <Truck className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">24 Jam</div>
                    <p className="text-sm text-gray-600">Pengiriman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap melayani kebutuhan pertanian Anda. Hubungi kami sekarang!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Alamat</p>
                    <p className="text-gray-600">Jalan KH.Agus Salim, Desa/Kelurahan Tamanbaru, Kec. Banyuwangi, Kab. Banyuwangi, Provinsi Jawa Timur</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telepon</p>
                    <p className="text-gray-600">085285703497</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">demakbintaroadv2025@outlook.co.id</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Email Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Pesan Anda"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">CV DEMAK BINTORO</h3>
                  <p className="text-xs text-green-400">Pupuk & Pemberantas Hama</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Partner terpercaya untuk kebutuhan pertanian Anda
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Pupuk Organik</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pupuk Anorganik</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pestisida</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konsultasi</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
                <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>085285703497</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>demakbintaroadv2025@outlook.co.id</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>Banyuwangi, Jawa Timur</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 CV DEMAK BINTORO. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}