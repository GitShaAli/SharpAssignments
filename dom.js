// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all [10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// console.log(document.getElementById('header-title'));

// //console.log(document.getElementById('header-title'));
// var headerT = document.getElementById('header-title');
// //headerT.textContent = 'Hello';
// headerT.innerHTML = '<h1>Hello</h1';
// headerT.style.borderBottom = 'solid 3px #000'

// var additem = document.querySelector('.title');
// additem.style.fontWeight = "bold";
// additem.style.color = 'green';


// var item = document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[1]);
// item[1].textContent='Hello 2';
// item[2].style.color = 'green';

// for(var i =0;i<item.length;i++){
//     item[i].style.fontWeight="bold";
// }

// //item[4].textContent='hi'
// var LiElement = document.getElementsByTagName('li');
// LiElement[4].textContent='hi'

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input')
// input.value = 'hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var Lastitem = document.querySelector('.list-group-item:last-child');
// Lastitem.style.color = 'yellow';

// var secItem = document.querySelector('.list-group-item:nth-child(2)');
// secItem.style.backgroundColor='green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = "hidden";

//QuerySelectorAll

// var titles = document.querySelectorAll('.title');
// console.log(title)
// var item = document.querySelectorAll('li');
// item[1].style.color = 'green';
// var odd = document.querySelectorAll('li:nth-child(odd');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

//TraversingDOM

var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//console.log(itemList.childNodes)
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'Orange';

//FIrstChild
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//Siblings
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

//PreviousSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

//createElement

//create a Div
// var newDiv = document.createElement('div');
//add class
// newDiv.className='helloDiv';
//add id
// newDiv.id='helloId';
//add attr
// newDiv.setAttribute('title','helloAttr');
// var newDivText = document.createTextNode('Hello');
//add text to div
// newDiv.appendChild(newDivText);
// console.log(newDiv);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// newDiv.style.fontSize = '20px';
// container.insertBefore(newDiv,h1);


//new LI
// var newLi = document.createElement('li');
// newLi.className='list-group-item';
// var newText = document.createTextNode('Hello from dom.js');
// newLi.appendChild(newText);
// var space = document.querySelector('ul');
// var li = document.querySelector('ul li');

// space.insertBefore(newLi,li);
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit',additem);
itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);




function additem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';

    var newItemD = document.getElementById('description').value;
    var p = document.createElement('p');
    p.className='desc';
    p.appendChild(document.createTextNode(newItemD));
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(p);

    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
       }
    }
}

// function filterItems(e){
//     var text = e.target.value.toLowerCase();
//     var items = itemList.getElementsByTagName('li');
    
//     Array.from(items).forEach(function(item){
//         var itemName = item.firstChild.textContent;
//         console.log(itemName)
//         if(itemName.toLowerCase().indexOf(text)!= -1){
//             item.style.display = 'block';
//             //item.style.backgroundColor = 'red';
//         }
//         else{
//             item.style.display = 'none';
//         }
//     });
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('p');
    
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1 || item.parentElement.textContent.toLowerCase().indexOf(text)!= -1){
            item.parentElement.style.display = 'block';
        }
        else{
            item.parentElement.style.display = 'none';
        }
    });

}

