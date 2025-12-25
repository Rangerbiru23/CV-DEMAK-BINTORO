'use client'

import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Cookie } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">CV DEMAK BINTORO</h1>
                  <p className="text-xs text-green-600 font-medium">Privacy Policy</p>
                </div>
              </Link>
            </div>

            {/* Back Button */}
            <Link 
              href="/"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              CV DEMAK BINTORO berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>

          {/* Privacy Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            {/* Introduction */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Pendahuluan</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di CV DEMAK BINTORO. Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.
              </p>
            </section>

            {/* Data Collection */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Pengumpulan Data</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data yang Kami Kumpulkan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Nama lengkap dan informasi identifikasi pribadi</li>
                    <li>Informasi kontak (nomor telepon, email, alamat)</li>
                    <li>Informasi pembayaran dan transaksi</li>
                    <li>Data penggunaan website dan layanan</li>
                    <li>Informasi teknologi (IP address, browser, device)</li>
                    <li>Data komunikasi (pesan, email, panggilan)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cara Pengumpulan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Formulir pendaftaran dan kontak</li>
                    <li>Transaksi pembelian produk</li>
                    <li>Komunikasi langsung dengan pelanggan</li>
                    <li>Analisis penggunaan website secara otomatis</li>
                    <li>Cookie dan teknologi pelacakan lainnya</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Penggunaan Data</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami menggunakan data pribadi Anda untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Memproses dan menyelesaikan transaksi pembelian</li>
                <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                <li>Mengirim informasi produk dan penawaran khusus</li>
                <li>Meningkatkan kualitas produk dan layanan kami</li>
                <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                <li>Melindungi keamanan dan integritas sistem kami</li>
                <li>Analisis bisnis dan pengembangan produk</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas untuk authorized personnel saja</li>
                <li>Firewall dan sistem keamanan berlapis</li>
                <li>Backup data secara berkala dan aman</li>
                <li>Audit keamanan rutin</li>
                <li>Komitmen kepatuhan terhadap standar keamanan industri</li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Kebijakan Cookie</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Website kami menggunakan cookie untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Mengingat preferensi dan pengaturan Anda</li>
                <li>Menganalisis penggunaan website untuk peningkatan layanan</li>
                <li>Menyediakan konten yang dipersonalisasi</li>
                <li>Memastikan keamanan dan mencegah aktivitas mencurigakan</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
              </p>
            </section>

            {/* User Rights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Hak Anda sebagai Pengguna</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sebagai pengguna, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
                <li>Memperbaiki data yang tidak akurat atau tidak lengkap</li>
                <li>Menghapus data pribadi Anda (dalam batasan yang berlaku)</li>
                <li>Menolak pengolahan data untuk tujuan pemasaran</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Menarik persetujuan pengolahan data kapan saja</li>
                <li>Mengajukan keluhan kepada otoritas perlindungan data</li>
              </ul>
            </section>

            {/* Third Parties */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Pihak Ketiga</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami dapat berbagi data Anda dengan pihak ketiga tepercaya untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Penyedia layanan pembayaran</li>
                <li>Jasa pengiriman dan logistik</li>
                <li>Platform analisis dan marketing</li>
                <li>Otoritas pemerintah (jika diwajibkan oleh hukum)</li>
                <li>Partner bisnis dengan persetujuan Anda</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Kami memastikan semua pihak ketiga mematuhi standar keamanan dan privasi yang sama.
              </p>
            </section>

            {/* Policy Updates */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Pembaruan Kebijakan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Pemberitahuan di website kami</li>
                <li>Email ke alamat yang terdaftar</li>
                <li>Pemberitahuan langsung saat Anda mengakses layanan</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Penggunaan layanan kami setelah pembaruan berarti Anda menyetujui kebijakan yang baru.
              </p>
            </section>

            {/* Contact Information */}
            <section className="space-y-4 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900">Hubungi Kami</h2>
              <p className="text-gray-600 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlindungan data pribadi Anda, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> demakbintaroadv2025@outlook.co.id</p>
                <p><strong>Telepon:</strong> 085285703497</p>
                <p><strong>Alamat:</strong> Jalan KH.Agus Salim, Desa/Kelurahan Tamanbaru, Kec. Banyuwangi, Kab. Banyuwangi, Provinsi Jawa Timur</p>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 text-gray-600">
            <p className="text-sm">
              Kebijakan Privasi ini berlaku untuk semua layanan CV DEMAK BINTORO dan website terkait.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold">CV DEMAK BINTORO</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Partner terpercaya untuk kebutuhan pertanian Anda
            </p>
            <div className="text-gray-500 text-xs">
              &copy; 2024 CV DEMAK BINTORO. Hak Cipta Dilindungi.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}