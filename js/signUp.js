const myButton = document.getElementById("myButton");
const signinClosePopup = document.getElementById("signinClosePopup");
const signupClosePopup = document.getElementById("signupClosePopup");
const myPopup = document.getElementById("myPopup");
let wrapper = document.querySelector('.wrapper');
let signUpLink = document.querySelector('.signup-link');
let signInLink = document.querySelector('.signin-link');

myButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Change CSS properties of the html element
    document.documentElement.style.overflow = 'hidden';

    if (!myPopup.classList.contains("show")) {
        myPopup.classList.add("show");
        wrapper.classList.remove('animated-signin');
        wrapper.classList.remove('animated-signup');
    }
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signinClosePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
    // Restore CSS properties of the html element
    document.documentElement.style.overflow = 'auto';
});

signupClosePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
    // Restore CSS properties of the html element
    document.documentElement.style.overflow = 'auto';
});

window.addEventListener("click", function (event) {
    if (event.target === myPopup) {
        myPopup.classList.remove("show");
        // Restore CSS properties of the html element
        document.documentElement.style.overflow = 'auto';
    }
});

