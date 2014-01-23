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

  <thomasalwyndavis@gmail.com> or http://taskforce.is for support

  ===============================================================================

  @source: https://raw.github.com/tfrce/project-megaphone/gh-pages/widget.js

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
 
 @licend  The above is the entire license notice for the JavaScript
          code in this page.


var tfrce_config = {
campaign: 'tpp', // no default
base_css: true, //default is true
zip_in_web_form, 'false', //default is yes
custom_css, 'http://blah.com/form.css', //default is none
title: 'Call your representatives now', // default is this.
iframe_container_css: 'position:fixed;width:100%;bottom:0;left:0;z-index:100000; padding: 0 20px;-webkit-box-sizing: border-box; -moz-box-sizing: border-box;' // default is this
call_script_html: 'Hi, my name is _____ from _____, and I'm one of your constituents. I'm calling to ask that you not support <strong>fastracking the TPP</strong>. The TPP would blah blah blah.' // no default
};
*/
(function(window, document, version, callback) {
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
  var tforce_config = window.tforce_config;
  
  if(typeof tforce_config.campaign === 'undefined') {
    return false;
  }
  

  var campaign = tforce_config.campaign;

  /*
  fig.show_style = widget_config.show_style || 'default';
  */
  console.log(tforce_config);
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
  // Widget code here
  $('#tf-call-tool').on('submit', function (ev){
    var form = $(ev.currentTarget);
    var zipCodeEl = $('#tf-zip-code', form); 
    var phoneNumberEl = $('#tf-phone-number', form); 
    var zipCode = zipCodeEl.val();
    var phoneNumber = phoneNumberEl.val();
    if (!isValidZipCode(zipCode)) {
        //zipCodeError(userZip);
        errors = true;
    }

    // Valid Phone?
    if (!isValidPhoneNumber(phoneNumber)) {
        //phoneError(userPhone);
        errors = true;
    }
    // 9498788202 - sina
    // 4242351643 - skype
    // 4154949855 - gvoice
    //http://call.taskforce.is/create?campaignId=restrict-nsa&userzip=94110&userPhone=4154949855
    $.ajax({
      url: 'http://call-congress.taskforce.is/create?campaignId=restrict-nsa&userzip=94110&userPhone=1asdasd4242351643',
      type: 'GET',
      dataType: 'jsonp',
      crossDomain: true,
      success: function () {
        console.log(arguments);
      },
      error: function () {
        console.log(arguments);
      }
    });
    console.log(zipCode, phoneNumber);
    return false;
  })
});
