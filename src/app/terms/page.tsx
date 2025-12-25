'use client'

import { ArrowLeft, FileText, CheckCircle, AlertCircle, Scale, Users, Package } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
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
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">CV DEMAK BINTORO</h1>
                  <p className="text-xs text-green-600 font-medium">Syarat & Ketentuan</p>
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Syarat dan ketentuan penggunaan layanan CV DEMAK BINTORO
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>

          {/* Terms Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            {/* Introduction */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Pendahuluan</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di CV DEMAK BINTORO. Syarat dan Ketentuan ini mengatur penggunaan semua layanan yang kami sediakan, 
                termasuk penjualan pupuk dan pemberantas hama. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini.
              </p>
            </section>

            {/* Services */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Layanan Kami</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Produk yang Tersedia:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Pupuk organik dan anorganik</li>
                    <li>Pupuk majemuk NPK</li>
                    <li>Pestisida dan insektisida</li>
                    <li>Fungisida dan herbisida</li>
                    <li>Pupuk kandang dan kompos</li>
                    <li>Konsultasi pertanian</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Layanan Pendukung:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Pengiriman produk ke lokasi pelanggan</li>
                    <li>Konsultasi penggunaan produk</li>
                    <li>Dukungan teknis dan after-sales</li>
                    <li>Informasi harga dan stok produk</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Kewajiban Pengguna</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sebagai pengguna layanan kami, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Menggunakan produk sesuai dengan petunjuk penggunaan</li>
                <li>Mematuhi semua peraturan dan hukum yang berlaku</li>
                <li>Tidak menggunakan produk untuk tujuan yang ilegal</li>
                <li>Menjaga keamanan informasi akun dan data pribadi</li>
                <li>Melaporkan masalah atau keluhan dengan benar</li>
                <li>Memahami risiko penggunaan produk pertanian</li>
              </ul>
            </section>

            {/* Ordering and Payment */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Pemesanan dan Pembayaran</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proses Pemesanan:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Pemesanan dapat dilakukan melalui telepon, email, atau langsung ke toko</li>
                    <li>Konfirmasi stok dan harga sebelum melakukan pemesanan</li>
                    <li>Pemesanan minimal sesuai dengan ketentuan yang berlaku</li>
                    <li>Pembayaran harus dilakukan sesuai dengan kesepakatan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Metode Pembayaran:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Tunai (Cash on Delivery)</li>
                    <li>Transfer bank</li>
                    <li>E-wallet (jika tersedia)</li>
                    <li>Kredit (untuk pelanggan tertentu dengan syarat)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Delivery */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Pengiriman</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ketentuan pengiriman produk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Pengiriman dilakukan ke wilayah Banyuwangi dan sekitarnya</li>
                <li>Biaya pengiriman disesuaikan dengan jarak dan volume</li>
                <li>Waktu pengiriman 1-3 hari kerja tergantung lokasi</li>
                <li>Pelanggan harus memeriksa kondisi produk saat diterima</li>
                <li>Klaim kerusakan harus diajukan maksimal 24 jam setelah penerimaan</li>
                <li>Pengiriman dapat ditunda jika cuaca buruk atau kondisi tidak memungkinkan</li>
              </ul>
            </section>

            {/* Product Quality */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Kualitas Produk</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami menjamin:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Produk yang dijual asli dan berkualitas</li>
                <li>Kemasan produk baik dan tidak rusak</li>
                <li>Produk masih dalam masa kadaluarsa yang baik</li>
                <li>Sertifikasi dan izin edar yang valid</li>
                <li>Informasi penggunaan yang jelas pada kemasan</li>
              </ul>
            </section>

            {/* Returns and Refunds */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Pengembalian dan Pengembalian Dana</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Syarat Pengembalian:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Produk rusak saat diterima</li>
                    <li>Produk tidak sesuai dengan pesanan</li>
                    <li>Produk kadaluarsa atau mendekati kadaluarsa</li>
                    <li>Klaim diajukan dalam waktu 24 jam</li>
                    <li>Bukti pembelian masih ada</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proses Pengembalian:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Laporkan masalah kepada kami segera</li>
                    <li>Sertakan bukti foto atau video kerusakan</li>
                    <li>Produk akan kami periksa dan verifikasi</li>
                    <li>Pengembalian dana atau penggantian produk</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Batasan Tanggung Jawab</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                CV DEMAK BINTORO tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Kerugian akibat penggunaan produk yang tidak sesuai petunjuk</li>
                <li>Kegagalan panen karena faktor alam atau lainnya</li>
                <li>Kerugian akibat penyimpanan produk yang tidak benar</li>
                <li>Resiko yang timbul dari aplikasi produk oleh pengguna</li>
                <li>Keterlambatan pengiriman karena force majeure</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Semua konten, merek, logo, dan materi di website dan materi promosi CV DEMAK BINTORO dilindungi oleh hukum hak cipta. 
                Anda tidak diperbolehkan menyalin, mendistribusikan, atau menggunakan materi kami tanpa izin tertulis.
              </p>
            </section>

            {/* Privacy */}
            <section className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Privasi</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Privasi Anda penting bagi kami. Penggunaan data pribadi Anda diatur dalam Kebijakan Privasi kami yang terpisah. 
                Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan data sesuai dengan kebijakan tersebut.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami berhak mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan diberitahukan melalui website, email, 
                atau pemberitahuan langsung. Penggunaan layanan kami setelah perubahan berarti Anda menyetujui syarat yang baru.
              </p>
            </section>

            {/* Contact Information */}
            <section className="space-y-4 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900">Hubungi Kami</h2>
              <p className="text-gray-600 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> demakbintaroadv2025@outlook.co.id</p>
                <p><strong>Telepon:</strong> 085285703497</p>
                <p><strong>Alamat:</strong> Jalan KH.Agus Salim, Desa/Kelurahan Tamanbaru, Kec. Banyuwangi, Kab. Banyuwangi, Provinsi Jawa Timur</p>
              </div>
            </section>

            {/* Agreement */}
            <section className="space-y-4 border-t pt-6">
              <p className="text-gray-600 leading-relaxed text-center">
                Dengan menggunakan layanan CV DEMAK BINTORO, Anda menyatakan telah membaca, memahami, 
                dan menyetujui Syarat dan Ketentuan ini.
              </p>
            </section>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8 text-gray-600">
            <p className="text-sm">
              Syarat dan Ketentuan ini berlaku untuk semua transaksi dan layanan CV DEMAK BINTORO.
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
                <FileText className="w-5 h-5 text-white" />
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