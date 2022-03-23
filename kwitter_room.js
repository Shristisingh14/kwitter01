var firebaseConfig = {
      apiKey: "AIzaSyDX4r79-q6pIDmM33bbHz3_G_4Sx90ALVo",
      authDomain: "kwitter01-47b79.firebaseapp.com",
      databaseURL: "https://kwitter01-47b79-default-rtdb.firebaseio.com",
      projectId: "kwitter01-47b79",
      storageBucket: "kwitter01-47b79.appspot.com",
      messagingSenderId: "486448685500",
      appId: "1:486448685500:web:facd6564c943b5f72fcbb9",
      measurementId: "G-EJ6ZE4ZLBR"
    };
      firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div> <hr>";
       document.getElementById("output").innerHTML += row;
    });
 });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}