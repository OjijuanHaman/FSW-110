var nav = document.createElement('nav')
nav.textContent = 'Home    - About    - Styles    - Price     - Supply'
document.body.appendChild(nav)

var heading = document.createElement('h1')
heading.textContent = 'Welcome to my site about firearms'
document.body.appendChild(heading)

var paragraph = document.createElement('p')
paragraph.textContent = ' Guns or firearms can be a dangerous tool when inserted into the wrong hands. However, in the hands of a responsible law abiding individual, they can be both fun and a source of protection in difficult situations'
document.body.appendChild(paragraph)

function gunList(){

    var listOfGuns =[
        'Shotguns',
        'Rifles',
        'Machine Guns',
        'Automatic Rifles',
        'Sniper Rifles',
        'Submachine Guns'
    ],
    
    gunContents = document.createElement('div'),
    
    list = document.createElement('ol'),
    itemsInList = listOfGuns.length,listItem,i;
    document.getElementsByTagName('body')[0].appendChild(gunContents);
    gunContents.appendChild(list);
    
    for (i = 0; i < itemsInList; ++i){
        listItem = document.createElement('li');
        listItem.innerHTML = listOfGuns[i];
        list.appendChild(listItem)
    
        }
    
    }
    gunList();

    var foot = document.createElement('footer')
    foot.textContent = ' 2021 O.Haman Studios'
    document.body.appendChild(foot)
