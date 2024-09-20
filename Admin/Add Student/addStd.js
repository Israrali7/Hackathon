// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, doc, setDoc, collection,addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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
const auth = getAuth();
const db = getFirestore();

// Getting ids from HTML elements
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName'); 
let email = document.getElementById('email'); 
let password = document.getElementById('password'); 
let cnic = document.getElementById('cnic');

window.signUp = () => {
    let obj = {
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value, 
        cnic: cnic.value,
        user : 'Student'
    };
    console.log(obj);

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
            console.log(res);
            obj.id = res.user.uid; 
            const reference = doc(db, "Users", obj.id);
            setDoc(reference, obj)
              .then(() => {
                console.log(obj);
                const ref = collection(db, "studentRecord")
                addDoc(ref, obj)
                    .then(() => {
                        console.log(obj);
                    })
                    .catch((dbErr) => {
                        console.log("collection" + dbErr);
                    }) 
              })
              .catch((dbErr) => {
                console.log("doc" + dbErr);
              });
        })
        .catch((err) => {
            alert(err);
        });
};
{/* <script type="module" src="addStd.js"></script>
<script>
    // JavaScript to toggle password visibility
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    
    togglePassword.addEventListener('click', function () {
        // Toggle the type attribute between password and text
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        
        // Toggle the eye / eye-slash icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
</script> */}
