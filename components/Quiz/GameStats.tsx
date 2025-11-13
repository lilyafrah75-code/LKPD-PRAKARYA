import React from 'react';

interface Props {
  score: number;
  lives: number;
}

const GameStats: React.FC<Props> = ({ score, lives }) => {
  return (
    <div className="game-stats">
      <div className="stat">
        <span className="label">Skor:</span>
        <span className="value">{score}</span>
      </div>
      <div className="stat">
        <span className="label">Nyawa:</span>
        <span className="value">{'❤️'.repeat(lives)}</span>
      </div>
    </div>
  );
};

export default GameStats;
