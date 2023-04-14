import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAYd3m4YZNw4E5n1YF2VVaMzZOZpCKYvVY",
  authDomain: "get-n-pay-bb544.firebaseapp.com",
  projectId: "get-n-pay-bb544",
  storageBucket: "get-n-pay-bb544.appspot.com",
  messagingSenderId: "852383732585",
  appId: "1:852383732585:web:5fe636c9767fd9a45563f8",
  measurementId: "G-3XJJDKS0S4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };