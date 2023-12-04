// Get references to various elements by their IDs or classes
const myButton = document.getElementById("myButton");
const signinClosePopup = document.getElementById("signinClosePopup");
const signupClosePopup = document.getElementById("signupClosePopup");
const myPopup = document.getElementById("myPopup");
let wrapper = document.querySelector('.wrapper');
let signUpLink = document.querySelector('.signup-link');
let signInLink = document.querySelector('.signin-link');

//function to reset the inputs
function resetInputs() {
    // Get all input elements and reset their values
    const inputElements = document.querySelectorAll('input, textarea');
    
    for (let i = 0; i < inputElements.length; i++) {
        const input = inputElements[i];
        input.value = ''; // Reset input value to an empty string
    }
}
// Add a click event to 'myButton'
myButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Change the overflow CSS property of the HTML element to 'hidden'
    document.documentElement.style.overflow = 'hidden';

    // Toggle the 'show' class for 'myPopup' and adjust wrapper classes
    if (!myPopup.classList.contains("show")) {
        myPopup.classList.add("show");
        wrapper.classList.remove('animated-signin');
        wrapper.classList.remove('animated-signup');
        resetInputs(); // Reset inputs when the card is flipped
    }
});

// Add a click event to 'signInLink'
signInLink.addEventListener('click', () => {
    // Adjust wrapper classes to animate sign-up form
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
    resetInputs(); // Reset inputs when the card is flipped
});

// Add a click event to 'signUpLink'
signUpLink.addEventListener('click', () => {
    // Adjust wrapper classes to animate sign-in form
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
    resetInputs(); // Reset inputs when the card is flipped
});

// Add a click event to 'signinClosePopup' to close the sign-in popup
signinClosePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
    // Restore the overflow CSS property of the HTML element to 'auto'
    document.documentElement.style.overflow = 'auto';
    resetInputs(); // Reset inputs when the popup is closed
});

// Add a click event to 'signupClosePopup' to close the sign-up popup
signupClosePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
    // Restore the overflow CSS property of the HTML element to 'auto'
    document.documentElement.style.overflow = 'auto';
    resetInputs(); // Reset inputs when the popup is closed
});

// Add a click event to the window to close the popup if clicked outside
window.addEventListener("click", function (event) {
    if (event.target === myPopup) {
        myPopup.classList.remove("show");
        // Restore the overflow CSS property of the HTML element to 'auto'
        document.documentElement.style.overflow = 'auto';
        resetInputs(); // Reset inputs when the popup is closed
    }
});
