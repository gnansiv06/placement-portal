import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import ResumeBuilder from "./pages/ResumeBuilder";
import About from "./pages/About";
import JavaQuiz from "./pages/JavaQuiz";
import CodeEditor from "./pages/CodeEditor";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      {/* Dark overlay for ALL pages */}
      <div className="min-h-screen bg-black/70">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/about" element={<About />} />
          <Route path="/java-quiz" element={<JavaQuiz />} />
          <Route path="/code" element={<CodeEditor />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;