function addUser(){
    poop = document.getElementById("user_name").value;
    localStorage.setItem("user_name", poop);
    window.location = "letschat_room.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();

function logout(){
    window.location = "index.html";
}


