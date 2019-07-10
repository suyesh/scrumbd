import React, { useEffect, useState } from "react";
import { BoardItems } from "../../components";
import { fst } from "../../firebase";

function PersonalBoards({ user }) {
  const [personalBoards, setPersonalBoards] = useState([]);
  useEffect(() => {
    let boards = [];
    const boardsQuery = fst
      .collection("boards")
      .where("creatorId", "==", user.uid)
      .onSnapshot(snapShot => {
        snapShot.docs.forEach(board => {
          boards.push(board.data());
        });
        setPersonalBoards(boards);
      });
    return boardsQuery();
  }, [user.uid]);
  return (
    <BoardItems
      boards={personalBoards}
      type="personal"
      name="Personal Boards"
      onCreate={() => console.log("hello")}
    />
  );
}

export default PersonalBoards;
