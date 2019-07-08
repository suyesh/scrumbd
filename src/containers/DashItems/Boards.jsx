import React, { Fragment, useState } from "react";
import { TruncatedText } from "../../components";
import {
  BoardItemTitle,
  BoardCard,
  StyledHeader,
  Star,
  BoardItem,
  BoardCardContainer
} from "../../components";
import {
  FAKE_PERSONAL_BOARDS,
  FAKE_TEAM_BOARDS,
  FAKE_STARRED_BOARDS
} from "../../utils/FakeBoards";

function StarComponent({ onClick, show, icon, color }) {
  if (show) {
    return <Star name={icon} color={color} />;
  }
  return null;
}

function BoardCards({ boards }) {
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
      <StarComponent
        show={board.starred}
        onClick={() => console.log("clicked")}
        icon="star"
        color="yellow"
      />
      <StarComponent
        show={star === index && !board.starred}
        onClick={() => console.log("clicked")}
        icon="star outline"
      />
    </BoardCard>
  ));
}

function BoardItems({ boards, type, name }) {
  if (boards.length > 0) {
    return (
      <BoardItem>
        <BoardItemTitle type={type} name={name} />
        <BoardCardContainer>
          <BoardCards boards={boards} />
        </BoardCardContainer>
      </BoardItem>
    );
  }
  return null;
}

function Boards() {
  return (
    <Fragment>
      <BoardItems
        boards={FAKE_STARRED_BOARDS}
        type="starred"
        name="Starred Boards"
      />
      <BoardItems
        boards={FAKE_PERSONAL_BOARDS}
        type="personal"
        name="Personal Boards"
      />
      <BoardItems boards={FAKE_TEAM_BOARDS} type="team" name="Team Boards" />
    </Fragment>
  );
}

export default Boards;
