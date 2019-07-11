import { useState, useEffect } from "react";
import { fst } from "../firebase";

function boardsRef() {
  return fst.collection("boards");
}

function usersRef() {
  return fst.collection("Users");
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

function useFirestoreUser(user) {
  const [firestoreUser, setFirestoreUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const userQuery = usersRef().doc(user.uid);
      userQuery.get().then(doc => {
        if (doc.exists) {
          const userRaw = doc.data();
          setFirestoreUser({ uid: user.uid, ...userRaw });
        } else {
          setFirestoreUser(null);
        }
      });
    } else {
      setFirestoreUser(null);
    }
    setAuthLoading(false);
  }, [user]);

  return [firestoreUser, authLoading];
}

export { useBoards, useFirestoreUser };
