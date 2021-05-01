var h1T = document.createElement("h1")
h1T.textContent ="Hello World"
document.body.appendChild(h1T)


for(i=0;i<10;i++){
    var h1T = document.createElement("h1");
    h1T.textContent ="Hello World";
    document.body.appendChild(h1T) ;
};

var h1Style = document.getElementsByTagName('h1');
for(var p = 0; p < h1Style.length; p++ ){
    h1Style[p].style.color = '#E30022';
};

const names = ['steve', 'larry', 'joe' , 'shirley' ,'steph' , 'nate' , 'rick', 'emily'];
var namesList = document.getElementById('list')

for (var L = 0; L < names.length; L++){
    namesList.innerHTML += '<li>' + names[L] + '</li>'

}
