var firebaseConfig = {
    apiKey: "AIzaSyAQrEjPOf-bQSXmKOPO6e5Q3TkY3c1GN98",
    authDomain: "echat-website-edition.firebaseapp.com",
    databaseURL: "https://echat-website-edition-default-rtdb.firebaseio.com",
    projectId: "echat-website-edition",
    storageBucket: "echat-website-edition.appspot.com",
    messagingSenderId: "340073589780",
    appId: "1:340073589780:web:da0aec0a06230656260b01"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
//YOUR FIREBASE LINKS
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}