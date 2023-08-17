
// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyDuej_VaoIbwnQN8Efe2w_oOBCJN9cVX9I",
//     authDomain: "agrofarm-ef14a.firebaseapp.com",
//     projectId: "agrofarm-ef14a",
//     storageBucket: "agrofarm-ef14a.appspot.com",
//     messagingSenderId: "303077175645",
//     appId: "1:303077175645:web:ea85dec13023d8b40fb8b4"
// });
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// // signup function
// const signUp = () => {

//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;


//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed in 
//             var user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ..
//         });
// }

// // sign in function
// const signIn = () => {

//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;

//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed in
//             var user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//         });


// }

// function signIn() {
     
// }

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyDuej_VaoIbwnQN8Efe2w_oOBCJN9cVX9I",
//     authDomain: "agrofarm-ef14a.firebaseapp.com",
//     projectId: "agrofarm-ef14a",
//     storageBucket: "agrofarm-ef14a.appspot.com",
//     messagingSenderId: "303077175645",
//     appId: "1:303077175645:web:ea85dec13023d8b40fb8b4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// document.getElementById("login-btn").addEventListener('click', function () {

//     const loginEmail = document.getElementById("login-email").value;
//     const loginPassword = document.getElementById("login-password").value;

//     signInWithEmailAndPassword(auth, loginEmail,loginPassword)
//         .then((userCredential) => {
            
//             const user = userCredential.user;
            
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });




// });


const signupBtn = document.querySelector('#signup-btn');
    signupBtn.addEventListener('click', e => {
    e.preventDefault();

    const name = document.querySelector('#register-name').value;
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;

    auth.createUserWithEmailAndPassword(name, email, password).then(cred => {
    console.log('User signed up!');
  });
});


const loginBtn = document.querySelector('#login-btn');
  loginBtn.addEventListener('click', e => {
  e.preventDefault();

  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(cred => {
      console.log('Logged in user!');
    })
    .catch(error => {
      console.log(error.message);
    })
});


const logoutBtn = document.querySelector('#logout-btn');
logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut();
  console.log('User signed out!');
})


auth.onAuthStateChanged(user => {
    if (user) {
      console.log(user.email + " is logged in!");
    } else {
      console.log('User is logged out!');
    }
  });
