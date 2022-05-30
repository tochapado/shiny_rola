let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let span = document.querySelector('span');
let input = document.querySelector('input');
let button = document.querySelector('button');

function random () {
  return randomTriple = Math.ceil(3 * Math.random());
}

function changeText (text) {
  console.log(text.innerText);
  //text.innerHTML = input.value;
  text.innerHTML = 'rolao';
}

function rola () {
  changeText(h1);
  changeText(span);
  changeText(p);
}

input.onchange = rola;

button.onclick = rola;