# AutoAgenda — Landing Page

Landing page para um sistema de agendamento de serviços automotivos (radiadores, óleos e manutenção preventiva), desenvolvida em **React + TypeScript + Vite**, com envio de e-mail funcional via **Netlify Functions**.

## Estrutura do projeto

```
agendamento-servicos/
├── netlify/
│   └── functions/
│       └── send-email.ts      ← function de envio de e-mail (nodemailer)
├── src/
│   ├── assets/                ← ícones e logo (SVG)
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Card.tsx            ← card reutilizável (soluções / sobre)
│   │   ├── TestimonialCard.tsx ← card de depoimento (recebe props)
│   │   └── ContactForm.tsx     ← formulário de contato com validação
│   ├── pages/
│   │   └── Home.tsx            ← landing page completa
│   └── styles/                 ← um arquivo CSS por seção
├── netlify.toml
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Testando o envio de e-mail localmente

A function de e-mail só funciona através do **Netlify CLI** (ela não roda com `npm run dev` puro, porque o Vite não sabe o que é uma Netlify Function).

1. Configure o `.env` na raiz do projeto (veja `.env.example`). Para testar sem precisar de uma conta de e-mail real, use o **Ethereal**:
   - Acesse [ethereal.email](https://ethereal.email) → "Create Ethereal Account"
   - Copie `Username` e `Password` gerados para `SMTP_USER` e `SMTP_PASS` no `.env`
   - Use `SMTP_USER` também como `CONTACT_EMAIL`

2. Suba o ambiente com a Netlify CLI:

```bash
npx netlify dev
```

3. Acesse `http://localhost:8888` (não o `5173`) e teste o formulário na seção de Contato.

4. Os e-mails "enviados" não chegam de verdade — ficam disponíveis para visualização no painel do [ethereal.email](https://ethereal.email), usando o mesmo login gerado.

## Configurando com Gmail (produção)

1. Ative a verificação em duas etapas na sua conta Google.
2. Gere uma **Senha de App** em [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
3. Configure as variáveis de ambiente (local no `.env`, em produção no painel da Netlify):

```
SMTP_HOST=smtp.seu-provedor.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@dominio.com
SMTP_PASS=xxxx xxxx xxxx xxxx
CONTACT_EMAIL=email-que-recebe@dominio.com
ALLOWED_ORIGIN=https://seu-site.netlify.app
```

## Deploy no Netlify

1. Suba o projeto para um repositório no GitHub.
2. Crie uma conta em [netlify.com](https://netlify.com) e conecte o repositório (New site from Git).
3. As configurações de build (`npm run build`, pasta `dist`, pasta de functions) já estão no `netlify.toml`, não é necessário configurar manualmente.
4. Em **Site configuration > Environment variables**, adicione as mesmas variáveis do `.env`.
5. Faça o deploy. A function ficará disponível em `/api/send-email`.

## Tecnologias

- React 19 + TypeScript
- Vite
- Netlify Functions + Nodemailer
