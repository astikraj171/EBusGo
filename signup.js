function validate(){
    var f =0;
    var firstName = document.forms["myForm"]["firstName"].value;
    var lastName = document.forms["myForm"]["lastName"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;
    var city = document.forms["myForm"]["city"].value;
    var state = document.forms["myForm"]["state"].value;
    if(phone.length == 10){
        document.getElementById("phone").innerHTML = " ";
        f++;
    }
    else{
        document.getElementById("phone").innerHTML = "*please enter correct mobile no";
    }
    var pattern = /^[a-z A-Z]{1,30}$/;
    if(firstName.match(pattern)){
        document.getElementById("firstName").innerHTML = " ";
        f++;
    }
    else{
        document.getElementById("firstName").innerHTML ="*please enter only alphabet";
    }
    if(lastName.match(pattern)){
        document.getElementById("lastName").innerHTML = " ";
        f++;
    }
    else{
        document.getElementById("lastName").innerHTML ="*please enter only alphabet";
    }
    if(city.match(pattern)){
        document.getElementById("city").innerHTML = " ";
        f++;
    }
    else{
        document.getElementById("city").innerHTML ="*please enter only alphabet";
    }
    if(state.match(pattern)){
        document.getElementById("state").innerHTML = " ";
        f++;
    }
    else{
        document.getElementById("state").innerHTML ="*please enter only alphabet";
    }
    pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(pattern)) {
        document.getElementById("email").innerHTML = " ";
        f++;
    }
    else document.getElementById("email").innerHTML = "*please provide correct email";
    if (f == 6){
        alert("form submitted successfully");
        return true;
    }
    else return false;
    
}
