import { useState, type FormEvent } from "react";
import "../styles/contact.css";

interface IFormFields {
  name: string;
  email: string;
  message: string;
}

interface IFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [fields, setFields] = useState<IFormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<IFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  function handleChange(
    field: keyof IFormFields,
    value: string
  ) {
    setFields((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): boolean {
    const newErrors: IFormErrors = {};

    if (!fields.name.trim()) {
      newErrors.name = "Informe seu nome.";
    }

    if (!fields.email.trim()) {
      newErrors.email = "Informe seu e-mail.";
    } else if (!emailRegex.test(fields.email)) {
      newErrors.email = "Informe um e-mail válido.";
    }

    if (!fields.message.trim()) {
      newErrors.message = "Escreva uma mensagem.";
    } else if (fields.message.trim().length < 10) {
      newErrors.message = "A mensagem deve ter ao menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          message: fields.message,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Erro ao enviar mensagem.");
      }

      setStatus("success");
      setFeedbackMessage(
        "Mensagem enviada com sucesso! Em breve entraremos em contato."
      );
      setFields({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua mensagem. Tente novamente."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className={`form-field ${errors.name ? "has-error" : ""}`}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Seu nome completo"
          value={fields.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>

      <div className={`form-field ${errors.email ? "has-error" : ""}`}>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="seuemail@exemplo.com"
          value={fields.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>

      <div className={`form-field ${errors.message ? "has-error" : ""}`}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          rows={5}
          placeholder="Conte pra gente o que você precisa..."
          value={fields.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
        {errors.message && (
          <span className="field-error">{errors.message}</span>
        )}
      </div>

      {status === "success" && (
        <p className="form-feedback success">{feedbackMessage}</p>
      )}
      {status === "error" && (
        <p className="form-feedback error">{feedbackMessage}</p>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
