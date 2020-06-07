import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJqOsUSKC4EeYGLXMoNIUorjKhFBu6H58",
    authDomain: "amira-socializers.firebaseapp.com",
    databaseURL: "https://amira-socializers.firebaseio.com",
    projectId: "amira-socializers",
    storageBucket: "amira-socializers.appspot.com",
    messagingSenderId: "549852556617",
    appId: "1:549852556617:web:c87b1cfccbcb5a4e9abe98",
    measurementId: "G-MVYNGX2N83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase
