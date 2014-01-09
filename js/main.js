
function isValidPhoneNumber(value) {
    if (!value) return false;
    var count = value.replace(/[^0-9]/g, "").length;

    return count == 10 || count == 11;
}

function isValidZipCode(value) {
    if (!value) return false;
    var count = value.replace(/[^0-9]/g, "").length;

    return count == 5;
}


var zipCodeError = function (el) {
  document.getElementById("error-text").innerHTML += "Invalid Zip";

};

var phoneError = function (el) {
  document.getElementById("error-text").innerHTML += "Invalid Phone";
};


// On form submit, validate fields

var onFormSubmit = function (e) {
  document.getElementById("error-text").innerHTML = "";
  e.preventDefault();
  var userZip = document.getElementById("userZip");
  var userPhone = document.getElementById("userPhone");

  console.log(isValidZipCode(userZip.value), isValidPhoneNumber(userPhone.value));

  var errors = false;

  // Valid Zip?
  if(!isValidZipCode(userZip.value)) {
    zipCodeError(userZip);
    errors = true;
  }

  // Valid Phone?
  if(!isValidPhoneNumber(userPhone.value)) {
    phoneError(userPhone);
    errors = true;
  }

  if(errors) {
    return false;
  }


  // Instead of sending an ajax request, lets just assume success and create an iframe to do the call
  var iframe = document.createElement('iframe');
  iframe.style.display = "none";
  iframe.src = 'http://call.taskforce.is/create';
  document.body.appendChild(iframe);

  // Hide form etc below here;

  return false;
}

// Attach listener to call form

var ele= document.getElementById("call-form");
if(ele.addEventListener){
    ele.addEventListener("submit", onFormSubmit, false);  //Cool modern browser!
} else if (ele.attachEvent){
    ele.attachEvent('onsubmit', onFormSubmit);          //The evil IE needs extra
}     