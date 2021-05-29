var firebaseConfig = {
    apiKey: "AIzaSyAMhXcuHdNcHysXr5cr_Z7VyKaPMHBOBmo",
    authDomain: "loginpage-8684e.firebaseapp.com",
    projectId: "loginpage-8684e",
    storageBucket: "loginpage-8684e.appspot.com",
    messagingSenderId: "326996126850",
    appId: "1:326996126850:web:12db9584d89deeded1189b",
    measurementId: "G-247W7KV34K",
};
firebase.initializeApp(firebaseConfig);
firebase.auth();

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => window.alert(e.message));
    window.alert("SignedIn");
    window.location.replace("index.html");

}

function login() {
    var email = document.getElementById("email_");
    var password = document.getElementById("password_");
    const promise = firebase.auth().signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Loggedin");
    window.location.replace("index.html");

}
firebase.auth().onAuthStateChanged(function(user) {});