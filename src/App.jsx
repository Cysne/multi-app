import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import MovieSearchEngine from './components/MovieSearchEngine';
import IPAddressFinder from './components/IPAddressFinder';
import QRCodeGenerator from './components/QRCodeGenerator';
import QuizApp from './components/QuizApp';
import TodoApp from './components/TodoApp';
import LanguageTranslator from './components/LanguageTranslator'; // Importe o componente
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  console.log("Renderizando App...");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
      <Route path="/movie-search-engine" element={<MovieSearchEngine />} />
      <Route path="/ip-address-finder" element={<IPAddressFinder />} />
      <Route path="/qrcode-generator" element={<QRCodeGenerator />} />
      <Route path="/quiz-app" element={<QuizApp />} />
      <Route path="/todo-app" element={<TodoApp />} />
      <Route path="/language-translator" element={<LanguageTranslator />} /> {/* Adicione esta linha */}
    </Routes>
  );
};

export default App;