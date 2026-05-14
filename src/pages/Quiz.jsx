import { useState } from "react";

function Quiz() {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Chennai", "Delhi", "Mumbai", "Kolkata"],
      answer: "Delhi",
    },

    {
      question: "Which language is used in React?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },

    {
      question: "HTML stands for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function checkAnswer(option) {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      localStorage.setItem("quizScore", score + 1);

setShowResult(true);
    }
  }

  if (showResult) {
    return (
      <div style={{ padding: "30px" }}>
        <h1>Quiz Completed</h1>

        <h2>
          Your Score: {score} / {questions.length}
        </h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Aptitude Quiz</h1>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid lightgray",
          borderRadius: "10px",
          width: "600px",
        }}
      >
        <h2>
          Question {currentQuestion + 1}
        </h2>

        <p>{questions[currentQuestion].question}</p>

        <div style={{ marginTop: "20px" }}>
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => checkAnswer(option)}
              style={{
                display: "block",
                margin: "10px 0",
                padding: "10px",
                width: "250px",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;