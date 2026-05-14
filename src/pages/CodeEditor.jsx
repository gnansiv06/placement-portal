import { useState } from "react";

function CodeEditor() {
  const [language, setLanguage] = useState("java");
  const [code, setCode] = useState("");

  function handleReset() {
    setCode("");
  }

  function handleRun() {
    alert(`${language.toUpperCase()} code executed (demo mode) 🚀`);
  }

  const defaultCode = {
    java: `class Main {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}`,
    cpp: `#include<iostream>
using namespace std;

int main() {
    cout << "Hello C++";
    return 0;
}`,
    python: `print("Hello Python")`,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6">

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl w-full max-w-3xl">

        {/* Language Buttons */}
        <div className="flex gap-4 mb-4 flex-wrap">

          <button
            onClick={() => setLanguage("java")}
            className="bg-blue-600 px-4 py-2 rounded-lg"
          >
            Java
          </button>

          <button
            onClick={() => setLanguage("cpp")}
            className="bg-purple-600 px-4 py-2 rounded-lg"
          >
            C++
          </button>

          <button
            onClick={() => setLanguage("python")}
            className="bg-green-600 px-4 py-2 rounded-lg"
          >
            Python
          </button>

        </div>

        {/* Code Editor */}
        <textarea
          value={code || defaultCode[language]}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-64 p-4 text-black rounded-lg"
        ></textarea>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">

          <button
            onClick={handleRun}
            className="bg-blue-600 px-6 py-2 rounded-lg"
          >
            Run Code
          </button>

          <button
            onClick={handleReset}
            className="bg-red-600 px-6 py-2 rounded-lg"
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default CodeEditor;