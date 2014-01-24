# Call Widget

The call widget is a Javascript tool which allows developers to easily embed access to our [call congress tool](https://github.com/tfrce/call-congress). 

## Getting Started

```html
<link href="//call-widget.taskforce.is/call-widget/css/basic.css" rel="stylesheet">
<div id="tf-call-widget-container">
  <div id="tf-call-widget-form">
    <h5>Call Your Legislators</h5>
    <form method="get" action="http://call.taskforce.is/create" id="tf-call-tool" role="form">
        <label for="tf-zip-code" id="tf-zip-code-label">Zip Code</label>
        <input type="text" id="tf-zip-code">
        <label for="tf-phone-number" id="tf-phone-number-label">Phone Number</label>
        <input type="text" id="tf-phone-number">
        <input id="tf-submit" type="Submit" data-waiting-text="Calling Now" value="Call Now">
    </form>
  </div>
  <div id="tf-call-widget-success" style="display: none;">
    <h5>What to say</h5>
    <p>Dear Rep, I don't like this</p>
    <p id="tf-reset">Call didn't come through? Try again.</p>
  </div>
  <span id="tf-error-text"></span>
</div>
<script>
  var tforce_config = {
    campaign: 'tpp'
  };
</script>
<script type="text/javascript" src="//call-widget.taskforce.is/call-widget/call-widget.min.js"></script>
```

Simply copy and paste that where you would like your form to appear. Make sure the **ids** are set but feel free to change the structure of the HTML/CSS to match your website's design.

You can view a basic example of the form on our [example.html](http://tfrce.github.io/call-widget/example/example.html).

## Direct API Access

You don't need to use our Javascript and can view the [full documentation](http://github.com/tfrce/call-congress) of the call-congress API or even run up your own call-congress server.