var square = document.createElement("div")

document.body.appendChild(square)
var divStyle = document.getElementsByTagName("div")

for (i = 0; i < 1; i++){
    divStyle[i].style.width = '1100px'
    divStyle[i].style.height = '1100px'
    divStyle[i].style.border = '3px solid'
    
};

function blkOnLoad(){
    document.getElementsByTagName("div")[0].style.backgroundColor = "black"
};
window.addEventListener("load",blkOnLoad);

document.getElementsByTagName('div')[0].addEventListener('mouseover', function(){
    document.getElementsByTagName('div')[0].style.backgroundColor = "green"
});

document.getElementsByTagName('div')[0].addEventListener('mouseout', function(){
    document.getElementsByTagName('div')[0].style.backgroundColor = "white"
});

document.getElementsByTagName('div')[0].addEventListener('mousedown', function(){
    document.getElementsByTagName('div')[0].style.backgroundColor = "yellow"
})

document.getElementsByTagName('div')[0].addEventListener('mouseup', function(){
    document.getElementsByTagName('div')[0].style.backgroundColor = "blue"
})

document.getElementsByTagName('div')[0].addEventListener('dblclick', function(){
    document.getElementsByTagName('div')[0].style.backgroundColor = "red"
})

document.getElementsByTagName('body')[0].addEventListener('wheel', function(){
  
    document.getElementsByTagName('div')[0].style.backgroundColor = "purple"
    
})

function handleKeydown(press){
    var key = press.keyCode; 
   
    if (key === 66) {
        document.getElementsByTagName('div')[0].style.backgroundColor ='blue';
    }
    else if (key === 82) {
        document.getElementsByTagName('div')[0].style.backgroundColor = "red";
    }
    else if (key === 71) {
        document.getElementsByTagName('div')[0].style.backgroundColor = "green";
    }
    else if (key === 80) {
        document.getElementsByTagName('div')[0].style.backgroundColor = "purple";
    }
    else if (key === 89) {
        document.getElementsByTagName('div')[0].style.backgroundColor = "yellow";
    }
    else if (key === 87) {
        document.getElementsByTagName('div')[0].style.backgroundColor = "white";
    }

 }
  
  window.addEventListener('keydown', handleKeydown);








