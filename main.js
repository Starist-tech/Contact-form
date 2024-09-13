let submit = document.querySelector("button[type='submit']");
let emptyGroup = document.querySelectorAll('span.empty');

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

function showErrorMessage(element, message) {
        let errorSpan = element.parentElement.querySelector('.empty, .unvalid');
        errorSpan.style.display = 'block';
        errorSpan.classList.add('active');
        }

function hideErrorMessage(element) {
        let errorSpan = element.parentElement.querySelector('.empty, .unvalid');
        errorSpan.style.display = 'none';
        errorSpan.classList.remove('active');
        }
      

submit.addEventListener("click", (ele) => {
        ele.preventDefault();
        
        if(textFirst.value !== '') {
                hideErrorMessage(textFirst)
        } else  showErrorMessage(textFirst)
        
        if(textLast.value !== '') {
                hideErrorMessage(textLast)
        } else  showErrorMessage(textLast)
        //email


        if(textArea.value !== '') {
                hideErrorMessage(textArea)
        } else  showErrorMessage(textArea)
})