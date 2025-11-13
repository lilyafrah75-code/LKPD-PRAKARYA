import React from "react";
import { Question } from "../../services/data/questions";

interface Props {
  question: Question;
  onAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<Props> = ({ question, onAnswer }) => {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button key={option} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
