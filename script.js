  // Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyBPgs2vnrEt7Xer55CwBrGqHU_QEGvJQwE",
  authDomain: "shop-f3e91.firebaseapp.com",
  databaseURL: "https://shop-f3e91-default-rtdb.firebaseio.com",
  projectId: "shop-f3e91",
  storageBucket: "shop-f3e91.appspot.com",
  messagingSenderId: "9864267437",
  appId: "1:9864267437:web:7da7a3608de44e4abb2824",
  measurementId: "G-6W921G3D0W"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function signup(){
    debugger;
    var _email = document.getElementById("email");
    var _password = document.getElementById("password");
    
     firebase.database().ref("user").set({
     email:_email.value,
     password:_password.value
      });

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(_email.value, _password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
    window.location.href = "Login.html";    

  }

  function login(){
    debugger;
    var _email = document.getElementById("email");
    var _password = document.getElementById("password");
    
    
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(_email.value,_password.value);
     promise.catch(e => alert(e.message));
     alert("signed in " +  email.value);
window.location.href = "Home.html";    
}

