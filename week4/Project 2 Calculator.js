

//create 3 divs//
var div1= document.createElement("div")
document.body.appendChild(div1)
var div2= document.createElement("div")
document.body.appendChild(div2)
var div3= document.createElement("div")
document.body.appendChild(div3)


var input1 = document.createElement('input')
document.body.appendChild(input1 )
var input2 = document.createElement('input')
document.body.appendChild(input2 )

var addButton = document.createElement('button')
document.body.appendChild(addButton)
var subButton = document.createElement('button')
document.body.appendChild(subButton)
var mulButton = document.createElement('button')
document.body.appendChild(mulButton)
var divButton = document.createElement('button')
document.body.appendChild(divButton)

var buttonStyle = document.getElementsByTagName('button')
for(i=0;i<4;i++){
    buttonStyle[i].style.padding = "1.50em"
   
}
var inputStyle = document.getElementsByTagName('input')
for(i=0;i<2;i++){
    inputStyle[i].style.padding = "1.50em"
    
}


