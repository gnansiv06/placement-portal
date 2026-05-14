import { useState } from "react";

function CodeEditor() {
  const [language, setLanguage] = useState("java");
  const [output, setOutput] = useState("");

  const codeSamples = {
    java: `class Main {
  public static void main(String[] args) {
    System.out.println("Hello Java");
  }
}`,
    python: `print("Hello Python")`,
    cpp: `#include<iostream>
using namespace std;

int main() {
    cout << "Hello C++";
    return 0;
}`,
    javascript: `console.log("Hello JavaScript");`,
  };

  function handleRun() {
    if (language === "java") setOutput("Output:\nHello Java");
    else if (language === "python") setOutput("Output:\nHello Python");
    else if (language === "cpp") setOutput("Output:\nHello C++");
    else setOutput("Output:\nHello JavaScript");
  }

  function handleReset() {
    setOutput("");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">

      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl w-full max-w-3xl">

        {/* LANGUAGE BUTTONS (JAVA WILL SHOW ALWAYS) */}
        <div className="flex gap-3 mb-4 flex-wrap">

          <button
            onClick={() => setLanguage("java")}
            className={`px-4 py-2 rounded-lg ${
              language === "java" ? "bg-blue-700" : "bg-blue-500"
            }`}
          >
            Java
          </button>

          <button
            onClick={() => setLanguage("python")}
            className={`px-4 py-2 rounded-lg ${
              language === "python" ? "bg-green-700" : "bg-green-500"
            }`}
          >
            Python
          </button>

          <button
            onClick={() => setLanguage("cpp")}
            className={`px-4 py-2 rounded-lg ${
              language === "cpp" ? "bg-purple-700" : "bg-purple-500"
            }`}
          >
            C++
          </button>

          <button
            onClick={() => setLanguage("javascript")}
            className={`px-4 py-2 rounded-lg ${
              language === "javascript" ? "bg-yellow-600" : "bg-yellow-400"
            }`}
          >
            JavaScript
          </button>

        </div>

        {/* CODE BOX */}
        <textarea
          value={codeSamples[language]}
          readOnly
          className="w-full h-64 p-4 text-black rounded-lg font-mono"
        />

        {/* ACTION BUTTONS */}
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

        {/* OUTPUT */}
        <div className="mt-4 bg-black text-green-400 p-4 rounded-lg h-32 overflow-auto">
          {output || "Output will appear here..."}
        </div>

      </div>

    </div>
  );
}

export default CodeEditor;