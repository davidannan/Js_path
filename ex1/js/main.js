// alert("hello")
const para = document.querySelector('p');
console.log(para)

let updateName = function() {
    let name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}
para.addEventListener('click', updateName);

function createParagraph() {
    let para = document.createElement('z');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
  }