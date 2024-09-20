// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Your web app's Firebase configuration
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
const db = getFirestore();

const tableBody = document.getElementById("stdResult");
const studentResult = [];

const renderTable = () => {
    tableBody.innerHTML = "";
    studentResult.forEach((x) => {
      tableBody.innerHTML += `
          <tr>
          <td>${x.Course}</td>
          <td>${x.studentId}</td>
          <td>${x.marks}</td>
          <td>${x.totalMarks}</td>
          <td>${x.grade}</td>
          </tr>
          `;
    });
  };
  
  const id = localStorage.getItem('userUID');
  console.log(id);
  
  if (id) {
      const reference = doc(db, "Users", id);
      const user = await getDoc(reference);
      
      if (user.exists()) {
          var data = user.data(); // Access user data
          console.log(data);
          

      } else {
          console.log("No such user found!");
      }
  } else {
      console.log("User ID not found in localStorage.");
  }


// Call the function to fetch user data
fetchData();
