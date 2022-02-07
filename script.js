let exercisesElement = document.querySelector('#exercises');

let button = document.createElement('button');

button.textContent = "Launch Meeting";
button.style.padding = "10px 25px";
button.style.color = "white";
button.style.borderRadius = "10px";
button.style.backgroundColor = "blue";
button.style.border = "none";


let shoppignList = ['Apple', 'Banana', 'PineApple'];
//create a list UL
//use for (....) to create LI
//use textContent to set LI text

let ul = document.createElement('ul');
exercisesElement.prepend(ul);
for (let i = 0; i < shoppignList.length; i++) {
    let li = document.createElement('li');
    ul.append(li);
    li.textContent = shoppignList[i];
}


let button3 = button.cloneNode();
button3.textContent = "red";
exercisesElement.prepend(button3);
button3.style.padding = "15px 20px";
button3.style.color = "red";


let button4 = button.cloneNode();
button4.textContent = "made in kyrgyzstan";
exercisesElement.prepend(button4);
button4.style.padding = "15px 20px";
button4.style.color = "yellow";

let button5 = button.cloneNode();
button5.textContent = "made in china";
exercisesElement.prepend(button5);
button5.style.padding = "15px 20px";
button5.style.color = "red";

let button6 = button.cloneNode();
button6.textContent = "with";
exercisesElement.prepend(button6);
button6.style.padding = "15px 20px";
button6.style.color = "black";




// let table = ['apple', 'banana', 'pinapple'];
// let tableElemnt = document.createElement('table');
// exercisesElement.prapend(listElement);
// for (let i = 0; i < shoppingList.lenghth; i++) {
//     let tr = document.createElement('tr');
//     listElement.append(listElement);
//     listItemElement.textContent = shoppingList[tr];
// }