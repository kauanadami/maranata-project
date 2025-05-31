import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import ComoAjudar from "./pages/ComoAjudar";
import Contato from "./pages/Contato";


export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/como-ajudar" element={<ComoAjudar />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  );
}

