<div align="center">
  <h1>⚔️ HollowPedia ⚔️</h1>
  <h3>Os Arquivos Sagrados de Hallownest</h3>

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/Status-Finalizado-brightgreen?style=for-the-badge" />
  </p>

  <p>
    <em>"Sem mente para pensar. Sem vontade para quebrar. Sem voz para gritar de sofrimento."</em>
  </p>
</div>

---

## 📖 Sobre o Projeto

Bem-vindo à **HollowPedia**, um santuário de conhecimento dedicado ao vasto e melancólico mundo de *Hollow Knight*.

Este projeto foi desenvolvido como parte da avaliação da disciplina de **Desenvolvimento Web Básico** da **Universidade Positivo**. O objetivo foi criar uma experiência imersiva "do zero", sem o uso de frameworks (como Bootstrap ou React), para demonstrar domínio sólido sobre os pilares fundamentais da Web: HTML5 Semântico, CSS3 Moderno e Vanilla JavaScript.

## ✨ Características do Reino (Funcionalidades)

O projeto foi forjado com foco em boas práticas e imersão visual:

### 🏛️ Estrutura e Semântica (HTML5)
* **Navegação Clara:** Arquitetura de informação organizada entre Home, Personagens, Regiões, Amuletos e Sobre.
* **Acessibilidade:** Uso rigoroso de tags semânticas (`<main>`, `<section>`, `<article>`, `<aside>`, `<nav>`) e atributos ARIA para garantir que o conteúdo seja compreensível.
* **Dados Estruturados:** Tabela completa e estilizada listando todos os **40+ Amuletos** do jogo.
* **Formulários Completos:** Página de cadastro utilizando diversos tipos de inputs (`date`, `email`, `password`, `select`, `radio`, `checkbox`), fieldsets e validação nativa.

### 🎨 Atmosfera e Estilo (CSS3)
* **Layout Moderno:** Uso combinado de **Flexbox** e **CSS Grid** para criar layouts responsivos que se adaptam de monitores a dispositivos móveis.
* **Imersão Visual:** Implementação de **Animações CSS (@keyframes)** para criar o efeito atmosférico de "partículas de cinzas/neve" caindo na tela, simulando a ambientação do jogo.
* **Interatividade:** Efeitos de *Hover*, transições suaves em botões e cards, e estilização personalizada de scrollbars.

### ⚙️ Mecânicas (JavaScript)
* **Manipulação do DOM:** Controle total dos elementos da página para interações em tempo real.
* **Saudação Dinâmica:** O sistema reconhece o horário do usuário e exibe uma mensagem personalizada (Bom dia/Tarde/Noite, Viajante).
* **Modal de Suporte:** Um sistema de janela modal acessível (fecha com `ESC` ou clique fora), reutilizável em todas as páginas.
* **Validação de Formulário:** Verificação de dados no front-end com feedback visual imediato de erro ou sucesso para o usuário.

## 🗂️ Estrutura dos Arquivos

```bash
HollowPedia/
├── assets/
│   ├── css/
│   │   ├── style.css           # Estilos globais e layout
│   │   ├── styleModal.css      # Estilos específicos do Modal
│   │   └── styleAnimation.css  # Animação de partículas
│   └── img/                    # Ícones e imagens do jogo
├── js/
│   ├── script.js               # Lógica principal e validações
│   └── scriptModal.js          # Controle da janela modal
├── index.html                  # Página Inicial
├── personagens.html            # Galeria de Cards
├── regioes.html                # Mapa e Locais
├── amuletos.html               # Tabela de Itens
├── sobre.html                  # Informações do Projeto
└── cadastro.html               # Formulário
