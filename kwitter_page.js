//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD7M5i5IGeFlZilov1UAuHqZWCnxoN_JrQ",
      authDomain: "kwitter-b074f.firebaseapp.com",
      databaseURL: "https://kwitter-b074f-default-rtdb.firebaseio.com",
      projectId: "kwitter-b074f",
      storageBucket: "kwitter-b074f.appspot.com",
      messagingSenderId: "530024463573",
      appId: "1:530024463573:web:841d5ad6f7951755f4765c"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
});
      document.getElementById("msg").value = "";
}
