// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9jHOhNCgWL_Yto4CwfdkdRRdpKqox6Wk",
  authDomain: "firebse-auth-96ef0.firebaseapp.com",
  projectId: "firebse-auth-96ef0",
  storageBucket: "firebse-auth-96ef0.appspot.com",
  messagingSenderId: "571238416970",
  appId: "1:571238416970:web:dd425edc56fc3549b95cb3"
};

// Initialize Firebase

let app;
if (firebase.apps.lenght === 0) {
    app = initializeApp(firebaseConfig);
}else{
    app = firebase.app()
 }

 const auth = firebase.auth()

 export {auth};