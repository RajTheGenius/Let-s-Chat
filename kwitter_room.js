
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAD6t-oc2JsJylphh-gXExHgDkpZ4Ofwk0",
  authDomain: "kwitter-app-1bb6e.firebaseapp.com",
  databaseURL: "https://kwitter-app-1bb6e-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-1bb6e",
  storageBucket: "kwitter-app-1bb6e.appspot.com",
  messagingSenderId: "756926714958",
  appId: "1:756926714958:web:106e480ecaf6e0944f5f1f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var UserName = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + UserName + "!";

function addRoom() {
  var room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"Adding room"
  });
  localStorage.setItem("Room_name", room_name);
  window.location = "Kwiiter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      // Start code
      Room_names = childKey;
      console.log("Room name = " + Room_names);
      row = "<div class = 'room_name' id = "+ Room_names +" onclick = 'redirect(this.id)' > #"+ Room_names +" </div>";
      document.getElementById("output").innerHTML += row;
      //End Code
    });
  });

}

getData();

function redirect(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
