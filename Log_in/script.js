 var usernameError = document.getElementById('username-error')
 var PasswordError = document.getElementById('Password-error')
 var SubmitError = document.getElementById('Submit-error')
 function ValidateName(){
     var username=document.getElementById('UserName').value;
     if(username.length==0){
         usernameError.innerHTML='Username is required ';
         return false;
     }
     usernameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
     return true;
 }
 function ValidatePassword(){
    // Get the value of the input field with id="password"
    var pass=document.getElementById('Password').value;
    if(pass==""){
        usernameError.innerHTML='Password is required ';
        return false;
    }
    usernameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!ValidateName() || !ValidatePassword()){
        SubmitError.style.display ='block';
        SubmitError.innerHTML ='Please fix error';
        setTimeout(function(){SubmitError.style.display='none';},3000);
        return false;

    }
}

// function validateForm() {
//     // Get the value of the input field with id="email"
//     var email = document.getElementById("email").value;
//     // Get the value of the input field with id="password"
//     var password = document.getElementById("password").value;
//     // Regular expression to check if the email is in the correct format
//     var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     // Check if the email is empty
//     if (email == "") {
//       alert("Email field must be filled out");
//       return false;
//     }
//     // Check if the email is in the correct format
//     if (!email.match(emailRegex)) {
//       alert("Please enter a valid email address");
//       return false;
//     }
//     // Check if the password is empty
//     if (password == "") {
//       alert("Password field must be filled out");
//       return false;
//     }
//     // Send a request to the server to check the user's credentials
//     // If the credentials are correct, return true to submit the form
//     // If the credentials are incorrect, display an error message and return false to prevent the form from being submitted
//     return true;
//   }