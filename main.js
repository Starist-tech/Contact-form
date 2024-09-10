let submit = document.querySelector("button[type='submit']");
let emptyGroup = document.querySelectorAll('span.empty');

submit.addEventListener("click", (ele) => {
        ele.preventDefault();

        if(textFirst.value.length == 0) {
                emptyGroup[0].style.diplay = 'block';
        }
        if(textLast.value.length == 0) {
                emptyGroup[1].style.diplay = 'block';
        }

})

let textFirst = document.querySelector(['input[type="text']);
let textLast = document.querySelectorAll(['input[type="text'])[1];
let emailInput = document.querySelector(['input[type="email']);
let aue = document.querySelector(['input[type="email']);
let queryGeneral = document.querySelector(['input[type="radio']);
let queryRequest = document.querySelectorAll(['input[type="radio'])[1];
let textArea = document.querySelector('textarea');
let checkboxInput = document.querySelector(['input[type="checkbox']);
let checkInput = document.querySelector('.check input');
let greenBack = document.querySelector('.check .greenBack');
