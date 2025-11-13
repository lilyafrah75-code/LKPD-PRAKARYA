import React from 'react';
import { Question } from '../../services/data/questions';

interface Props {
  question: Question;
  onAnswer: (answer: string) => void;
  feedback: string | null;
  answered: boolean;
}

const QuestionCard: React.FC<Props> = ({ question, onAnswer, feedback, answered }) => {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            disabled={answered}
            className={
              answered
                ? option === question.answer
                  ? 'correct'
                  : 'incorrect'
                : ''
            }
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <div className="feedback">{feedback}</div>}
    </div>
  );
};

export default QuestionCard;
