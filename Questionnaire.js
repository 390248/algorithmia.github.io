// Select the header element
const header = document.querySelector(".header");

// Function to toggle the sticky class based on scroll position
function toggleStickyHeader() {
  if (window.scrollY > 10) { // Adjust the scroll position (e.g., 10px) as needed
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Add a scroll event listener to trigger the class toggle
window.addEventListener("scroll", toggleStickyHeader);

// Run the toggleStickyHeader function on page load
toggleStickyHeader();
/**********************************************************************/
//validations
function textValidation(formName,validationItem){
  let text = document.forms[formName][validationItem];
  if(text.value==""){ 
       text.style.border = "3px solid #ca0273";
       return false;
  }
  else{
    text.style.border = "";
    return true;
  }
}
function textAreaValidation(itemID){
    let message = document.getElementById(itemID);
    let ideaErroMsg = document.getElementById("ideaErrorMsg");
    if (message.value.trim() === "") {
      // Validation fails if the textarea is empty
      ideaErroMsg.innerHTML = "Share your ingenious idea with us";
      return false;
    }
    else{
      ideaErroMsg.innerHTML = "";
      return true;
    }
}
function emailValidation(formName,validationItem){
  let email = document.forms[formName][validationItem];
  let errorMsg = document.getElementById("mailErrorMsg");
  if (email.value==""){
       email.style.border = "3px solid #ca0273";
       return false;
  }
  if(email.value.search(/[a-zA-Z0-9_.]{5,20}@.{4,}\.com/i)==-1){ 
      	  email.style.border = "3px solid #ca0273";
          errorMsg.innerText = "Email address is invalid";
          return false;
  }
  else{
    email.style.border = "";
    errorMsg.innerText = "";
    return true;
  }
}
function phoneValidation(formName,validationItem){
  let phone = document.forms[formName][validationItem];
  let errorMsg = document.getElementById("phoneErrorMsg");
  let format = document.getElementById("format");
  if (phone.value==""){
       phone.style.border = "3px solid #ca0273";
       return false;
  }
  if(phone.value.search(/\+[0-9]{3}\s[0-9]{8}/)==-1){ 
      	  phone.style.border = "3px solid #ca0273";
          errorMsg.innerText = "phone number is invalid";
          format.innerText = "format{+xxx xxxxxxxx}";
          return false;
  }
  else{
    phone.style.border = "";
    errorMsg.innerText = "";
    format.innerText = "";
    return true;
  }
}
function radioValidation(formName,validationItem,itemID){
  let radio = document.forms[formName][validationItem];
  let errormessage = document.getElementById(itemID);
  let isChecked = false;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked){
    for (let l=0;l<radio.length;l++){
      radio[l].style.border = "3px solid #ca0273";
    }
    errormessage.innerText = "choose your "+itemID;
    return false;
  }
  else{
    for (let l=0;l<radio.length;l++){
      radio[l].style.border = "";
    }
    errormessage.innerText = "";
    return true;
  }
}
function selectValidation(formName,validationItem){
  let select = document.forms[formName][validationItem];
  let CareerErrorMsg = document.getElementById("CareerErrorMsg");
  if (select.value=="title"){
    CareerErrorMsg.innerText = "Please select your career";
    CareerErrorMsg.style.textAlign = "left";
    return false;
  }
  else{
    CareerErrorMsg.innerText = "";
    return true;
  }
}
/**********************************************************************/
// Selecting elements for each step
let s1 = document.querySelector('.form-step');
let s2 = document.querySelector('.form-step2');
let s3 = document.querySelector('.form-step3');
let s4 = document.querySelector('.form-step4');

// Selecting buttons for navigation between steps
let s1Next = document.querySelector('.next1');
let s2Next = document.querySelector('.next2');
let s3Next = document.querySelector('.next3');
let s2Prev = document.querySelector('.prev2');
let s3Prev = document.querySelector('.prev3');
let s4Prev = document.querySelector('.prev4');

// Selecting elements to display step information
let tittle=document.querySelector('.tittles');
let stepn=document.querySelector('.step-n');
let steptittle=document.querySelector('.step-name');
let stepdiscription=document.querySelector('.step-discription');
let line=document.querySelector('.progress');

// Setting initial display for each step
s1.style.display='block';
s2.style.display='none';
s3.style.display='none';
s4.style.display='none';
line.style.width="0%";

// Event listeners for navigating between steps
function validateForm(){
  valid.selectValidation("regForm","occupation")
}
s1Next.addEventListener('click', function (event) {
  // Code for transitioning from step 1 to step 2
  //validation check
  let firstName = textValidation("regForm","first name");
  let lastName = textValidation("regForm","last name");
  let email = emailValidation("regForm","email");
  let phone = phoneValidation("regForm","phone Number");
  let gender = radioValidation("regForm","gender","gender");
  let career = selectValidation("regForm","Career")
  if (firstName && lastName && email && phone && gender && career) {
    s1.style.display='none';
    s2.style.display='block';
    s3.style.display='none';
    s4.style.display='none';
    stepn.innerHTML="Step2"
    steptittle.innerHTML="YOUR TEAM";
    stepdiscription.innerHTML="Team details for collaborative brilliance.";
    document.querySelectorAll('.progress-step')[1].classList.add('progress-step-active');
    line.style.width="35%";
  }event.preventDefault(); // Prevent transition if validation fails

});

s2Next.addEventListener('click', function (event) {
   // Code for transitioning from step 2 to step 3
   //validation
   let team = textValidation("regForm","team name");
   let fpn = textValidation("regForm","first participant name");
   let spn = textValidation("regForm","second participant name");
   let tpn = textValidation("regForm","third participant name");
   let fpe = emailValidation("regForm","first participant email");
   let spe = emailValidation("regForm","second participant email");
   let tsp = emailValidation("regForm","third participant email");
   if (team && fpn && spn && tpn && fpe && spe && tsp){
    s1.style.display='none';
    s2.style.display='none';
    s3.style.display='block';
    s4.style.display='none';
    stepn.innerHTML="Step3"
    steptittle.innerHTML="YOUR HACKATHON IDEA";
    stepdiscription.innerHTML="Pitch your groundbreaking hackathon idea";
    document.querySelectorAll('.progress-step')[2].classList.add('progress-step-active');
    line.style.width="65%";
   }event.preventDefault(); // Prevent transition if validation fails
  
});

s3Next.addEventListener('click', function (event) {
  // Code for transitioning from step 3 to step 4
  let ideaTitle = textValidation("regForm","hackathon-idea-title");
  let idea = textAreaValidation("ideas");
  let programmingLang = radioValidation("regForm","programming","programming language")
  if (ideaTitle && idea && programmingLang){
    s1.style.display='none';
    s2.style.display='none';
    s3.style.display='none';
    s4.style.display='block';
    stepn.innerHTML=""
    steptittle.innerHTML="";
    stepdiscription.innerHTML="";
    document.querySelectorAll('.progress-step')[3].classList.add('progress-step-active');
    line.style.width="100%";
  }event.preventDefault(); // Prevent transition if validation fails
  
});

s2Prev.addEventListener('click', function () {
  // Code for transitioning from step 2 to step 1
  s1.style.display='block';
  s2.style.display='none';
  s3.style.display='none';
  s4.style.display='none';
  stepn.innerHTML="Step1"
  steptittle.innerHTML="YOUR PROFILE";
  stepdiscription.innerHTML="Personalize your hackathon journey";
  document.querySelectorAll('.progress-step')[1].classList.remove('progress-step-active');
  document.querySelectorAll('.progress-step')[0].classList.add('progress-step-active');
  line.style.width="0%";
});

s3Prev.addEventListener('click', function () {
  // Code for transitioning from step 3 to step 2
  s1.style.display='none';
  s2.style.display='block';
  s3.style.display='none';
  s4.style.display='none';
  stepn.innerHTML="Step2"
  steptittle.innerHTML="YOUR TEAM";
  stepdiscription.innerHTML="Team details for collaborative brilliance.";
  document.querySelectorAll('.progress-step')[2].classList.remove('progress-step-active');
  document.querySelectorAll('.progress-step')[1].classList.add('progress-step-active');
  line.style.width="35%";
});
s4Prev.addEventListener('click', function () {
  // Code for transitioning from step 4 to step 3
  s1.style.display='none';
  s2.style.display='none';
  s3.style.display='block';
  s4.style.display='none';
  stepn.innerHTML="Step3";
  steptittle.innerHTML="YOUR HACKATHON IDEA";
  stepdiscription.innerHTML="Pitch your groundbreaking hackathon idea";
  document.querySelectorAll('.progress-step')[3].classList.remove('progress-step-active');
  document.querySelectorAll('.progress-step')[2].classList.add('progress-step-active');
  line.style.width="65%";
});







