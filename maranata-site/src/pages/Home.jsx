import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"; 
import BannerDesktop from "../assets/img/ImagemPrincipalHomeDescktop.png";
import BannerMobile from "../assets/img/ImagemPrincipalHomeMobile.png";
import sede1 from "../assets/img/sede/sede1.png";
import sede2 from "../assets/img/sede/sede2.png";
import sede3 from "../assets/img/sede/sede3.png";
import sede4 from "../assets/img/sede/sede4.png";
import sede5 from "../assets/img/sede/sede5.png";
import sede6 from "../assets/img/sede/sede6.png";


const imagensSede = [sede1, sede2, sede3, sede4, sede5, sede6];

export default function Home() {
  return (
    <main className="text-gray-800">

      {/* BANNER PRINCIPAL */}
      <section className="w-full h-[800px] relative">
        <img
          src={BannerDesktop}
          alt="Banner Maranata"
          className="hidden md:block w-full h-full object-cover"
        />
        <img
          src={BannerMobile}
          alt="Banner Maranata Mobile"
          className="block md:hidden w-full h-full object-cover"
        />
      </section>

      {/* QUEM SOMOS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Quem somos?</h2>
            <p className="text-gray-700 text-lg">
              A Comunidade Terapêutica Maranata é uma entidade sem fins lucrativos que atua no acolhimento e reabilitação de pessoas em situação de vulnerabilidade, com foco na recuperação de dependentes químicos. Trabalhamos com amor, fé e dedicação para promover transformação social e dignidade.
            </p>
          </div>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow">
            <iframe
              width="100%"
              height="100%"
              src="https://drive.google.com/file/d/15-uxxHHRxcBvfy9esGjPyPXLTcvIP1yh/preview"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* COMO AJUDAR */}
      <section className="py-16 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Como ajudar?</h3>
          <p className="text-gray-700 mb-6">
            Sua contribuição pode transformar vidas. Através de doações financeiras ou materiais, você nos ajuda a manter nossa missão de acolhimento e reabilitação.
          </p>
          <Link to="/como-ajudar">
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded font-semibold">
              APOIAR
            </button>
          </Link>
        </div>
      </section>

      {/* GALERIA DA SEDE */}
    {/* GALERIA DA SEDE */}
<section className="py-20 px-4 md:px-6 bg-blue-800 text-white text-center">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-2xl font-bold mb-10">Nossa Sede</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {imagensSede.map((imagem, index) => (
        <div key={index} className="max-w-sm w-full mx-auto overflow-hidden rounded-lg shadow-md">
          <img
            src={imagem}
            alt={`Imagem da Sede ${index + 1}`}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* DEPOIMENTOS */}
<section className="py-20 px-6 bg-white text-center">
  <div className="max-w-5xl mx-auto">
    <h3 className="text-2xl font-bold mb-10 text-gray-800">Depoimentos</h3>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
        <iframe
            width="100%"
            height="100%"
            src="https://drive.google.com/file/d/1ve8wJrQlkbGsbG5rfV8s19VosnRsjvXR/preview"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
      </div>
      <div className="w-full aspect-video rounded-lg overflow-hidden shadow">
         <iframe
            width="100%"
            height="100%"
            src="https://drive.google.com/file/d/13HGAsY_nNRFPtL0TGzUT2_q4PdIRy1L6/preview"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
      </div>
    </div>

  </div>
</section>

      {/* FOOTER correto */}
      <Footer />

    </main>
  );
}
