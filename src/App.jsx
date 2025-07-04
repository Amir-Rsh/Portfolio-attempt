import HomePage from "./components/HomePage";
import IntroPage from "./components/IntroPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ThesisPage from "./components/ThesisPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/thesis" element={<ThesisPage />} />
      </Routes>
    </>
  );
}

export default App;
