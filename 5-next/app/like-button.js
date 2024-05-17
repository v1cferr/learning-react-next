"use client";

import { useState } from "react";

/**
 * Componente LikeButton:
 * - Renderiza um botão que aumenta o contador de curtidas.
 * - Utiliza o hook useState para gerenciar o estado local do botão (número de curtidas).
 * - A atualização da interface ocorre somente no lado do cliente.
 *
 * @returns {JSX.Element} Um botão que mostra o número de curtidas.
 */
export default function LikeButton() {
  // Inicializa o estado "likes" com o valor 0
  const [likes, setLikes] = useState(0);

  /**
   * Função handleClick:
   * - Define a ação a ser executada quando o botão é clicado.
   * - Incrementa o estado `likes` em 1 utilizando a função `setLikes`.
   */
  function handleClick() {
    setLikes(likes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
