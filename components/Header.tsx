
import React from 'react';
import { ComputerIcon } from './icons';

export const Header: React.FC = () => (
  <header className="text-center mb-8 p-6 bg-white/30 backdrop-blur-sm rounded-2xl shadow-lg">
    <div className="flex justify-center items-center gap-4">
      <ComputerIcon className="w-10 h-10 text-blue-600" />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
        LEMBAR KERJA DESAIN MANDIRI
      </h1>
    </div>
    <p className="text-blue-700 font-semibold text-lg mt-2">JADI DESAINER PRODUK!</p>
  </header>
);
