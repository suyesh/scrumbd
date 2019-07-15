import React, { useState, Fragment } from "react";
import { Loader, Dimmer } from "semantic-ui-react";
import styled from "styled-components";
import { BoardCard, StyledHeader, TruncatedText, Star } from "./index";

const StyledBoardCard = styled(BoardCard)`
  color: #172b4d;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(9, 30, 66, 0.03);
  font-weight: 400 !important;
  text-align: center !important;
  line-height: 1.429rem !important;

  &:hover {
    background-image: none;
    background-color: rgba(9, 30, 66, 0.04) !important;
  }
`;

function Boards({ boards, showStar, star }) {
  if (boards.length > 0) {
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
  return null;
}

export function BoardCards({ boards, onCreate, loading }) {
  const [star, showStar] = useState(null);

  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader />
      </Dimmer>
    );
  }

  return (
    <Fragment>
      <Boards boards={boards} star={star} showStar={showStar} />
      {onCreate && <StyledBoardCard>Create Board</StyledBoardCard>}
    </Fragment>
  );
}
