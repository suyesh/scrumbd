import { useState, useEffect } from "react";
import { fst } from "../firebase";

function boardsRef() {
  return fst.collection("boards");
}

function useBoards(user) {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    let boards = [];
    const boardsQuery = boardsRef().where("creatorId", "==", user.uid);
    return boardsQuery.onSnapshot(snapShot => {
      snapShot.docs.forEach(board => {
        boards.push(board.data());
      });
      setBoards(boards);
    });
  }, [user.uid]);

  return boards;
}

export { useBoards };
