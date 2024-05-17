# 🚀 Aprendendo React e Next.js

Este repositório documenta minha jornada de aprendizado em React e Next.js, explorando os conceitos básicos até a construção de aplicações web modernas.

## 📚 Conteúdo

O repositório é dividido em exemplos progressivos, explorando diferentes aspectos do desenvolvimento front-end com React e Next.js:

**1. Imperativo (`1-imperative.html`):**

- Ilustra a abordagem tradicional de manipulação do DOM, demonstrando a complexidade e verbosidade. O código manipula diretamente elementos HTML, o que pode ser trabalhoso e difícil de manter em aplicações maiores.

**2. Declarativo com React (`2-declarative.html`):**

- Introduz o React e a renderização declarativa, simplificando a atualização da interface do usuário. Com o React, você define o que a interface deve ser, e o framework cuida de atualizar o DOM de forma eficiente.

**3. Componentes e Props (`3-props.html`):**

- Apresenta a criação de componentes React reutilizáveis e a passagem de dados através de props. Componentes são blocos de código independentes que encapsulam lógica e interface, tornando o código modular e reutilizável. As props permitem passar dados entre componentes.

**4. Estado e Interatividade (`4-state.html`):**

- Explora o conceito de estado em componentes React e como gerenciar a interatividade do usuário. O estado representa dados que podem mudar dentro de um componente, permitindo que a interface responda a ações do usuário.

**5. Introdução ao Next.js (`5-next/`):**

- **Estrutura do Projeto:**
  - O projeto segue a estrutura padrão do Next.js, com pastas como `app`, `public` e `styles`, organizando componentes, páginas, recursos estáticos e estilos de forma intuitiva.
- **Roteamento Baseado em Arquivos:**
  - O Next.js utiliza o sistema de arquivos para definir as rotas da aplicação. Cada arquivo dentro da pasta `app/` representa uma rota, simplificando a navegação. Por exemplo, o arquivo `app/page.js` define a página principal da aplicação.
- **Componentes Client-Side (`5-next/app/like-button.js`):**
  - Next.js permite renderizar componentes no lado do cliente, melhorando o desempenho e a interatividade. O componente `LikeButton` ilustra este conceito. Ele usa o hook `useState` para gerenciar o estado local do botão (número de curtidas), e a atualização da interface ocorre somente no lado do cliente.
- **Fast Refresh:**
  - Experimente a recarga rápida do Next.js, que atualiza a interface do usuário em tempo real durante o desenvolvimento, acelerando o processo de criação e depuração. O Next.js detecta alterações no código e atualiza somente a parte da interface que foi modificada.

## 🔨 Como Usar

**Pré-requisitos:**

- **Node.js:** [https://nodejs.org/](https://nodejs.org/)
- **npm** ou **yarn:** (geralmente incluídos no Node.js)
- **Git:** [https://git-scm.com/](https://git-scm.com/) (opcional para clonar o repositório)
- **Navegador:** Chrome, Firefox, Edge, etc.

**Para os exemplos HTML (1-imperative.html a 4-state.html):**

1. **Clonar o Repositório:**

   ```bash
   git clone https://github.com/victor-ferreira-dev/learning-react-next.git
   ```

2. **Navegue até o diretório:**

   ```bash
   cd learning-react-next
   ```

3. **Abra os arquivos HTML no seu navegador:**
   - Explore os exemplos progressivamente, acompanhando a evolução dos conceitos.

**Para o exemplo Next.js (5-next/):**

1. **Navegue até a pasta do projeto:**

   ```bash
   cd 5-next
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação em:** `http://localhost:3000`

## 🔍 Explorando o Código

**Pasta `5-next/`:**

- **`package-lock.json`:** Define as dependências do projeto e suas versões específicas.
- **`package.json`:** Define scripts e dependências do projeto.
- **`app/`:**
  - **`layout.js`:** Define o layout base para todas as páginas, fornecendo uma estrutura consistente. Neste exemplo, ele apenas renderiza o conteúdo da página dentro de um elemento `<html>` e `<body>`.
  - **`page.js`:** Define o componente da página principal, ilustrando a renderização de componentes e a passagem de props.
  - **`like-button.js`:** Demonstra um componente client-side que gerencia o estado local e interage com o usuário.

## 🚀 Próximos Passos

- Explore a documentação oficial do Next.js: [https://nextjs.org/](https://nextjs.org/)
- Experimente criar novas rotas adicionando arquivos na pasta `app/`.
- Crie componentes React mais complexos e aprenda sobre recursos avançados do Next.js, como:
  - Fetch de dados com `fetch`, `useSWR` ou `react-query`
  - Renderização Server-Side (SSR) e Client-Side (CSR)
  - Pré-renderização (SSG)
  - API Routes
  - Gerenciamento de estado com Context API e Redux
  - Estilização com CSS Modules e Styled Components
  - Testes automatizados com Jest e React Testing Library
  - Implantação em plataformas como Vercel e Netlify

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com este repositório, seja adicionando novos exemplos, aprimorando a documentação ou corrigindo erros.

1. Faça um fork do repositório.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`
3. Faça commit das suas alterações: `git commit -am 'Adiciona nova feature'`
4. Faça push para a branch: `git push origin minha-feature`
5. Abra um Pull Request.

## 📝 Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md](LICENSE.md) para obter detalhes.
