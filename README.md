# Call Widget

The call widget is a Javascript tool which allows developers to easily embed access to our [call congress tool](https://github.com/tfrce/call-congress). 

## Getting Started

```html
<link href="//call-widget.taskforce.is/call-widget/css/basic.css" rel="stylesheet">
<form></form>
<script type="text/javascript">
  var tforce_config = {
    campaign: 'eftp';
  }
</script>
<script type="text/javascript" src="//call-widget.taskforce.is/call-widget/call-widget.min.js"></script>
```

Simply copy and paste that where you would like your form to appear. Make sure the **ids** are set but feel free to change the structure of the HTML/CSS to match your website's design.

You can view a basic example of the form on our [example.html](http://tfrce.github.io/call-widget/example/example.html).

## Direct API Access

You don't need to use our Javascript and can view the [full documentation](http://github.com/tfrce/call-congress) of the call-congress API or even run up your own call-congress server.