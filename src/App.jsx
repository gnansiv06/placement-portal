import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CodeEditor from "./pages/CodeEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/portfolio" element={<CodeEditor />} />
        <Route path="/code" element={<CodeEditor />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;