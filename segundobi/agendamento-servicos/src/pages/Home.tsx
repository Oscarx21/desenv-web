import { useEffect, useState } from "react";

import logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solutions.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/home.css";
import "../styles/footer.css";

import Button from "../components/Button";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";

import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Radiator from "../assets/radiator.svg";
import Oil from "../assets/oil.svg";
import Wrench from "../assets/wrench.svg";
import Check from "../assets/check.svg";
import Instagram from "../assets/instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import LocationIcon from "../assets/location.svg";
import MailIcon from "../assets/mail.svg";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#solutions", label: "Soluções" },
  { href: "#about", label: "Sobre" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#pricing", label: "Planos" },
  { href: "#contact", label: "Contato" },
];

const services = [
  {
    icon: Radiator,
    title: "Radiadores linha leve",
    description:
      "Reparo e manutenção de radiadores para carros de passeio, com peças de qualidade e garantia.",
  },
  {
    icon: Radiator,
    title: "Radiadores linha pesada",
    description:
      "Atendimento especializado para caminhões e veículos pesados, sem deixar sua frota parada.",
  },
  {
    icon: Radiator,
    title: "Radiadores agrícolas",
    description:
      "Serviços dedicados a tratores e máquinas agrícolas, mantendo sua produção em dia.",
  },
  {
    icon: Oil,
    title: "Troca de aditivos",
    description:
      "Substituição de aditivos de radiador com produtos certificados para máxima proteção.",
  },
  {
    icon: Oil,
    title: "Óleos automotivos",
    description:
      "Linha completa de óleos automotivos de alta performance para todo tipo de motor.",
  },
  {
    icon: Wrench,
    title: "Manutenção preventiva",
    description:
      "Revisões periódicas que evitam problemas maiores e prolongam a vida útil do veículo.",
  },
];

const testimonials = [
  {
    profileImage: "https://i.pravatar.cc/150?img=12",
    name: "Carlos M.",
    role: "Motorista de aplicativo",
    text: "Atendimento rápido e serviço excelente. Agendei online e fui atendido no horário.",
    rating: 5,
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=33",
    name: "João R.",
    role: "Transportadora JR",
    text: "Equipe especializada e serviço de qualidade. Resolveram o radiador do meu caminhão em um dia.",
    rating: 4,
  },
  {
    profileImage: "https://i.pravatar.cc/150?img=47",
    name: "Fernanda A.",
    role: "Produtora rural",
    text: "Ótimos produtos e preço justo. Recomendo para quem precisa de manutenção agrícola.",
    rating: 5,
  },
];

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  function closeMobileMenu() {
    setShowMobileMenu(false);
  }

  return (
    <>
      {/* HEADER */}
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={logo} alt="Logo AutoAgenda" width={220} height={71} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    {NAV_LINKS.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} onClick={closeMobileMenu}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <span onClick={closeMobileMenu} className="btn-wrapper">
                    <img src={Close} alt="Fechar menu" width={24} height={24} />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(true)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="Abrir menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero">
        <div className="container content">
          <h1>Agendamentos de serviços rápidos e com qualidade</h1>

          <p>
            Agende serviços especializados para radiadores da linha leve,
            pesada e agrícola, além de encontrar aditivos e óleos de alta
            qualidade para máxima performance e proteção do seu veículo.
          </p>

          <div className="flex flex-wrap items-center gap-1">
            <Button text="Cadastre-se" />

            <span className="desktop-only">
              <Button text="Saiba mais" secondary />
            </span>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section id="solutions" className="container">
        <header>
          <h2>Nossas soluções</h2>
          <p>
            Tudo que seu veículo precisa em um único lugar, com agendamento
            simples e equipe especializada.
          </p>
        </header>

        <div className="cards-grid">
          {services.map((service) => (
            <Card
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="about" className="container">
        <header>
          <h2>Por que escolher a AutoAgenda?</h2>
          <p>
            Combinamos tecnologia e experiência para entregar o melhor
            atendimento automotivo da região.
          </p>
        </header>

        <div className="cards-grid">
          <Card
            icon={Wrench}
            title="Atendimento rápido"
            description="Agendamentos simples e rápidos, sem filas e sem complicação."
          />
          <Card
            icon={Check}
            title="Equipe especializada"
            description="Profissionais experientes e capacitados para todo tipo de serviço."
          />
          <Card
            icon={Oil}
            title="Produtos de qualidade"
            description="Trabalhamos somente com peças e produtos confiáveis e certificados."
          />
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="testimonials">
        <header>
          <span className="desktop-only">
            <p>Conselho de quem conhece</p>
          </span>
          <h2>Cada cliente importa!</h2>
          <p>
            Quem já agendou conosco sabe da qualidade do nosso atendimento,
            confira os depoimentos de quem já utilizou nossos serviços.
          </p>
        </header>

        <div className="carousel">
          <div className="carousel-content">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
            {testimonials.map((item) => (
              <TestimonialCard key={`${item.name}-repeat`} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>

        <div className="even-columns gap-1.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Básico</h3>
              <p>Ideal para quem precisa de um agendamento pontual.</p>
            </span>

            <h2>Grátis</h2>

            <Button text="Pedir agora" secondary />

            <span className="hr" />

            <ul className="features">
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>1 agendamento por mês</p>
              </li>
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Retirada na loja</p>
              </li>
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Suporte via WhatsApp</p>
              </li>
            </ul>
          </div>

          <div className="pricing-card premium">
            <span className="bonus">
              <p>1º SERVIÇO COM DESCONTO</p>
            </span>

            <span className="plan">
              <h3>Premium</h3>
              <p>Para quem precisa de manutenção recorrente.</p>
            </span>

            <span className="price">
              <h2>R$ 89,90</h2>
              <p>/mês</p>
            </span>

            <Button text="Pedir agora" />

            <span className="hr" />

            <ul className="features">
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Agendamentos ilimitados</p>
              </li>
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Prioridade na fila de atendimento</p>
              </li>
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Revisão preventiva trimestral</p>
              </li>
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Suporte via WhatsApp prioritário</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="container">
        <header>
          <p className="desktop-only">Fale com a gente</p>
          <h2>Agende seu serviço agora</h2>
          <p>
            Preencha o formulário abaixo e nossa equipe vai te responder o
            mais rápido possível.
          </p>
        </header>

        <ContactForm />
      </section>

      {/* FOOTER */}
      <footer id="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Logo AutoAgenda" width={160} height={51} />
            <p>
              Agendamento de serviços automotivos com rapidez, qualidade e
              uma equipe que entende do assunto.
            </p>

            <div className="footer-socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={Instagram} alt="ícone Instagram" width={20} height={20} />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <img src={Whatsapp} alt="ícone WhatsApp" width={20} height={20} />
              </a>
            </div>
          </div>

          <div>
            <h3>Navegação</h3>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contato</h3>
            <div className="footer-links">
              <span className="footer-contact-item">
                <img src={MailIcon} alt="ícone e-mail" width={18} height={18} />
                contato@autoagenda.com
              </span>
              <span className="footer-contact-item">
                <img
                  src={LocationIcon}
                  alt="ícone localização"
                  width={18}
                  height={18}
                />
                Cascavel, PR
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 AutoAgenda — Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
