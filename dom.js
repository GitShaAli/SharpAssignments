console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all [10]);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
console.log(document.getElementById('header-title'));

//console.log(document.getElementById('header-title'));
var headerT = document.getElementById('header-title');
//headerT.textContent = 'Hello';
headerT.innerHTML = '<h1>Hello</h1';
headerT.style.borderBottom = 'solid 3px #000'

var additem = document.querySelector('.title');
additem.style.fontWeight = "bold";
additem.style.color = 'green';