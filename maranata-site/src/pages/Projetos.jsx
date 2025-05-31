import React from "react";
import sede1 from "../assets/img/sede/sede1.png";
import sede2 from "../assets/img/sede/sede2.png";
import sede3 from "../assets/img/sede/sede3.png";
import sede4 from "../assets/img/sede/sede4.png";
import sede5 from "../assets/img/sede/sede5.png";
import sede6 from "../assets/img/sede/sede6.png";

const projetos = [
  {
    imagem: sede1,
    titulo: "Programa de Reabilitação",
    descricao: "Um plano terapêutico individualizado para dependentes químicos, com acolhimento, acompanhamento psicológico e espiritual."
  },
  {
    imagem: sede3,
    titulo: "Atividades Terapêuticas e de Lazer",
    descricao: "Realizamos atividades recreativas, espirituais e culturais que fortalecem os vínculos sociais e emocionais dos acolhidos."
  },
  {
    imagem: sede4,
    titulo: "Campanhas de Arrecadação",
    descricao: "Promovemos ações solidárias para arrecadação de alimentos, roupas, produtos de higiene e fundos para manutenção da instituição."
  },
  {
    imagem: sede5,
    titulo: "Oficinas de Autoconhecimento",
    descricao: "Atividades em grupo que promovem o autoconhecimento e desenvolvimento emocional dos participantes."
  },
  {
    imagem: sede6,
    titulo: "Integração com a Comunidade",
    descricao: "Encontros e eventos que aproximam os acolhidos da comunidade, promovendo inclusão e empatia."
  },
];

export default function Projetos() {
  return (
    <main className="text-gray-800">
      {/* HEADER DA PÁGINA */}
      <section className="h-[300px] bg-[#136735] flex items-center justify-center text-white text-center px-4">
        <div className="p-6 rounded">
          <h1 className="text-4xl font-bold mb-2">Nossos Projetos</h1>
          <p className="text-lg">Ações que transformam vidas e renovam esperanças</p>
        </div>
      </section>

      {/* DESCRIÇÃO GERAL */}
      <section className="py-16 px-6 md:px-20 text-center max-w-4xl mx-auto">
        <p className="text-lg text-gray-700">
          A Comunidade Maranata atua em diversas frentes de apoio à recuperação, inclusão social e dignidade de pessoas em situação de vulnerabilidade. Conheça abaixo algumas das nossas iniciativas mais importantes.
        </p>
      </section>

      {/* LISTA DE PROJETOS */}
      <section className="px-6 md:px-20 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projetos.map((projeto, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1">
            <img
              src={projeto.imagem}
              alt={projeto.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#136735]">{projeto.titulo}</h3>
              <p className="text-gray-700">{projeto.descricao}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
