import React, { useEffect, useState } from "react";
import { BoardItems } from "../../components";
import { fst } from "../../firebase";

function PersonalBoards({ user }) {
  const [personalBoards, setPersonalBoards] = useState([]);

  const handleCreate = board => {
    const boardsQuery = fst
      .collection("boards")
      .add({ ...board, creatorId: user.uid });
  };

  useEffect(() => {
    let boards = [];
    const boardsQuery = fst
      .collection("boards")
      .where("creatorId", "==", user.uid);

    return boardsQuery.onSnapshot(snapShot => {
      snapShot.docs.forEach(board => {
        boards.push(board.data());
      });
      setPersonalBoards(boards);
    });
  }, [user.uid]);
  return (
    <BoardItems
      boards={personalBoards}
      type="personal"
      name="Personal Boards"
      onCreate={handleCreate}
    />
  );
}

export default PersonalBoards;
