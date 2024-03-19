import HomePage from "./components/HomePage";
import IntroPage from "./components/IntroPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/topics/:topic" element={<ListOfArticles />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>

      {/* <HomePage /> */}
    </>
  );
}

export default App;
