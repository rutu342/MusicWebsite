const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const signup = document.getElementById('SIGNUPBUTTON');
signup.style.display = 'none';
let isname = false;
let isphone = false;
let isemail = false;
let ispassword = false;
let isconfirm = false;
username.addEventListener('blur', () => {
    let expression = /^[a-zA-Z]([a-zA-Z\ ]){2,20}$/;
    let str = username.value;
    if (expression.test(str)) {
        isname = true;
        document.getElementById('nameerror').style.display = 'none';
        if (isname && ispassword && isphone && isconfirm && isemail) {
            signup.style.display = 'block';
        }
    } else {
        document.getElementById('nameerror').style.display = 'block';
        signup.style.display = 'none';
        isname = false;
    }
    if (str === '') {
        document.getElementById('nameerror').style.display = 'none';
    }
});
email.addEventListener('blur', () => {
    let expression = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (expression.test(str)) {
        isemail = true;
        document.getElementById('emailerror').style.display = 'none';
        if (isname && ispassword && isphone && isconfirm && isemail) {
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
phone.addEventListener('blur', () => {
    let expression = /^([0-9]){10}$/;
    let str = phone.value;
    if (expression.test(str)) {
        isphone = true;
        document.getElementById('phoneerror').style.display = 'none';
        if (isname && ispassword && isphone && isconfirm && isemail) {
            signup.style.display = 'block';
        }
    } else {
        document.getElementById('phoneerror').style.display = 'block';
        signup.style.display = 'none';
        isphone = false;
    }
    if (str === '') {
        document.getElementById('phoneerror').style.display = 'none';
    }
});
password.addEventListener('blur', () => {
    let expression = /^([_@$&0-9a-zA-Z]){8,20}$/;
    let str = password.value;
    if (expression.test(str)) {
        ispassword = true;
        document.getElementById('passworderror').style.display = 'none';
        if (isname && ispassword && isphone && isconfirm && isemail) {
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
confirmPassword.addEventListener('blur', () => {
    let str1 = password.value;
    let str2 = confirmPassword.value;
    if (str1 === str2 && ispassword) {
        isconfirm = true;
        document.getElementById('confirmerror').style.display = 'none';
        if (isname && ispassword && isphone && isconfirm && isemail) {
            signup.style.display = 'block';
        }
    } else {
        document.getElementById('confirmerror').style.display = 'block';
        signup.style.display = 'none';
        isconfirm = false;
    }
    if (str2 === '') {
        document.getElementById('confirmerror').style.display = 'none';
    }
})