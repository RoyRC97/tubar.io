const firebaseConfig = {
  apiKey: "AIzaSyA8Sl7nDm6Aw_WJBDCwXfLfk29n7tLqako",
  authDomain: "tubar-app.firebaseapp.com",
  projectId: "tubar-app",
  storageBucket: "tubar-app.firebasestorage.app",
  messagingSenderId: "146267640357",
  appId: "1:146267640357:web:e9cccb97a63f076d0065cc"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
