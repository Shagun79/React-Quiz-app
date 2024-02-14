import React, { useState } from "react";
import QuestionData from "./array.js";
import "./QuizApp.css";

export const QuizApp = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [correctAnswerClicked, setCorrectAnswerClicked] = useState(false);
  const [showResult, setshowResult] = useState(false);

  const resetAll = () => {
    setshowResult(false);
    setcurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
  };

  const handleNextbtn = () => {
    if (currentQuestion < QuestionData.length - 1) {
      setcurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
      setCorrectAnswerClicked(false);
    } else {
      setshowResult(true);
    }
  };

  const checkAnswer = () => {
    if (
      QuestionData[currentQuestion].options[clickedOption - 1] ===// jis option ko hum click kiye hai  wo  que. ke ans se math ho rha ya nhi
      QuestionData[currentQuestion].answer
    ) {
      console.log(QuestionData[currentQuestion].answer, "check");
      setScore(score + 1);// ahar shi rha oth score el badh jaega
      setCorrectAnswerClicked(true);// to determine color for options 
    }
  };

  return (
    <div className="box">
      <h1>Quiz App</h1>
      {showResult ? (
        <div>
          <h1>
            Your Score is {score} out of {QuestionData.length}. Try again!
          </h1>
          <button className="next" onClick={resetAll}>
            Try Again!
          </button>
        </div>
      ) : (
        <div>
          <div className="question">
            <h1>
              <span id="Que-number"> {currentQuestion + 1 + ":"} </span>
              <span className="Que-text">
                {QuestionData[currentQuestion].question}{" "}
              </span>
            </h1>
          </div>

          <div className="options">
            {QuestionData[currentQuestion].options.map((value, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    // yha pe hum directly options //
                    setClickedOption(i + 1);
                    checkAnswer();
                  }}
                  style={{
                    backgroundColor:
                      correctAnswerClicked && i + 1 === clickedOption
                        ? "green" // Correct answer clicked
                        : correctAnswerClicked && i + 1 !== clickedOption
                        ? "crimson" // Incorrect answer clicked
                        : "",
                  }}
                >
                  {value}
                </button>
              );
            })}
          </div>

          <button className="next" onClick={handleNextbtn}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};
