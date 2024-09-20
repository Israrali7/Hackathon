// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
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
const db = getFirestore();



// Getting ids
let course = document.getElementById('course')
let studentId = document.getElementById('studentId')
let marks = document.getElementById('marks')
let totalMarks = document.getElementById('totalMarks')
let grade = document.getElementById('grade')

window.Add = () => {
    let obj = {
        Course: course.value,
        studentId: studentId.value,
        marks: marks.value,
        grade: grade.value,
        totalMarks: totalMarks.value,
    }
    console.log(obj);

    // const reference = doc(db, "Individual", obj.studentId );
    // setDoc(reference, obj)
    // .then((res)=>{
    //     console.log('add individual');
        
    // }).catch(()=>{
    //     console.log('individual not working');
        
    // })

    const ref = collection(db, "Result")
    addDoc(ref, obj)
        .then(() => {
            console.log(obj);
        })
        .catch((dbErr) => {
            console.log(dbErr);
        })

};
