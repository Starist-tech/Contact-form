let submit = document.querySelector("button[type='submit']");
const textInputs = document.querySelectorAll('input[type="text"] , textarea');

let textFirst = document.querySelector(['input[type="text']);
let textLast = document.querySelectorAll(['input[type="text'])[1];
let emailInput = document.querySelector(['input[type="email']);
let queryParent = document.querySelector("div.query")
let queryGeneral = document.querySelector(['input[type="radio']);
let queryRequest = document.querySelectorAll(['input[type="radio'])[1];
let textArea = document.querySelector('textarea');
let checkboxInput = document.querySelector(['input[type="checkbox']);
let checkParent = document.querySelector('div.check');
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
        

function validateEmails(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        }
              
let radios = document.querySelectorAll("input[type='radio']");

radios.forEach(e => {
        e.addEventListener('click', () => {
        radios[0].parentElement.style.background = 'white';radios[1].parentElement.style.background = 'white';
        if (e.checked) {e.parentElement.style.background = '#0c7d692e';} 
                })
        });

submit.addEventListener("click", (ele) => {
        ele.preventDefault();
        textInputs.forEach((e) => {
                if(e.value !== '') {
                        hideErrorMessage(e);
                        e.style.border = '1px gray solid'
                } else {
                        showErrorMessage(e);
                        e.style.border = '1px #ff0000e0 solid'
                } 
        
        })
        
        if(emailInput.value === '') {
                showErrorMessage(emailInput);
                emailInput.style.border = '1px #ff0000e0 solid';
        } else {
                hideErrorMessage(emailInput);
                if(validateEmails(emailInput.value)) {
                        emailInput.parentElement.lastElementChild.style.display = 'none';
                        emailInput.style.border = '1px gray solid';
                }
                else { 
                emailInput.parentElement.lastElementChild.style.display = 'block';
                emailInput.style.border = '1px #ff0000e0 solid';}
        }  

        if(queryGeneral.checked ==false && queryRequest.checked == false) {
                queryParent.lastElementChild.style.display = 'block';
        }

        if(checkboxInput.checked == false) {
                checkParent.lastElementChild.style.display = 'block';
        }

        // showing green background on radio and checkbox
})