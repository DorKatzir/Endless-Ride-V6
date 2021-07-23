const burgerBtn = document.querySelector('.burger');
const linksList = document.querySelector('.links');

burgerBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    this.classList.toggle('close');
    linksList.classList.toggle('show');
}