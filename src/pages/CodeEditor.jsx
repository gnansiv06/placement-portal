import { useState } from "react";

export default function CodeEditor() {
  const [language, setLanguage] = useState("java");

  const code = {
    java: "System.out.println('Java');",
    python: "print('Python')",
    cpp: "cout << 'C++';",
    javascript: "console.log('JS');"
  };

  return (
    <div style={{ padding: 20 }}>

      <h2>Code Editor</h2>

      <div style={{ display: "flex", gap: 10 }}>

        <button onClick={() => setLanguage("java")}>
          Java
        </button>

        <button onClick={() => setLanguage("python")}>
          Python
        </button>

        <button onClick={() => setLanguage("cpp")}>
          C++
        </button>

        <button onClick={() => setLanguage("javascript")}>
          JavaScript
        </button>

      </div>

      <pre style={{ marginTop: 20 }}>
        {code[language]}
      </pre>

    </div>
  );
}