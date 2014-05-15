# Call Widget

The call widget is a Javascript tool which allows developers to easily embed access to our [call congress tool](https://github.com/tfrce/call-congress). 

Check out the <a href="http://tfrce.github.io/call-widget/example/default.html">demo!</a>

## Getting Started

```html
<link href="//call-widget.taskforce.is/css/basic.min.css" rel="stylesheet">
<div id="tf-call-widget-container">
  <div id="tf-call-widget-form">
    <h5>Call Your Legislators</h5>
    <form method="get" action="https://call-widget.taskforce.is/create" id="tf-call-tool" role="form">
        <label for="tf-zip-code" id="tf-zip-code-label">Zip Code</label>
        <input type="text" id="tf-zip-code">
        <label for="tf-phone-number" id="tf-phone-number-label">Phone Number</label>
        <input type="text" id="tf-phone-number">
        <input id="tf-submit" type="Submit" data-waiting-text="Calling Now" value="Call Now">
    </form>
  </div>
  <div id="tf-call-widget-success" style="display: none;">
    <h5>What to say</h5>
       <p>Hi, I'm one of Representative/Senator _______'s constituents, and I'm calling  to oppose Fast Track for the Trans-Pacific Partnership agreement. Congress needs time to debate and amend trade agreements that affect all of us. Fast Tracking the TPP is undemocratic, and I expect my lawmakers to oppose it. I'll be watching this issue closely in 2014.</p>
      <p><strong>You can press * at any time to hang up and call the next representative.</strong></p>
      <p id="tf-reset">Call didn't come through? Try again.</p>
    </div>
    <span id="tf-error-text"></span>
  </div>
<script>
  var tforce_config = {
    campaign: 'stop-fast-track'
  };
</script>
<script type="text/javascript" src="//call-widget.taskforce.is/call-widget.min.js"></script>
```

Simply copy and paste that where you would like your form to appear. Make sure the **ids** are set but feel free to change the structure of the HTML/CSS to match your website's design.

You can view a basic example of the form on our [default.html](http://tfrce.github.io/call-widget/example/default.html).

On success the `div#tf-call-widget-success` will be shown and the form hidden. 

Feel free to remove the external style sheet, if you would like to add your own styles. Error messages are done in the css using `:after` pseudo class.


## Direct API Access

You don't need to use our Javascript and can view the [full documentation](http://github.com/tfrce/call-congress) of the call-congress API or even run up your own call-congress server. Use Github issues to get in touch!
