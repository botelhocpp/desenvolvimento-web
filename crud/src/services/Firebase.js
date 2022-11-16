import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBnip0_Pp24phgVl17a6MQNh_VfVdWd9fQ",
  authDomain: "crud-web-botelho.firebaseapp.com",
  projectId: "crud-web-botelho",
  storageBucket: "crud-web-botelho.appspot.com",
  messagingSenderId: "253495338782",
  appId: "1:253495338782:web:39053627fe480745ad4b0f"
};
/*
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
*/

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }