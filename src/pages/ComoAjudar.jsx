import React from "react";
import { Link } from "react-router-dom";

export default function ComoAjudar() {
  return (
    <main className="text-gray-800">

      {/* CAPA */}
      <section className="h-[300px] bg-[#136735] flex items-center justify-center text-white text-center px-4">
        <div className="p-6">
          <h1 className="text-4xl font-bold">Como Ajudar</h1>
          <p className="text-lg mt-2 text-[#B5C947]">Transforme vidas com o seu apoio</p>
        </div>
      </section>

      {/* TEXTO INICIAL */}
      <section className="py-16 px-6 md:px-20 max-w-4xl mx-auto text-center">
        <p className="text-lg mb-6">
          Acreditamos que cada gesto de solidariedade tem o poder de transformar vidas. Seja com tempo, recursos ou doações, você pode ser parte dessa missão de amor e acolhimento.
        </p>
        <p className="text-lg">
          Descubra como você pode contribuir com a Comunidade Terapêutica Maranata.
        </p>
      </section>

      {/* FORMAS DE AJUDAR */}
      <section className="bg-[#F4F4F4] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              titulo: "Doações Financeiras",
              descricao: "Ajude a manter nossas atividades com uma contribuição. Toda ajuda faz a diferença!",
              detalhe: "PIX: 00.000.000/0000-00 (CNPJ)"
            },
            {
              titulo: "Doações de Materiais",
              descricao: "Roupas, alimentos, produtos de higiene e limpeza são sempre bem-vindos.",
              detalhe: null
            },
            {
              titulo: "Voluntariado",
              descricao: "Doe seu tempo e talentos. Precisamos de pessoas para oficinas, acolhimento e muito mais.",
              detalhe: null
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#7ED957] rounded-full flex items-center justify-center text-white font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#136735]">{item.titulo}</h3>
              <p className="text-gray-700 mb-2">{item.descricao}</p>
              {item.detalhe && <p className="text-sm text-gray-600 italic">{item.detalhe}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="py-20 px-6 md:px-20 text-center bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#136735]">Quer fazer parte disso?</h2>
          <p className="mb-6 text-gray-700">
            Entre em contato conosco ou clique no botão abaixo para fazer sua doação. Juntos, podemos transformar ainda mais vidas!
          </p>
          <Link to="/contato">
            <button className="bg-[#136735] hover:bg-green-900 text-white px-6 py-3 rounded-full font-semibold">
              Entrar em contato
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}
