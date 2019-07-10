const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//
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
