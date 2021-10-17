import  firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDAkgGfjSfoY1anzrJY-Obz6dP-49H3Gnk",
  authDomain: "videochat-app-fc5c0.firebaseapp.com",
  projectId: "videochat-app-fc5c0",
  storageBucket: "videochat-app-fc5c0.appspot.com",
  messagingSenderId: "864209677413",
  appId: "1:864209677413:web:1628aa0395ce8918fcea8c",
  measurementId: "G-ZX0K2BYSEZ"
  };

let app;

if(firebase.apps.length===0){
app = firebase.initializeApp(firebaseConfig);
}
else{
  app=firebase.app();
}

const db=app.firestore();
const auth=firebase.auth();

export { db,auth };
