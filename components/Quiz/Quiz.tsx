import React, { useState } from "react";
import { quizQuestions } from "../../services/data/questions";
import ItemAnalysis from "./ItemAnalysis";
import QuestionCard from "./QuestionCard";

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    setUserAnswers([...userAnswers, answer]);
    if (answer === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setUserAnswers([]);
  };

  if (showResults) {
    return (
      <div className="results">
        <h2>Quiz Complete!</h2>
        <p>Your score: {score} out of {quizQuestions.length}</p>
        <div className="answer-key">
          <h3>Answer Key:</h3>
          {quizQuestions.map((question, index) => (
            <div key={question.id}>
              <p><strong>{question.question}</strong></p>
              <p>Your answer: {userAnswers[index]}</p>
              <p>Correct answer: {question.answer}</p>
            </div>
          ))}
        </div>
        <button onClick={handleRestart}>Restart Quiz</button>
<ItemAnalysis userAnswers={userAnswers} />
      </div>
    );
  }

  return (
    <div className="quiz">
      <QuestionCard
        question={quizQuestions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
