const email = document.getElementById('email');
const password = document.getElementById('password');
const signup = document.getElementById('LoginButton');
signup.style.display = 'none';
let isemail = false;
let ispassword = false;
email.addEventListener('blur', () => {
    let expression = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (expression.test(str)) {
        isemail = true;
        document.getElementById('emailerror').style.display = 'none';
        if (ispassword && isemail) {
            signup.style.display = 'block';
        }
    } else {
        document.getElementById('emailerror').style.display = 'block';
        signup.style.display = 'none';
        isemail = false;
    }
    if (str === '') {
        document.getElementById('emailerror').style.display = 'none';
    }
});
password.addEventListener('blur', () => {
    let expression = /^([_@$&0-9a-zA-Z]){8,20}$/;
    let str = password.value;
    if (expression.test(str)) {
        ispassword = true;
        document.getElementById('passworderror').style.display = 'none';
        if (ispassword && isemail) {
            signup.style.display = 'block';
        }
    } else {
        document.getElementById('passworderror').style.display = 'block';
        signup.style.display = 'none';
        ispassword = false;
    }
    if (str === '') {
        document.getElementById('passworderror').style.display = 'none';
    }
});