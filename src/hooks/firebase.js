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
    const boardsQuery = boardsRef().where("creatorId", "==", user.uid);
    return boardsQuery.onSnapshot(snapShot => {
      let items = [];
      snapShot.docs.forEach(board => {
        items.push({ ...board.data(), id: board.id });
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
      const userDoc = usersRef().doc(user.uid);
      userDoc.onSnapshot(doc => {
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
