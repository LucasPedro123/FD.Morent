
# Projeto de Aluguel de Carros

Aplicação web para aluguel de carros com interface moderna, responsiva e intuitiva. Desenvolvida com React e TypeScript, a plataforma permite aos usuários explorar um catálogo de carros, visualizar detalhes e realizar o processo de aluguel com poucos cliques.

## Preview

<p align="center">
  <img src="./src/assets/Images/project-cover.svg" width="600">
</p>


<p align="center">
  <a href="https://fd-morent.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Acesse o Sistema-Agora!-brightgreen" alt="Acesse o Sistema" />
  </a>
  <a href="https://github.com/LucasPedro123" target="_blank">
    <img src="https://img.shields.io/badge/Confira o GitHub de Lucas Pedro-333?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.figma.com/design/cU9DTaf4HThyjsRh21zLEm/Projeto-Faculdade-2025-1-Semestre---Aluguel-de-Carros?node-id=20-6257&t=qrQPl5SPdgYtb0aw-0" target="_blank">
    <img src="https://img.shields.io/badge/Visualizar no Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" alt="Figma" />
  </a>
</p>


---

## 🧑‍💻 Integrantes do Projeto

- Lucas Pedro Fernandes / RA: 2224104291
- Vitor Moriya Horikawa / RA: 2224103723
- João Vitor Oliveira Maciel / RA: 2224104323
- João Pedro Cardoso Silva / RA: 2224102613

---

## 🔧 Tecnologias Utilizadas

- ⚛️ **React**
- 💅 **Styled-Components**
- 📦 **TypeScript**
- 📄 **React Router DOM**
- 📁 **Vite** (ou outro bundler)
- 🌐 **Hospedagem:** Vercel

---

## 🚀 Funcionalidades

- Página inicial com destaque para chamada de ação
- Catálogo dinâmico com cards de carros disponíveis
- Detalhamento individual de cada carro
- Design responsivo e moderno
- Scroll suave para navegação entre seções
- Sistema de rotas para diferentes páginas (`Home`, `Detalhes do Carro`, `Pagamento`, etc.)

---

## 📁 Estrutura de Pastas

```
src/
├── assets/           # Imagens e ícones SVG
├── components/       # Componentes reutilizáveis
├── pages/            # Páginas principais (Home, CarDetails, Payment)
├── styles/           # Estilos globais ou temas
├── routes/           # Configuração de rotas
├── App.tsx           # Componente principal
└── main.tsx          # Ponto de entrada do React
```

---

## ▶️ Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/LucasPedro123/FD.Morent
cd aluguel-de-carros
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Rode o projeto

```bash
npm run dev
```

Abra `http://localhost:5173` no seu navegador.

---

## 🚨 Problemas Comuns

- ❗ **Erro de build na Vercel:** Certifique-se de que todos os arquivos (como `.svg`) realmente existem e estão com nomes corretos (case-sensitive).
- ❗ **Módulo não encontrado:** Verifique se os caminhos dos imports estão corretos, principalmente em sistemas Linux.



