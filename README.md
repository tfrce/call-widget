# Embed This in Your Website to Help Your Users Call Congress

There are 2 ways to embed it

1. A Simple Iframe

Copy this into your page

	<iframe style="position:absolute;left:5px;bottom:5px;z-index:1000;height:300px;width:420px;" src=""></iframe>


It supports the following url options
...

2. An HTML Form

This is how you could create a form pointing to the correct url.

    <h1>Call Your Representative</h1>
    <form method="post" action="http://call.taskforce.is/create" role="form">
        <input type="text" name="userZip" placeholder="e.g. 94070">
        <input type="tel" name="zipcode" placeholder="e.g. 6503409898">
        <input type="hidden" value="restrict-nsa">
        <label for="signup">
			<input type="checkbox" id="signup" name="signup"> Sign up for SMS alerts for future actions
        </label>
        <input type="submit" value="Call Now">
	</form>

You may use ajax to submit the form. After the form submits, the user will be redirected back to your page. *TODO: IMPLEMENT THIS*