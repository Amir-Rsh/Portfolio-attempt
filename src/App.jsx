import HomePage from "./components/HomePage";
import IntroPage from "./components/IntroPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ThesisPage from "./components/ThesisPage";
import ThesisPage2 from "./components/ThesisPage2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/thesis" element={<ThesisPage />} />
        <Route path="/thesis2" element={<ThesisPage2 />} />
      </Routes>
    </>
  );
}

export default App;
