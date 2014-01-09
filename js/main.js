(function() {

	// We'l use these
	var errorBox = document.getElementById("error-text"),
		form = document.getElementById("call-form");

	var isValidPhoneNumber= function (value) {
		// Only Allow 9 digit US numbers accepting common formats
        return !!value.match(/^(?:\(\d{3}\)|\d{3})(?: *- *)?\d{3}(?: *- *)?\d{4}$/);
    };

    var isValidZipCode = function (value) {
		// Only allow 5 numbers
        return !!value.match(/^[0-9]{5}$/);
    };

    var zipCodeError = function(el) {
        errorBox.innerHTML += "That's an invalid zip code.";
        document.getElementById("userZip").parentNode.parentNode.className += " has-error";
    };

    var phoneError = function(el) {
        errorBox.innerHTML += " That's an invalid phone number.";
        document.getElementById("userPhone").parentNode.parentNode.className += " has-error";

    };


    // On form submit, validate fields

    var onFormSubmit = function(e) {
        var userZip = document.getElementById("userZip"),
			userPhone = document.getElementById("userPhone"),
			errorZones = document.getElementsByClassName("form-group"),
			errors = false;

		// clear error styles
		errorZones[0].className = errorZones[0].className.replace(/has\-error/g, "");
		errorZones[1].className = errorZones[1].className.replace(/has\-error/g, "");

        errorBox.innerHTML = "";
        errorBox.display = "none";

        e.preventDefault();

        console.log(isValidZipCode(userZip.value), isValidPhoneNumber(userPhone.value));


        // Valid Zip?
        if (!isValidZipCode(userZip.value)) {
            zipCodeError(userZip);
            errors = true;
        }

        // Valid Phone?
        if (!isValidPhoneNumber(userPhone.value)) {
            phoneError(userPhone);
            errors = true;
        }

        errorBox.style.display = errors ? "block" : "none";

        if (!errors) {
			// Instead of sending an ajax request, lets just assume success and create an iframe to do the call
			// uri encode inputs and strip formatting characters
			var phone = encodeURIComponent(userPhone.value.replace(/[^0-9]/g,"")),
				zip = encodeURIComponent(userZip.value),
				url = form.action + "?userPhone=" + phone + "&zipcode=" + zip + "&campaignId=restrict-nsa",
			iframe = document.createElement('iframe');
			iframe.style.display= "none";
			iframe.src = url;

			document.body.appendChild(iframe);

			document.getElementById("call-form").className += " fade-out";
			document.getElementById("callHeader").textContent = "Calling You Now...";
		}
        // Hide form etc below here;

        return false;
    };

    // Attach listener to call form

    if (form.addEventListener) {
        form.addEventListener("submit", onFormSubmit, false); //Cool modern browser!
    } else if (form.attachEvent) {
        form.attachEvent('onsubmit', onFormSubmit); //The evil IE needs extra
    }

}());