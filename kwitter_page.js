//YOUR FIREBASE LINKS
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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function SendMessage() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message:msg,
          like:0
    });
  }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);

    name1 = message_data['name'];
    message1 = message_data['message'];
    like1 = message_data['like'];

    nameWithTag = "<h4>"+name1+"<img class = 'user_tick' src = 'tick.png'></h4>";
    messageTag = "<h4 class = 'message_h4'>"+message1+"</h4>";
    likeTag = "<button class = 'btn btn-primary' id =" + firebase_message_id +" onclick = 'updateLike(this.id)' value = " + like1 + ">";
    spanWithTag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: "+ like1 + " </span>"
    "</button>";
    row = nameWithTag + messageTag + likeTag + spanWithTag;
    document.getElementById("output").innerHTML += row; 



//End code
    } });  }); }
getData();

function updateLike(messageId) {
    console.log("confirm message id : "+ messageId);
    btnId = messageId;
    likes = document.getElementById(btnId).value ;
    updateLikes = Number(likes) + 1;
    console.log(updateLikes);
    firebase.database().ref(room_name).child(messageId).update({
          like: updateLikes
    });
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "kwitter.html";
    }