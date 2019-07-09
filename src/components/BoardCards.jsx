import React, { useState } from "react";
import { BoardCard, StyledHeader, TruncatedText, Star } from "./index";

export function BoardCards({ boards }) {
  const [star, showStar] = useState(null);
  return boards.map((board, index) => (
    <BoardCard
      key={index}
      image={board.image}
      color={board.color}
      onMouseEnter={() => showStar(index)}
      onMouseLeave={() => showStar(null)}
    >
      <StyledHeader styled="white">
        <TruncatedText text={board.title} length={30} />
      </StyledHeader>
      <Star
        show={board.starred}
        onClick={() => console.log("clicked")}
        icon="star"
        color="yellow"
      />
      <Star
        show={star === index && !board.starred}
        onClick={() => console.log("clicked")}
        icon="star outline"
      />
    </BoardCard>
  ));
}
