//Function for checking Name 
function containsNumericOrSpecial(str) {
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if ((charCode < 48 || charCode > 57) && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
        return false;
      }
    }
    return true;
}


//Function for checking valid mail
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//Function for cehcking a valid mobile number
function isValidMobileNumber(mobileNumber) {
  var mobileNumberRegex = /^[0-9]{10}$/;
  return mobileNumberRegex.test(mobileNumber);
}



