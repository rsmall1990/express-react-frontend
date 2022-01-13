import firebase from "firebase/app"
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZzfKbS7xkqHNGGIQ0RvUZOr5V4cJnVOM",
    authDomain: "my-react-firebase-projects.firebaseapp.com",
    projectId: "my-react-firebase-projects",
    storageBucket: "my-react-firebase-projects.appspot.com",
    messagingSenderId: "270259307507",
    appId: "1:270259307507:web:877715f634c72e6c768886"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  function login() {
      return auth.signInWithPopup(provider);
  }

  function logout() {
      return auth.signOut();
  }

  export {auth, login, logout};