
import React from 'react';
import { EditIcon, ToolsIcon } from './icons';

interface StudentInfoProps {
  fullName: string;
  className: string;
  onFullNameChange: (value: string) => void;
  onClassNameChange: (value: string) => void;
}

const InfoInput: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, value, onChange }) => (
  <div className="flex-1 min-w-[200px]">
    <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="..."
      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>
);

export const StudentInfo: React.FC<StudentInfoProps> = ({ fullName, className, onFullNameChange, onClassNameChange }) => (
  <section className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/30">
    <div className="flex items-center gap-3 mb-4">
      <EditIcon className="w-6 h-6 text-indigo-500" />
      <h2 className="text-xl font-bold text-gray-700">Informasi Siswa</h2>
    </div>
    <div className="flex flex-wrap gap-4 mb-4">
      <InfoInput label="Nama Lengkap" value={fullName} onChange={(e) => onFullNameChange(e.target.value)} />
      <InfoInput label="Kelas" value={className} onChange={(e) => onClassNameChange(e.target.value)} />
    </div>
    <div className="flex items-center gap-2 text-gray-600 bg-blue-100/50 p-3 rounded-lg">
      <ToolsIcon className="w-5 h-5 text-blue-600"/>
      <p><strong>Alat yang Digunakan:</strong> Canva / Google Slides / Docs / Photopea</p>
    </div>
    <p className="mt-4 text-sm text-gray-500"><strong>Tujuan Misi:</strong> Membuat Poster Iklan Produk Digital lengkap dengan Logo dan Nama Produk.</p>
  </section>
);
