/*
   _            _     __                    
  | |_ __ _ ___| | __/ _| ___  _ __ ___ ___ 
  | __/ _` / __| |/ / |_ / _ \| '__/ __/ _ \
  | || (_| \__ \   <|  _| (_) | | | (_|  __/
   \__\__,_|___/_|\_\_|  \___/|_|  \___\___|

  ===============================================================================

  CALL CONGRESS WIDGET

  ===============================================================================

  A generic widget include script to connect calls to congress

  http://github.com/tfrce/call-widget or <thomasalwyndavis@gmail.com> or http://taskforce.is for support

  ===============================================================================

  @source: https://raw.github.com/tfrce/call-widget/call-widget.js

  @licstart  The following is the entire license notice for the
             JavaScript code in this page.

  Copyright (C) 2013 Taskforce <http://taskforce.is>

  The JavaScript code in this page is free software: you can
  redistribute it and/or modify it under the terms of the GNU Affero
  General Public License (GNU GPL) as published by the Free Software
  Foundation, either version 3 of the License, or (at your option) any
  later version.  The code is distributed WITHOUT ANY WARRANTY;
  without even the implied warranty of MERCHANTABILITY or FITNESS FOR
  A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 
  As additional permission under GNU AGPL version 3 section 7, you may
  distribute non-source (e.g., minimized or compacted) forms of that
  code without the copy of the GNU AGPL normally required by section
  4, provided you include this license notice and a URL through which
  recipients can access the Corresponding Source.
 
 @license  The above is the entire license notice for the JavaScript
          code in this page.

*/
(function(window, document, version, callback) {
    // Load jQuery is not loaded
    var j, d;
    var loaded = false;
    if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js";
        script.onload = script.onreadystatechange = function() {
            if (!loaded && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                callback((j = window.jQuery).noConflict(1), loaded = true);
                j(script).remove();
            }
        };
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script);
    }
})(window, document, "1.10.2", function($, jquery_loaded) {
  // Execute widget code here
  
  var tforce_config = window.tforce_config;
  
  if(typeof tforce_config.campaign === 'undefined') {
    return false;
  }
  

  var campaign = tforce_config.campaign;

  function isValidPhoneNumber(value) {
    if (!value) return false;
    var count = value.length;

    return count == 10 || count == 11;
  }

  function isValidZipCode(value) {
      if (!value) return false;
      var count = value.length;

      return count == 5;
  }
  
  // Widget code here
  $('#tf-call-tool').on('submit', function (ev){

    // Select form elements
    var form = $(ev.currentTarget);
    var zipCodeEl = $('#tf-zip-code', form); 
    var phoneNumberEl = $('#tf-phone-number', form); 
    var submitEl = $('#tf-submit', form); 
    var submitText = submitEl.val();
    var submitWaitingText = submitEl.attr('data-waiting-text') || 'Calling';

    // Reset any error messages
    $(zipCodeEl).removeClass('tf-input-error');
    $(phoneNumberEl).removeClass('tf-input-error');
    $('#tf-error-text').text('');
    var errors = false;

    // Validate form inputs
    if(zipCodeEl.length > 0) {
      var zipCode = zipCodeEl.val().replace(/[^\d.]/g, '');
      // Valid Zip?
      if (!isValidZipCode(zipCode)) {
          zipCodeEl.addClass('tf-input-error');
          errors = true;
      }
    }

    // Valid Phone?
    var phoneNumber = phoneNumberEl.val().replace(/[^\d.]/g, '');

    if (!isValidPhoneNumber(phoneNumber)) {
        phoneNumberEl.addClass('tf-input-error');
        errors = true;
    }

    // If any errors, cancel submitting the form
    if(errors) {
      return false;
    }


    // Disable buttons
    zipCodeEl.attr('disabled', 'disabled');
    phoneNumberEl.attr('disabled', 'disabled');
    submitEl.attr('disabled', 'disabled').val(submitWaitingText);
    console.log(campaign, phoneNumber, zipCode)
    // 9498788202 - sina
    // 4242351643 - skype
    // 4154949855 - gvoice
    //http://call.taskforce.is/create?campaignId=restrict-nsa&userzip=94110&userPhone=4242351643
    var url = 'http://call-congress.taskforce.is/create?campaignId=' + campaign + '&userPhone=' + phoneNumber;
    if(typeof zipCode !== 'undefined') {
      url += '&userzip=' + zipCode;
    }
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'jsonp',
      crossDomain: true,
      success: function (res) {
        if(res.message !== 'queued') {
          $('#tf-error-text').text(res.message);
        } else {
          $('#tf-call-widget-form').hide();
          $('#tf-call-widget-success').show();
        }
        zipCodeEl.removeAttr('disabled');
        phoneNumberEl.removeAttr('disabled');
        submitEl.removeAttr('disabled').val(submitText);
      },
      error: function () {
        $('#tf-error-text').text('An Unknown error happened');
        zipCodeEl.removeAttr('disabled');
        phoneNumberEl.removeAttr('disabled');
        submitEl.removeAttr('disabled').val(submitText);
      }
    });
    return false;
  })
});
