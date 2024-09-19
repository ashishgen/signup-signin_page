function savedata(){
    let email,passward,cpassward;
    email = document.getElementById("email").value
    passward = document.getElementById("passward").value
    cpassward = document.getElementById("cpassward").value

    let user_index = new Array();//Initialize user_index as a new array
    user_index = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    //Retrieve and parse the data from local storage
    //localStorage.getItem("users"): Retrieves the item named “users” from local storage.
    // JSON.parse(...): Converts the JSON string back into a JavaScript object.
    // The ternary operator ? : checks if the parsed data is truthy (i.e., not null or undefined). 
    // If it is, it assigns the parsed data to user_index; otherwise, it assigns an empty array.
    if(passward==cpassward){
        alert("Successful Registered")
    }
    else{
        alert("passward not matched")
    }
 

     user_index.push({
            "email": email,
            "passward":passward,
            "cpassward": cpassward

        })
       

        localStorage.setItem("users",JSON.stringify(user_index));
        //JSON.stringify() to convert an object to a JSON string
        //const obj = { name: "Alice", age: 25 };
        // const jsonString = JSON.stringify(obj);
        // console.log(jsonString); // Output: {"name":"Alice","age":25}
    }
