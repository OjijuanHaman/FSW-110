function AlertForm(){
  var a = document.stats.fname.value;  
  var b = document.stats.lname.value;
  var c = document.stats.age.value;  
  var d = document.stats.answer.value;
  var e = document.stats.color.value;
  
  var boxes = document.getElementsByName('h')
  var checkedBoxes = ' ';
  for (var i = 0; i < boxes.length; i ++){
      if (boxes[i].type == 'checkbox' && boxes[i].checked == true){
      checkedBoxes += boxes[i].value + ', ';
      }
    }
        alert('Name: ' + a + ' ' + b + '\n' + 'Age: ' + c + '\n' + 'Been out the country? ' + d + '\n' + 'Favorite Color: ' + e + '\n'+ 'Described as: '+ checkedBoxes)
}
  




    
        
    
