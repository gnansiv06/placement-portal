import { useState } from "react";

export default function CodeEditor() {
  const [language, setLanguage] = useState("java");

  const code = {
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
    javascript: `console.log("Hello JavaScript");`
  };

  return (
    <div style={{ padding: "20px", background: "#111", color: "white", minHeight: "100vh" }}>

      <h2>Code Editor</h2>

      {/* LANGUAGE BUTTONS */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>

        <button onClick={() => setLanguage("java")}>Java</button>

        <button onClick={() => setLanguage("python")}>Python</button>

        <button onClick={() => setLanguage("cpp")}>C++</button>

        <button onClick={() => setLanguage("javascript")}>JavaScript</button>

      </div>

      {/* SHOW SELECTED LANGUAGE */}
      <h3>Selected Language: {language}</h3>

      {/* CODE DISPLAY */}
      <pre style={{ background: "#000", padding: "15px" }}>
        {code[language]}
      </pre>

    </div>
  );
}