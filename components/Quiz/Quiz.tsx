import React, { useState } from "react";
import { quizQuestions } from "../../services/data/questions";
import QuestionCard from "./QuestionCard";
import GameStats from "./GameStats";

const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answered) return;

    const isCorrect = answer === quizQuestions[currentQuestionIndex].answer;
    const rationale = quizQuestions[currentQuestionIndex].rationale;

    if (isCorrect) {
      setScore(score + 10);
      setFeedback(`Benar! ${rationale}`);
    } else {
      setLives(lives - 1);
      setFeedback(`Salah. ${rationale}`);
      if (lives - 1 === 0) {
        setShowResults(true);
      }
    }
    setUserAnswers([...userAnswers, answer]);
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setAnswered(false);
      setFeedback(null);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setLives(3);
    setShowResults(false);
    setUserAnswers([]);
    setFeedback(null);
    setAnswered(false);
  };

  if (showResults) {
    return (
      <div className="results">
        <h2>{lives === 0 ? "Game Over" : "Kuis Selesai!"}</h2>
        <p>Skor Akhir Anda: {score}</p>
        <button onClick={handleRestart}>Main Lagi</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <GameStats score={score} lives={lives} />
      <QuestionCard
        question={quizQuestions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        feedback={feedback}
        answered={answered}
      />
      {answered && (
        <button onClick={handleNextQuestion} className="next-button">
          Lanjut
        </button>
      )}
    </div>
  );
};

export default Quiz;
