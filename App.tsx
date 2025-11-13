import React from 'react';
import Quiz from './components/Quiz/Quiz';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Informatics Quiz</h1>
      </header>
      <main>
        <Quiz />
      </main>
    </div>
  );
};

export default App;
