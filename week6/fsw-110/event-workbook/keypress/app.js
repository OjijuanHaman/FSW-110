/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */


document.addEventListener('keypress', function(event) {
    var key = event.keyCode;
    document.getElementById("output").innerHTML = "The KEY code is: " + key;
  })