

var head = document.createElement('heading')
document.body.appendChild(head)

var heading1 = document.createElement("h1")
heading1.innerHTML= "Add Subtract or Multiply"
head.appendChild(heading1)






var div1= document.createElement("div")
document.body.appendChild(div1)
div1.style.border="solid black 1px"
div1.style.color = 'silver'
var addMessage = document.createElement('h3')
addMessage.innerHTML = 'Enter two numbers and press button to add'
div1.appendChild(addMessage)

var div2= document.createElement("div")
document.body.appendChild(div2)
div2.style.border="solid black 1px"
var subMessage = document.createElement('h3')
subMessage.innerHTML = 'Enter two numbers and press button to subtract'
div2.appendChild(subMessage)

var div3= document.createElement("div")
document.body.appendChild(div3)
div3.style.border="solid black 1px"
var mulMessage = document.createElement('h3')
mulMessage.innerHTML = 'Enter two numbers and press button to multiply'
div3.appendChild(mulMessage)


div2.style.color ="silver"
div3.style.color = 'silver'


var input1 = document.createElement('input')
div1.appendChild(input1 )
var input2 = document.createElement('input')
div1.appendChild(input2 )

var input3 = document.createElement('input')
div2.appendChild(input3 )
var input4 = document.createElement('input')
div2.appendChild(input4 )

var input5 = document.createElement('input')
div3.appendChild(input5 )
var input6 = document.createElement('input')
div3.appendChild(input6 )



var addButton = document.createElement('button')
addButton.id = "add"
addButton.addEventListener('click',function(){
    
    var adding = input1.value
    var adding2 = input2.value
    var sum = Number(adding2) + Number(adding)
    
    var addAnswer = document.createElement('p')
    addAnswer.textContent = sum
    div1.appendChild(addAnswer)
})
div1.appendChild(addButton)

var subButton = document.createElement('button')
subButton.id= "sub"
subButton.addEventListener('click', function(){

    var sub1 = input3.value
    var sub2 = input4.value
    var difference = Number(sub1) - Number(sub2)

    var subAnswer = document.createElement('p')
    subAnswer.textContent = difference
    div2.appendChild(subAnswer)
})
div2.appendChild(subButton)



var mulButton = document.createElement('button')
mulButton.id= "mul"
mulButton.addEventListener('click', function(){

    var mul1 = input5.value
    var mul2 = input6.value
    var product = Number(mul1) * Number(mul2)

    var mulAnswer = document.createElement('p')
    mulAnswer.textContent = product
    div3.appendChild(mulAnswer)
})
div3.appendChild(mulButton)



var buttonStyle = document.getElementsByTagName('button')
for(i=0;i<3;i++){
    buttonStyle[i].style.padding = "1.50em"
   
}
var inputStyle = document.getElementsByTagName('input')
for(i=0;i<6;i++){
    inputStyle[i].style.padding = "1.50em"
    
}

div1.style.border="solid black 1px"
div2.style.border="solid black 1px"
div3.style.border="solid black 1px"


heading1.style.color = 'gold'
document.body.style.backgroundColor = 'black'

