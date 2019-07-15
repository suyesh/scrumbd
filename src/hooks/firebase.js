import { useState, useEffect } from "react";
import { fst } from "../firebase";

function boardsRef() {
  return fst.collection("boards");
}

function usersRef() {
  return fst.collection("Users");
}

function useBoards(user) {
  const [boards, setBoards] = useState({ items: [], loading: true });

  useEffect(() => {
    let items = [];
    const boardsQuery = boardsRef().where("creatorId", "==", user.uid);
    return boardsQuery.onSnapshot(snapShot => {
      snapShot.docs.forEach(board => {
        items.push(board.data());
      });
      setBoards({ items, loading: false });
    });
  }, [user.uid]);

  return boards;
}

function useFirestoreUser(user) {
  const [firestoreUser, setFirestoreUser] = useState({
    user: null,
    loading: true
  });

  useEffect(() => {
    setFirestoreUser({ user: null, loading: true });
    if (user) {
      const userQuery = usersRef().doc(user.uid);
      userQuery.get().then(doc => {
        if (doc.exists) {
          const userRaw = doc.data();
          setFirestoreUser({
            user: { uid: user.uid, ...userRaw },
            loading: false
          });
        } else {
          setFirestoreUser({ user: null, loading: false });
        }
      });
    } else {
      setFirestoreUser({ user: null, loading: false });
    }
  }, [user]);

  return [firestoreUser];
}

export { useBoards, useFirestoreUser };
