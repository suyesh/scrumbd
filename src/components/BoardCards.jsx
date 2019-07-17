import React, { useState, Fragment } from "react";
import { Loader, Dimmer } from "semantic-ui-react";
import { fst, firebase } from "../firebase";
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

function Boards({ boards, showStar, star, user }) {
  const handleStar = board => {
    const userRef = fst.collection("Users").doc(user.uid);
    userRef.update({
      starred: firebase.firestore.FieldValue.arrayUnion(board)
    });
  };

  const handleUnStar = board => {
    const userRef = fst.collection("Users").doc(user.uid);
    userRef.update({
      starred: firebase.firestore.FieldValue.arrayRemove(board)
    });
  };

  const alreadyStarred = board => {
    return user.starred && user.starred.some(doc => doc.id === board.id);
  };

  if (boards && boards.length > 0) {
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
          show={alreadyStarred(board)}
          onClick={() => handleUnStar(board)}
          icon="star"
          color="yellow"
        />
        <Star
          show={star === index && !alreadyStarred(board)}
          onClick={() => handleStar(board)}
          icon="star outline"
        />
      </BoardCard>
    ));
  }
  return null;
}

export function BoardCards({ boards, openBoardForm, loading, user }) {
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
      <Boards boards={boards} star={star} showStar={showStar} user={user} />
      {openBoardForm && (
        <StyledBoardCard onClick={() => openBoardForm(true)}>
          Create Board
        </StyledBoardCard>
      )}
    </Fragment>
  );
}
