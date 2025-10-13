
import React, { useState } from 'react';
import type { WorksheetData, TargetMarket } from '../types';
import { generateProductIdeas } from '../services/geminiService';
import { BulbIcon, SparklesIcon, LoadingIcon } from './icons';

interface MissionOneProps {
  data: WorksheetData;
  updateData: <K extends keyof WorksheetData>(key: K, value: WorksheetData[K]) => void;
  updateKeyword: (index: number, value: string) => void;
  setTargetMarket: (value: TargetMarket) => void;
}

const targetMarkets: TargetMarket[] = ['Anak-anak', 'Remaja', 'Dewasa'];

const InputField: React.FC<{ label: string; value: string; placeholder?: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, value, placeholder = "...", onChange }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-600 mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>
);

export const MissionOne: React.FC<MissionOneProps> = ({ data, updateData, updateKeyword, setTargetMarket }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateIdeas = async () => {
    if (!data.productChoice) {
      setError("Harap masukkan ide produk terlebih dahulu!");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const ideas = await generateProductIdeas(data.productChoice);
      updateData('productName', ideas.productName);
      updateData('targetMarket', ideas.targetMarket);
      updateData('keywords', ideas.keywords);
      updateData('primaryColor', ideas.primaryColor);
      updateData('colorReason', ideas.colorReason);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/30">
      <div className="flex items-center gap-3 mb-4">
        <BulbIcon className="w-6 h-6 text-yellow-500" />
        <h2 className="text-xl font-bold text-gray-700">MISI 1: TENTUKAN PRODUK & IDE</h2>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Produk yang Kamu Pilih</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={data.productChoice}
              onChange={(e) => updateData('productChoice', e.target.value)}
              placeholder="Contoh: Aplikasi belajar matematika"
              className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleGenerateIdeas}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-md shadow-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <LoadingIcon className="w-5 h-5 animate-spin" /> : <SparklesIcon className="w-5 h-5" />}
              <span>{isLoading ? 'Mencari Ide...' : 'Bantu Aku Cari Ide!'}</span>
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Nama Produk Kerenmu" value={data.productName} onChange={(e) => updateData('productName', e.target.value)} />
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Target Pasar</label>
            <div className="flex items-center gap-4 bg-white p-2 rounded-md border border-gray-300">
              {targetMarkets.map((market) => (
                <label key={market} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="targetMarket"
                    value={market}
                    checked={data.targetMarket === market}
                    onChange={() => setTargetMarket(market)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <span className="text-gray-700">{market}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Tiga Kata Kunci Produk</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {data.keywords.map((kw, i) => (
              <input
                key={i}
                type="text"
                value={kw}
                onChange={(e) => updateKeyword(i, e.target.value)}
                placeholder={`Kata kunci ${i + 1}`}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
        </div>

        <div className="bg-amber-100/50 p-4 rounded-lg border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-2">KONSEP WARNA</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                    <label className="text-sm font-semibold text-gray-600 whitespace-nowrap">Warna Utama:</label>
                    <input type="text" value={data.primaryColor} onChange={(e) => updateData('primaryColor', e.target.value)} placeholder="#..." className="w-full px-3 py-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                    {data.primaryColor.startsWith("#") && <div className="w-6 h-6 rounded-md border border-gray-300" style={{ backgroundColor: data.primaryColor }}></div>}
                </div>
                <InputField label="Alasan Memilih Warna" value={data.colorReason} onChange={(e) => updateData('colorReason', e.target.value)} />
            </div>
        </div>

      </div>
    </section>
  );
};
