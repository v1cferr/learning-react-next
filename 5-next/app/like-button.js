"use client";

import { useState } from "react";

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
