// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfLqLRIX83dljMqf0kkh6Uvn3VXN91n-c",
    authDomain: "project-09-8c41e.firebaseapp.com",
    projectId: "project-09-8c41e",
    storageBucket: "project-09-8c41e.appspot.com",
    messagingSenderId: "979196492544",
    appId: "1:979196492544:web:b5c17dca3ee27dadec11e5",
    measurementId: "G-YNGH88ZBML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

// Getting ids
let email = document.getElementById('lemail')
let password = document.getElementById('lpassword')


window.login = () => {
    let obj = {
        email: email.value,
        password: password.value,
    }
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(async (res) => {
      console.log(res);
      let id = res.user.uid;
      const reference = doc(db, "Users", id);
      const user = await getDoc(reference);
      if (user.exists()) {
        var data = (user.data());
        if(data.user == "Admin"){
            window.location.href = "Admin/Add Student/addStd.html"
        }else {
          localStorage.setItem('userUID', id);
            window.location.href = "Student/Profile/profile.html" 
        }
      }
    })
    .catch((err) => {
      alert(err);  
    });
};