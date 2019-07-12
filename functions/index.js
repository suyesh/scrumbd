const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const createProfile = (userRecord, context) => {
  const { email, displayName, photoURL, uid } = userRecord;

  return db
    .collection("Users")
    .doc(uid)
    .set({ email, displayName, photoURL })
    .catch(console.error);
};

module.exports = {
  authOnCreate: functions.auth.user().onCreate(createProfile)
};
