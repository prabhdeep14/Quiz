import React, { useState } from 'react';
import quizData from './quizData';
import './App.css';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption('');
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption('');
    setScore(0);
    setIsQuizFinished(false);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="quiz-container">
      {!isQuizFinished ? (
        <div>
          <h2>{currentQuestion.question}</h2>
          <div className="option-container">
            {currentQuestion.options.map((option, index) => (
              <label key={index} className="option-label">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <span className="option-number">{index + 1}.</span> {/* Option number */}
                <span className="option-text">{option}</span> {/* Option text */}
              </label>
            ))}
          </div>
          <button onClick={handleSubmit}>Next</button>
        </div>
      ) : (
        <div className="score-container">
          <h2>Quiz Finished</h2>
          <p>Your Score: {score}/{quizData.length}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
