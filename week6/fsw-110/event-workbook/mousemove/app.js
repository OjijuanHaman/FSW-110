document.addEventListener('mouseover',function(e){
    var xPosition = e.clientX
    var yPosition = e.clientY
    document.querySelector(".red-box").innerHTML = "x = " + xPosition + " \n " + "   y = " + yPosition


})