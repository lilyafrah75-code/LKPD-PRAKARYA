
import React from 'react';
import { PaintBrushIcon } from './icons';

export const MissionTwo: React.FC = () => (
  <section className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/30">
    <div className="flex items-center gap-3 mb-4">
      <PaintBrushIcon className="w-6 h-6 text-green-500" />
      <h2 className="text-xl font-bold text-gray-700">MISI 2: BUAT DESAIN DI CANVA</h2>
    </div>
    <div className="space-y-3 text-gray-700">
      <p><strong className="text-green-700">1. Buat Logo Produkmu:</strong> Gunakan elemen dan teks sederhana agar mudah diingat.</p>
      <p><strong className="text-green-700">2. Buat Poster Iklan:</strong> Masukkan nama produk, logo, dan 3 keunggulan produkmu.</p>
      <p><strong className="text-green-700">3. Tips:</strong> Gunakan warna kontras dan gambar menarik dari Canva.</p>
    </div>
    <div className="mt-4 bg-green-100/50 text-green-800 font-semibold p-3 rounded-lg text-center">
      Tugas Akhir: Simpan hasil desain dalam format JPG / PNG / PDF.
    </div>
  </section>
);
