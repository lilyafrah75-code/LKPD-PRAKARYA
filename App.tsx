
import React, { useState } from 'react';
import { Header } from './components/Header';
import { StudentInfo } from './components/StudentInfo';
import { MissionOne } from './components/MissionOne';
import { MissionTwo } from './components/MissionTwo';
import { Submission } from './components/Submission';
import { Footer } from './components/Footer';
import type { WorksheetData, TargetMarket } from './types';

const App: React.FC = () => {
  const [worksheetData, setWorksheetData] = useState<WorksheetData>({
    fullName: '',
    className: '',
    productChoice: '',
    productName: '',
    targetMarket: null,
    keywords: ['', '', ''],
    primaryColor: '',
    colorReason: '',
    designFile: null,
  });

  const updateData = <K extends keyof WorksheetData,>(key: K, value: WorksheetData[K]) => {
    setWorksheetData(prev => ({ ...prev, [key]: value }));
  };

  const updateKeyword = (index: number, value: string) => {
    const newKeywords = [...worksheetData.keywords];
    newKeywords[index] = value;
    // Fix: Cast `newKeywords` to a tuple `[string, string, string]` to satisfy TypeScript's type checker.
    // The spread syntax widens the type to `string[]`, which is incompatible with the expected tuple type.
    updateData('keywords', newKeywords as [string, string, string]);
  };

  const setTargetMarket = (value: TargetMarket) => {
    updateData('targetMarket', value);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div 
        className="min-h-screen bg-cover bg-center" 
        style={{ backgroundImage: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" }}
      >
        <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
          <Header />
          <main className="space-y-8">
            <StudentInfo
              fullName={worksheetData.fullName}
              className={worksheetData.className}
              onFullNameChange={(val) => updateData('fullName', val)}
              onClassNameChange={(val) => updateData('className', val)}
            />
            <MissionOne
              data={worksheetData}
              updateData={updateData}
              updateKeyword={updateKeyword}
              setTargetMarket={setTargetMarket}
            />
            <MissionTwo />
            <Submission 
              designFile={worksheetData.designFile} 
              onFileChange={(file) => updateData('designFile', file)}
            />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;