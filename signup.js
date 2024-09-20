function savedata() {
    // if(user_index[0] == [{"email": email}]){
    //     alert("data already stored")
    // }
    // location.replace("./http://127.0.0.1:5500/index_signup_page.html")
    let email, passward, cpassward;//variable declare
    email = document.getElementById("email").value
    passward = document.getElementById("passward").value
    cpassward = document.getElementById("cpassward").value

    if (email.length === 0) {
        return alert("please type email id")
    }
    if (passward.length === 0) {
        return alert("please type passward")
    }
    if (cpassward.length === 0) {
        return alert("please type confirm passward")
    }
    if (passward !== cpassward) {
        return alert("passward and confirm passward not Matched")
    }
    let exist_user = JSON.parse(localStorage.getItem("user"))
    if (!exist_user) {
        let user = { "email": email, "passward": passward, "cpassward": cpassward }
        console.log(user)

        let user_list = [];
        user_list.push(user);
        localStorage.setItem("user", JSON.stringify(user_list))

    }
    else {
        let user = { "email": email, "passward": passward, "cpassward": cpassward }
        console.log(user)

        let is_user_exist = exist_user.filter((u) => {
            if (u.email === user.email) {
                return u;
            }
        })
        if (is_user_exist.length > 0) {
            return alert("user already exist")
        }
        exist_user.push(user);
        localStorage.setItem("user", JSON.stringify(exist_user))
        
    }

    return alert("user Registered Successfully")
}