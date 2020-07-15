const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['red', 'green', 'blue', 'pink', '#CD5C5C', '#00FF00', '#800080'];
// const colors = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg'];

colorBtn.addEventListener('click', changeColor);

function changeColor () {
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}
