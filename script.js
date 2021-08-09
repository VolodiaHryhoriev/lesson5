// Міняєм фон сторінки
let askBackground = prompt('write your background color');
function changeBackground () {
    document.body.style.backgroundColor = askBackground
}
changeBackground();




//Міняєм шрифт
let askFont = prompt('write your font')
function changeFont() {
    document.body.style.fontFamily =  askFont   
}
changeFont();


//Вирівнювання h1
let askPosition = prompt('write position of h1');

function changePosition() {
    document.querySelector('h1').style.textAlign = askPosition
}
changePosition();

//Міняєм фон для блоку з посиланнями
let askBgForLinks = prompt('write your background color');

function changeBgForLinks() {
    document.querySelector('p').style.backgroundColor = askBgForLinks;
}
changeBgForLinks();



//Міняєм колір тексту у параграфі з посиланнями
let askTxtColorForLinks = prompt('write your text color');
let askLink1 = prompt('write your link')
let askLink2 = prompt('write your link')
let askLink3 = prompt('write your link')

let first = document.getElementById('elem1');
let second = document.getElementById('elem2');
let third = document.getElementById('elem3');
first.innerHTML = askLink1 + ','
second.innerHTML = askLink2 + ','
third.innerHTML = askLink3
first.href = askLink1
second.href = askLink2
third.href = askLink3
function changeTextColorForLinks() {
    document.querySelector('p').style.color = askTxtColorForLinks;
    for(let element of document.getElementsByTagName('a')) {
        element.style.color = askTxtColorForLinks
    } 
}
changeTextColorForLinks();


// Міняєм колір, розмір, товщину тексту у елементі div
let askTxtColorForDiv = prompt('write yout text color');
let askTxtSizeForDiv = prompt('write size number');
let askTxtWeightForDiv = prompt('write text size');

function changeDiv() {
    for(let elem of document.getElementsByTagName('li')) {
        elem.style.color = askTxtColorForDiv
        elem.style.fontSize = askTxtSizeForDiv + 'px'
        elem.style.fontWeight = askTxtWeightForDiv
    } 
}
changeDiv();


// міняєм маркований список 
let askTypeForUl = prompt('write type for ul');
let ul = document.querySelector('ul').type = askTypeForUl