var form1 = document.createElement('form')
document.body.appendChild(form1)

var input1 = document.createElement('input')
form1.appendChild(input1)
var input2 = document.createElement('input')
form1.appendChild(input2)
var input3 = document.createElement('input')
form1.appendChild(input3)

var inputStyle = document.getElementsByTagName('input')

input1.style.width = '25%'
input2.style.width =  '25%'
input3.style.width = '25%'


input1.style.border = '2px solid black'
input2.style.border = '2px solid black'
input3.style.border = '2px solid black'

input1.style.margin = '5px'
input2.style.margin = '5px'
input3.style.margin = '5px'


var button = document.createElement('button')
document.body.appendChild(button)

form1.appendChild(button)

var buttonStyle = document.getElementsByTagName('button')
button.style.width = '50px'
button.style.height = '50px'
button.style.margin = '10px'

button.onclick = function(){
    alert(input1.value)
    alert(input2.value)
    alert(input3.value)
}

button.style.display = 'block'

document.getElementsByTagName('form')
form1.style.display = 'inline-block'

