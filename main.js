
// selecting elements
let myDiv = document.getElementById('my_div');
// let myDiv1 = document.querySelector('#my_div');
// //
// let myDiv2 = document.getElementsByClassName('my_div');
// let myDiv4 = document.querySelector('.my_div');
// let myDiv5 = document.getElementsByTagName('h1');
// let myDiv6 = document.getElementsByTagName('h1')[4];

//styling with selected elements/manipulating the DOM

// let myDiv5 = document.getElementsByTagName('h1')[0];
// myDiv5.style.color = 'green';
//
myDiv.innerHTML = 'Hi from javascript page';
//myDiv.textContent = 'Hi';
myDiv.style.color = 'blue';
myDiv.style.fontSize = '25px';
myDiv.style.border = '2px solid black';
myDiv.style.padding = '3px 0px 3px 0px';//

//two
let myContainer = document.getElementById('container');

myContainer.style.backgroundColor = 'pink';
myContainer.style.width = '80%';
myContainer.style.height = '80vh';
myContainer.style.marginLeft = '10%';
myContainer.style.display = 'flex';
myContainer.style.justifyContent = 'center';

//write content in it
myContainer.innerHTML = 'This is a text written from my javascript page';
myContainer.style.paddingTop = '10px';

//three (combining css and js)

let CssJsContainer = document.querySelector('.css_js_container');

CssJsContainer.style.backgroundColor = 'gold';
CssJsContainer.style.borderRadius = '10% 0% 10% 0%';
CssJsContainer.style.marginLeft = '30%';