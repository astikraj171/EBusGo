function validate(){
    var f =0;
    var username = document.forms["myForm"]["username"].value;

    pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (username.match(pattern)) {
        document.getElementById("username").innerHTML = " ";
        f++;
    }
    else document.getElementById("username").innerHTML = "*please provide correct username";
    if (f == 1){
        alert("form submitted successfully");
        return true;
    }
    else return false;
    
}
