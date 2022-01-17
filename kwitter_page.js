//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDMNfET6UQ8j4wwmaRwaNzZtTGUTobzy6I",
      authDomain: "kwitter-8aee7.firebaseapp.com",
      databaseURL: "https://kwitter-8aee7-default-rtdb.firebaseio.com",
      projectId: "kwitter-8aee7",
      storageBucket: "kwitter-8aee7.appspot.com",
      messagingSenderId: "362218046754",
      appId: "1:362218046754:web:e4ea0b278b4d05eda9517b",
      measurementId: "G-NQG3SZBQ0P"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
user_name=localStorage.getItem("username")
room_name=localStorage.getItem("room_name")

function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value=""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name= message_data["name"]
message= message_data["message"]
like= message_data["like"]
username_tag="<h4>"+ name + "<img class='user_tick' src='tick.png'> </h4> "
msg_tag="<h4 class='message_h4'>" + message + "</h4>"
like_button = "<button class='btn btn-warning' id="+ firebase_message_id + "value=" + like + "onclick=updatelikes(this.id)>"
span_with_likes = "<span class='glyphicon glyphicon-thumbs-up'> Like :" + like +"</span></button><hr>"

row= username_tag + msg_tag + like_button + span_with_likes
document.getElementById("output") +=row
//End code
      } });  }); }
      
getData();
function updatelikes(message_id) { console.log("clicked on like button - " + message_id); button_id = message_id; likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1; console.log(updated_likes); firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); }


function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("room_name")
      window.location = "index.html";
}