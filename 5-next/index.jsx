import { useState } from "react";

{
  /*
    `npm install react@latest react-dom@latest next@latest`
    The only code left in the HTML file is JSX, so you can change the file type from .html to .js or .jsx.
   */
}

{
  /* 1. Componente Header:
- Recebe um título (title) como props.
- Renderiza um título (h1) com o texto da prop title.
- Renderiza um parágrafo (p) com o texto "Classroom of the Elite".
*/
}
function Header({ title }) {
  return (
    <div>
      <h1>{title ? title : "Waiting..."}</h1>
      <p>Classroom of the Elite</p>
    </div>
  );
}

{
  /* 2. Componente HomePage:
- Utiliza o Hook useState para gerenciar o estado "likes", inicializado com 0.
- Define um array "names" com nomes de personagens.
- Renderiza:
- O componente Header com o título "Develop. Preview. Ship.".
- Uma lista (ul) com cada nome do array "names" renderizado como um item de lista (li).
- Um botão que, ao ser clicado, incrementa o estado "likes".
*/
}
function HomePage() {
  // Inicializa o estado "likes" com o valor 0
  const [likes, setLikes] = useState(0);

  // Array de nomes para a lista
  const names = [
    "Kiyotaka Ayanokoji",
    "Arisu Sakayanagi",
    "Suzune Horikita",
    "Kei Karuizawa",
  ];

  {
    /* Função handleClick:
    - Define a ação a ser executada quando o botão é clicado.
    - Incrementa o estado "likes" em 1 utilizando a função setLikes.
  */
  }
  function handleClick() {
    setLikes(likes + 1);
  }

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

      {/* Renderiza o botão com a contagem de likes */}
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
  );
}

{
  /* Renderiza o componente HomePage no elemento com id "app" */
}
root.render(<HomePage />);
