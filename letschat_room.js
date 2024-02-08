function logout(){
    window.location = "index.html";
}

user_name = localStorage.getitem("user_name");
document.getElementById("user_name").innerHTML = user_name;

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "index.html";
}