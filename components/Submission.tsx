
import React, { useState, useCallback, useRef } from 'react';
import { UploadIcon, PaperClipIcon } from './icons';

interface SubmissionProps {
  designFile: File | null;
  onFileChange: (file: File | null) => void;
}

export const Submission: React.FC<SubmissionProps> = ({ designFile, onFileChange }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileChange(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [onFileChange]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/30">
      <div className="flex items-center gap-3 mb-4">
        <PaperClipIcon className="w-6 h-6 text-red-500" />
        <h2 className="text-xl font-bold text-gray-700">HASIL KERJA</h2>
      </div>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/jpg"
          className="hidden"
        />
        {preview ? (
          <div>
            <img src={preview} alt="Design preview" className="max-w-full max-h-64 mx-auto rounded-md shadow-lg" />
            <p className="text-sm text-gray-500 mt-2">{designFile?.name}</p>
            <button
              onClick={handleButtonClick}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition"
            >
              Ganti Gambar
            </button>
          </div>
        ) : (
          <div>
            <UploadIcon className="w-12 h-12 mx-auto text-gray-400"/>
            <p className="mt-2 text-gray-600">Lampirkan hasil desainmu (JPG/PNG) di sini.</p>
            <button
              onClick={handleButtonClick}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 transition"
            >
              <UploadIcon className="w-5 h-5"/>
              Pilih File
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
