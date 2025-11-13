import React from 'react';
import { quizQuestions, Question } from '../../services/data/questions';

interface Props {
  userAnswers: string[];
}

const ItemAnalysis: React.FC<Props> = ({ userAnswers }) => {
  return (
    <div className="item-analysis">
      <h3>Item Analysis</h3>
      {quizQuestions.map((question: Question, index: number) => {
        const isCorrect = userAnswers[index] === question.answer;
        return (
          <div key={question.id}>
            <p><strong>{question.question}</strong></p>
            <p>Correct Answers: {isCorrect ? '100%' : '0%'}</p>
            <p>Incorrect Answers: {isCorrect ? '0%' : '100%'}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemAnalysis;
