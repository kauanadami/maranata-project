import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contato() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function enviarEmail(e) {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    emailjs
      .send(
        "service_ls5r7q9",    // seu Service ID
        "template_9k1f6bv",   // seu Template ID
        formData,             // dados do formulário
        "UNjUIY0R_rV67wwlY"   // sua Chave Pública correta
      )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        setFormData({ user_name: "", user_email: "", message: "" }); // limpa o formulário
      })
      .catch((error) => {
        console.error("Erro ao enviar email:", error.text || error);
        alert("Erro ao enviar mensagem. Verifique as configurações.");
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  return (
    <main className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#136735]">Fale Conosco</h2>
        <form onSubmit={enviarEmail} className="space-y-6 text-left">
          <input
            type="text"
            name="user_name"
            placeholder="Seu nome"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
            value={formData.user_name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Seu e-mail"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
            value={formData.user_email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className={`bg-[#136735] hover:bg-green-900 text-white px-6 py-3 rounded font-semibold ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSending}
          >
            {isSending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </main>
  );
}
