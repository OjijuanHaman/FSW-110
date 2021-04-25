
var newHeading = document.createElement('h1')
newHeading.textContent = 'Welcome to my JS site'

document.body.appendChild(newHeading)

var newP = document.createElement('p')
newP.textContent = 'All of this was created with JavaScript'

document.body.appendChild(newP)

function orderedList(){

var lists =[
    'Greens',
    'Beans',
    'Potatoes',
    'Tomatoes',
    'Lamb',
    'Ram'
],

listContents = document.createElement('div'),

list = document.createElement('ol'),
itemsInList = lists.length,listItem,i;
document.getElementsByTagName('body')[0].appendChild(listContents);
listContents.appendChild(list);

for (i = 0; i < itemsInList; ++i){
    listItem = document.createElement('li');
    listItem.innerHTML = lists[i];
    list.appendChild(listItem)

    }

}
orderedList();