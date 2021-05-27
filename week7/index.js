var form = document.toDoList

var addList = document.querySelector('.list')
console.log(addList)



form.addEventListener('submit',function(e){
    e.preventDefault()

    var listItem = document.createElement('li')
    addList.appendChild(listItem)
    
    
    var button = document.createElement('button')
    addList.appendChild(button)
    button.textContent = "delete"
    
    button.addEventListener('click',function(){
       listItem.remove()
        button.remove()
    })
  

    var listItem2 = document.createElement('li')
    addList.appendChild(listItem2)

    var button1 = document.createElement('button')
    addList.appendChild(button1)
    
    var input1 = form.input1.value
    var input2 = form.input2.value

    listItem.textContent = input1
    listItem2.textContent = input2

    form.input1.value = ""   
    form.input2.value = ""
})

