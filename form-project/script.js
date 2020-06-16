// Get inputs 

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const inputArray = [username, email, password, password2];

//Functions
// ShowError

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// sowSuccess 

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// Regex for email

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if( re.test(input.value.trim())){
       showSuccess(input);
       sendToLocal(input);
   }else{
       showError(input, 'Email is not valid');
   }
}

// Regex Password
function checkPassword(input) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   if( re.test(input.value.trim())){
       showSuccess(input);
       sendToLocal(input);
   }else{
       showError(input, 'Password must contain Alpha Numeric');
   }
}


//Check Required
function checkRequired(inptArr){
    inptArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is invalid`);

        }else {
            showSuccess(input);
        }
    })
};


// checkLength

const checkLength = (input, min, max) =>{
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must not be more than ${max} characters`)
    }else{
        showSuccess(input);
        sendToLocal(input);
    }
}

const sendToLocal = (input) =>{
    localStorage.setItem(input.id, input.value)
}


function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Add event Listener
form.addEventListener('submit', function(e){
            e.preventDefault();
            
            checkRequired(inputArray);
            checkEmail(email);
            checkLength(username, 5, 9);
            checkPassword(password);
            checkPassword(password, password2);
});


