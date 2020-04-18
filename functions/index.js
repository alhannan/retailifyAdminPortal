const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.adminLogin = functions.https.onCall( async (data, context) => {
  const user = await admin.auth().getUserByEmail(data.email);
  
  if (user && user.customClaims && user.customClaims.admin === true ){
    return true;
  } 
  
  return false;
})
