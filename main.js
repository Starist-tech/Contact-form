let checkInput = document.querySelector('.check input');
let greenBack = document.querySelector('.check .greenBack');

checkInput.addEventListener('click', (ele) => {
        greenBack.style.display = 'block';

});
greenBack.addEventListener('click', (ele) => {
        greenBack.style.display = 'none';
});