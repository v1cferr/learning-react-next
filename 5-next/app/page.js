import LikeButton from "./like-button";

/**
 * Arquivo que demonstra os conceitos básicos de React, como componentes, props e estado.
 *
 * Para executar:
 * 1. Instale as dependências: `npm install react@latest react-dom@latest next@latest`
 * 2. Inicie o servidor de desenvolvimento: `npm run dev`
 *
 * Este arquivo representa um componente de página em uma aplicação Next.js.
 * A renderização do componente é gerenciada pelo framework Next.js.
 */

/**
 * Componente Header:
 * - Recebe um título (`title`) como prop.
 * - Renderiza um título (`h1`) com o texto da prop `title`.
 * - Renderiza um parágrafo (`p`) com o texto "Classroom of the Elite".
 */
function Header({ title }) {
  return (
    <div>
      <h1>{title ? title : "Waiting..."}</h1>
      <p>Classroom of the Elite</p>
    </div>
  );
}

/**
 * Componente HomePage:
 * - Utiliza o Hook `useState` para gerenciar o estado `likes`, inicializado com 0.
 * - Define um array `names` com nomes de personagens.
 * - Renderiza:
 *   - O componente `Header` com o título "Develop. Preview. Ship.".
 *   - Uma lista (`ul`) com cada nome do array `names` renderizado como um item de lista (`li`).
 *   - Um botão que, ao ser clicado, incrementa o estado `likes`.
 */
export default function HomePage() {
  // Array de nomes para a lista
  const names = [
    "Kiyotaka Ayanokoji",
    "Arisu Sakayanagi",
    "Suzune Horikita",
    "Kei Karuizawa",
  ];

  return (
    <div>
      {/* Renderiza o componente Header */}
      <Header title="Develop. Preview. Ship." />

      {/* Renderiza a lista de nomes */}
      <ul>
        {names.map((name, index) => {
          const key = `item-"${name}"-${index}`;
          return <li key={key}>{name}</li>;
        })}
      </ul>
      <LikeButton />
    </div>
  );
}

// A renderização do componente `HomePage` é gerenciada pelo Next.js,
// não sendo necessário chamar `root.render()` neste arquivo.
