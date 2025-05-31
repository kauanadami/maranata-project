import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/LogoMaranata.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-800 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow">

      {/* LOGO + NOME */}
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Logo Maranata" className="h-12" />
        <h1 className="text-2xl font-bold">Comunidade Maranata</h1>
      </div>

      {/* BOTÃO MENU HAMBÚRGUER */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MENU RESPONSIVO FULLSCREEN */}
      {isOpen && (
        <div className="fixed inset-0 bg-green-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-xl text-white z-40">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-3xl font-bold">×</button>
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#B5C947]">Home</Link>
          <Link to="/projetos" onClick={() => setIsOpen(false)} className="hover:text-[#B5C947]">Projetos</Link>
          <Link to="/como-ajudar" onClick={() => setIsOpen(false)} className="hover:text-[#B5C947]">Como Ajudar</Link>
          <Link to="/contato" onClick={() => setIsOpen(false)} className="hover:text-[#B5C947]">Contato</Link>
        </div>
      )}

      {/* MENU PADRÃO PARA DESKTOP */}
      <nav className="hidden md:flex md:items-center md:space-x-6">
        <Link to="/" className="hover:text-[#B5C947]">Home</Link>
        <Link to="/projetos" className="hover:text-[#B5C947]">Projetos</Link>
        <Link to="/como-ajudar" className="hover:text-[#B5C947]">Como Ajudar</Link>
        <Link to="/contato" className="hover:text-[#B5C947]">Contato</Link>
      </nav>
    </header>
  );
}
