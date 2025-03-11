import React, { useState } from "react";
import "./styles.css";

const CustomInfoInstitucionais = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/dataentities/IS/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "REST-Range": "resources=0-1"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Erro ao enviar a mensagem.");
      }
    } catch (err) {
      setError("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="atendimento">
        <div className="infoCard">
          <h3>ATENDIMENTO POR TELEFONE</h3>
          <p>
            Nosso horário de atendimento:<br />
            Segunda a quinta: 7h às 17h30 <br />
            Sexta: 7h às 17h <br />
            Sábados: 8h às 12h <br />
          </p>
          <p>SP: (11) 2081-3333</p>
        </div>

        <div className="infoCard">
          <h3>ATENDIMENTO POR EMAIL</h3>
          <p>Envie sua mensagem que em breve retornaremos o contato</p>
          {success && <p className="success-message">Mensagem enviada com sucesso!</p>}
          {error && <p className="error-message">{error}</p>}
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input-form"
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="input-form"
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="input-form-text"
              name="message"
              placeholder="Sua mensagem"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className="container-button">
              <a href="/">Voltar para home</a>
              <button className="input-form-button" type="submit" disabled={loading}>
                {loading ? "Enviando..." : "ENVIAR"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomInfoInstitucionais;

