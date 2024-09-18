function savedata(){
    let email,passward,cpassward;
    email = document.getElementById("email").value
    passward = document.getElementById("passward").value
    cpassward = document.getElementById("cpassward").value

    let user_index = new Array();
    user_index = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  
    user_index.push({
            "email": email,
            "passward":passward,
            "cpassward": cpassward

        })
        localStorage.setItem("users",JSON.stringify(user_index));
    }
