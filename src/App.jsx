// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import QRCodeGenerator from "./components/QRCodeGenerator";
import IPAddressFinder from "./components/IPAddressFinder";
import MovieSearchEngine from "./components/MovieSearchEngine";
import TodoApp from "./components/TodoApp";
import QuizApp from "./components/QuizApp";
import LanguageTranslator from "./components/LanguageTranslator";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      <Route path="/qrcode-generator" element={<PrivateRoute element={<QRCodeGenerator />} />} />
      <Route path="/ip-address-finder" element={<PrivateRoute element={<IPAddressFinder />} />} />
      <Route path="/movie-search-engine" element={<PrivateRoute element={<MovieSearchEngine />} />} />
      <Route path="/todo-app" element={<PrivateRoute element={<TodoApp />} />} />
      <Route path="/quiz-app" element={<PrivateRoute element={<QuizApp />} />} />
      <Route path="/language-translator" element={<PrivateRoute element={<LanguageTranslator />} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;