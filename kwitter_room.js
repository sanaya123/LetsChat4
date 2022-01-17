// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArGNhwm9GqCU8a75HjgpTidAUum2SXfdo",
  authDomain: "lets-chat-webapp-abefb.firebaseapp.com",
  databaseURL: "https://lets-chat-webapp-abefb-default-rtdb.firebaseio.com",
  projectId: "lets-chat-webapp-abefb",
  storageBucket: "lets-chat-webapp-abefb.appspot.com",
  messagingSenderId: "573813164210",
  appId: "1:573813164210:web:ff3ee15293c94d1de261ab",
  measurementId: "G-H8BX91YPBS"
};

// Initialize Firebase
//const analytics = getAnalytics(app);

function addRoom(){
  var room_name = document.getElementById("room_name").value
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding Room Name"
  })
  localStorage.setItem("room_name", room_name)

  window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  
   row="<div class= 'room_name' id="+ Room_names + "onclick= 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>"
  document.getElementById("output").innerHTML+= row
  //End code
  });});}
getData();

function redirectToRoomName(room){
localStorage.setItem("room_name", room)

window.location="kwitter_page.html"
}

function logout(){
  localStorage.removeItem("username")
  localStorage.removeItem("room_name")
  window.location="kwitter.html"
}