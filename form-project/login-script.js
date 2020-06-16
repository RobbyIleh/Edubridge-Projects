// Get inputs 

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const loginForm = document.getElementById('login-Form');
const inputArray = [username, email, password, password2];


loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const retrivePassword = localStorage.getItem('password');
    const retriveUsername = localStorage.getItem('username');

    if (loginUsername.value === retriveUsername && loginPassword.value === retrivePassword ){
                window.open('readme.md')
                alert("Welcome " + loginUsername.value);
    }else{
        alert("Login details is not correct")
    }
});
