# Guia de Inicialização - RR TECNOL

Este projeto foi desenvolvido utilizando **React**, **TypeScript**, **Vite** e **Tailwind CSS**. Siga os passos abaixo para configurar e rodar o projeto no seu ambiente local usando o VS Code.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
1. **Node.js** (Versão 18 ou superior recomendada) - [Baixar aqui](https://nodejs.org/)
2. **VS Code** - [Baixar aqui](https://code.visualstudio.com/)

---

## Passo a Passo para Iniciar

### 1. Abrir o Projeto no VS Code
- Extraia o arquivo `.zip` que você recebeu.
- Abra o VS Code.
- Vá em `File > Open Folder...` (Arquivo > Abrir Pasta) e selecione a pasta extraída `SITE_ATUALIZADO-main`.

### 2. Abrir o Terminal
- No VS Code, abra o terminal integrado pressionando `Ctrl + '` (ou vá em `Terminal > New Terminal`).

### 3. Instalar as Dependências
No terminal, digite o seguinte comando e pressione Enter:
```bash
npm install
```
*Isso fará o download de todas as bibliotecas necessárias para o projeto funcionar.*

### 4. Rodar o Projeto em Modo de Desenvolvimento
Após a instalação terminar, execute o comando:
```bash
npm run dev
```

### 5. Acessar o Site
- O terminal mostrará um link, geralmente `http://localhost:5173`.
- Segure `Ctrl` e clique no link ou copie e cole no seu navegador.

---

## Estrutura de Pastas Principal
- `src/assets`: Contém a logo e outras imagens.
- `src/components`: Contém as seções do site (Navbar, Hero, About, etc).
- `src/index.css`: Estilos globais e configurações do Tailwind.

## Dicas Úteis
- **Para parar o servidor:** Pressione `Ctrl + C` no terminal do VS Code.
- **Para gerar a versão final (Build):** Use `npm run build`. Os arquivos prontos para hospedagem serão gerados na pasta `dist`.
