var Name = document.getElementById('name-error');
var mobileNumber = document.getElementById('mobile-error');
var StudentID = document.getElementById('studentId-error');
var GPA_error = document.getElementById('GPA-error');
var Date_of_Birth = document.getElementById('date-error');
var gender = document.getElementById('gender-error');
var Level = document.getElementById('level-error');
var Department = document.getElementById('department-error');
var email_error = document.getElementById('email-error');
var male = document.getElementById('gender-error');
var female = document.getElementById('gender-error');
var submit = document.getElementById('submit-error');

function validationName(){
  var name = document.getElementById("input_name").value;
  if(name.length == 0){
    Name.innerHTML = 'please add name';
        return false ;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    Name.innerHTML = 'Write full name';
        return false ;
  }
  Name.innerHTML = "<i class=\"gg-check-o\"></i>";
       return true ;
}

function validationMobile(){
  var phone = document.getElementById("input_mobile").value;
  if(phone.length == 0){
    mobileNumber.innerHTML = 'please add mobile number';
        return false ;
  }
 if(phone.length != 11){
    mobileNumber.innerHTML = 'mobile number should be 11 digits';
        return false ;
  }
 if(!phone.match(/^[0-9]{11}$/)){
    mobileNumber.innerHTML = 'only digits';
        return false ;
 }
    mobileNumber.innerHTML = "<i class=\"gg-check-o\"></i>";
       return true ;
}


function validationEmail(){
  var email = document.getElementById("input_email").value;
  if(email.length == 0){
    email_error .innerHTML = 'add your email';
        return false ;
  }
 if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
   email_error .innerHTML = 'email invalid';
        return false ;
 }
    email_error .innerHTML = "<i class=\"gg-check-o\"></i>";
       return true ;
}


function validationDep(){
  var dep = document.getElementById("input_dep").value;
  if(dep.length == 0){
      Department.innerHTML = 'please add your department';
        return false ;
  }
  if(!dep.match(/^[A-Za-z]*$/ )){
    Department.innerHTML = 'Write a proper department name';
        return false ;
  }
   if(dep.length<2){
    Department.innerHTML = 'Write a proper department name';
        return false ;
  }
   Department.innerHTML = "<i class=\"gg-check-o\"></i>";
       return true ;
}


function validationGPA(){
  var gpa = document.getElementById("input_GPA").value;
  if(gpa.match(/^[A-Za-z]*$/)){
   GPA_error.innerHTML = 'only digits';
        return false ;
 }
  if(gpa > 4 || gpa == 0){
    GPA_error.innerHTML = 'invalid GPA';
        return false ;
  }
    GPA_error.innerHTML = "<i class=\"gg-check-o\"></i>";
       return true ;
}

function validationID(){
  var id = document.getElementById("input_id").value;
  if(id.match(/^[A-Za-z]*$/)){
   StudentID.innerHTML = 'only digits';
        return false ;
 }
  if(id==0) {
    StudentID.innerHTML = 'invalid ID';
    return false ;
  }
    StudentID.innerHTML = "<i class=\"gg-check-o\"></i>";
       return true ;
}

 function send() {
  var genders = document.getElementsByName("gender");
  if (genders[0].checked == true || genders[1].checked == true ) {
                document.getElementById('msg').innerHTML ="<i class=\"gg-check-o\"></i>";
                return true;
                }

return false ;
}

function sendlvl(){
    var lvl = document.getElementsByName("level");
       if(lvl[0].checked == true || lvl[1].checked == true || lvl[2].checked == true || lvl[3].checked == true){
         document.getElementById('msg2').innerHTML ="<i class=\"gg-check-o\"></i>";
                return true;
       }


return false ;
}
function send_status(){
  var stat = document.getElementsByName("status");
  if (stat[0].checked == true || stat[1].checked == true ) {
                document.getElementById('msg3').innerHTML ="<i class=\"gg-check-o\"></i>";
                return true;
                }

return false ;
}



 function reset_msg() { ///// function to remove the check mark when reseting
                document.getElementById('msg').innerHTML = '';
                document.getElementById('msg2').innerHTML = '';
                document.getElementById('msg3').innerHTML = '';
            }


function validationform(){
  if(!send() || !validationEmail() || !validationDep() || !validationID() || !validationName() || !validationGPA()){
      submit_error.innerHTML = 'please fill the spaces above to submit';
      return false ;
  }
  if(!sendlvl() || !send_status()){
     submit.innerHTML = 'please fill the spaces above to submit';
      return false ;
  }
 }
