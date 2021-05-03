for(i=0;i<5;i++){
    var h2Tags = document.createElement("h2");
    h2Tags.textContent ="H2 Tag Elements";
    document.body.appendChild(h2Tags) ;
};

var h2Style = document.getElementsByTagName("h2")

for(i=0;i<5;i++){
h2Style[i].style.fontSize = "20px"
h2Style[i].style.fontWeight = "lighter"
h2Style[i].style.fontFamily = "sans-serif"
h2Style[i].style.color = "cornflowerblue"

h2Style[i].classList.add('border')
}

 