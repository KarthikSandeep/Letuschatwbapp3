
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);

      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroomname"
      });
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name ="+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();


function redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
