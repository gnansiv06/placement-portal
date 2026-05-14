import { useState } from "react";

function JavaQuiz() {
  const questions = [
    {
      q: "What is the size of int in Java?",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
      answer: "4 bytes",
    },
    {
      q: "Which keyword is used to inherit a class in Java?",
      options: ["this", "super", "extends", "implements"],
      answer: "extends",
    },
    {
      q: "Which is not a Java feature?",
      options: ["Object-oriented", "Platform independent", "Pointers", "Robust"],
      answer: "Pointers",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  function handleAnswer(option) {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShow(true);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-white">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl w-[500px] text-center">

        {show ? (
          <div>
            <h1 className="text-3xl font-bold">Quiz Completed 🎉</h1>
            <p className="mt-4 text-xl">Your Score: {score}/{questions.length}</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-6">
              {questions[current].q}
            </h2>

            <div className="flex flex-col gap-3">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default JavaQuiz;