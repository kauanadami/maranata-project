import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-lg font-bold mb-4">Comunidade Maranata</h4>
          <p>Salvando vidas e restaurando famílias.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Contato</h4>
          <p>Email: comunidademaranata07@gmail.com</p>
          <p>Telefone: (47) 98808-1060</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Endereço</h4>
          <p>Rua Esperança, 123 – Bairro da Fé – SC</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Comunidade Maranata. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
