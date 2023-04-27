//Function for checking Name
function containsNumericOrSpecial(str) {
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (
      (charCode < 31 || charCode > 32) &&
      (charCode < 48 || charCode > 57) &&
      (charCode < 65 || charCode > 90) &&
      (charCode < 97 || charCode > 122)
    ) {
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
  if (mobileNumber.length == 0) {
    return true;
  }
  var mobileNumberRegex = /^[0-9]{10}$/;
  return mobileNumberRegex.test(mobileNumber);
}

var i = null;

const button = document.querySelector("#submit");

button.addEventListener("click", function () {
  console.log("Button clicked!");

  var st_name = document.getElementById("name").value;

  var st_email = document.getElementById("email").value;

  var st_phone = document.getElementById("phone").value;

  var flag = true;

  if (containsNumericOrSpecial(st_name) === false) {
    flag = false;
    window.alert("Please Enter Valid Name");
  } else if (isValidEmail(st_email) === false) {
    flag = false;
    window.alert("Please Enter Valid Email");
  }

  if (isValidMobileNumber(st_phone) === false) {
    flag = false;
    window.alert("Please Enter Valid Mobile Number");
  }

  if (flag === true) {
    // const obj = {"name": st_name , "email" : st_email , "phone" :st_phone};
    // localStorage.setItem("dummydata", JSON.stringify(obj));
    if (localStorage.getItem("itemJson") == null) {
      itemJsonArray = [];
      itemJsonArray.push([st_name, st_phone, st_email]);
      localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    } else {
      itemJsonArrayStr = localStorage.getItem("itemJson");
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      itemJsonArray.push([st_name, st_phone, st_email]);
      localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));

      // submit.preventDefault();

      // document.getElementById("result").innerHTML = localStorage.getItem("itemJson");
    }
    itemJsonArrayStr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    if (i == null) {
      i = 0;
    }
    for (i = i; i < itemJsonArray.length; ++i) {
      var rowCount = myTable.rows.length;
      var row = myTable.insertRow(rowCount);
      row.insertCell(0).innerHTML = i + 1;
      row.insertCell(1).innerHTML = itemJsonArray[i][0];
      row.insertCell(2).innerHTML = itemJsonArray[i][1];
      row.insertCell(3).innerHTML = itemJsonArray[i][2];
      i = i;
    }
  }
});

const resetbutton = document.querySelector("#clr");

resetbutton.addEventListener("click", function () {
  console.log("Button clicked!");

  localStorage.removeItem("itemJson");
  location.reload();
});
