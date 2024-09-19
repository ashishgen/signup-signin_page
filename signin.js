function savedata(){
    let email,passward;
    email = document.getElementById("email").value
    passward = document.getElementById("passward").value
    

    let user_index = new Array();
    user_index = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
   if (user_index){
    email==email && passward==passward

   location.replace("./profile.html")
   }
   else{
    alert("Data Not found")
   }
  
      

        localStorage.setItem("users",JSON.stringify(user_index));
      
    }



