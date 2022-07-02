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


var item = document.querySelectorAll('li');
item[1].style.color = 'green';
var odd = document.querySelectorAll('li:nth-child(odd');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

