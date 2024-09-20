function savedata(){
    let email,passward;
    email=document.getElementById("email").value 
    passward=document.getElementById("passward").value 
    
    if(email.length===0){
        return alert("please enter email")
    }
    if(passward.length===0){
        return alert('please enter passward')
    }
     let user = {'email':email,"passward":passward}

     console.log(user)
    let user_exist= JSON.parse(localStorage.getItem("user"))

    let is_user_exist =user_exist.filter((v)=>{
        if(v.email===email && v.passward===passward){
            return v
        }
    })
    if(is_user_exist.length > 0){
        return location.replace("./profile.html")
    }
    else{
        return alert("please signup your account")
    }}
 
