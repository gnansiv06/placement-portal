import { useState } from "react";

export default function CodeEditor() {
  const [language, setLanguage] = useState("java");

  const code = {
    java: "System.out.println('Hello Java');",
    python: "print('Hello Python')",
    cpp: "cout << 'Hello C++';",
    javascript: "console.log('Hello JS');"
  };

  return (
    <div style={{ padding: 20 }}>

      <h2>Code Editor</h2>

      {/* LANGUAGE BUTTONS */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>

        <button onClick={() => setLanguage("java")}>Java</button>
        <button onClick={() => setLanguage("python")}>Python</button>
        <button onClick={() => setLanguage("cpp")}>C++</button>
        <button onClick={() => setLanguage("javascript")}>JavaScript</button>

      </div>

      {/* CODE OUTPUT */}
      <pre>
        {code[language]}
      </pre>

    </div>
  );
}