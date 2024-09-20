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

const tableBody = document.getElementById("stdData");
const studentData = [];

const renderTable = () => {
    tableBody.innerHTML = "";
    studentData.forEach((x) => {
      tableBody.innerHTML += `
          <tr>
          <td>${x.firstName}</td>
          <td>${x.lastName}</td>
          <td>${x.cnic}</td>
          <td>${x.email}</td>
          </tr>
          `;
    });
  };
  
const getData = async ()=>{
    const reference = collection(db, "studentRecord");
    const dt = await getDocs(reference);

    dt.forEach((doc)=>{
        studentData.push({
            ...doc.data()
        });
    })
    console.log(studentData);
    renderTable();
}
getData()