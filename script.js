// Select the header(navigation bar) element
const header = document.querySelector(".header");
// Function to toggle the sticky class based on scroll position
function toggleStickyHeader() {
  if (window.scrollY > 10) { 
    //Adjust the scroll position(e.g., 10px)a s needed
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// Add a scroll event listener to trigger the class toggle
window.addEventListener("scroll", toggleStickyHeader);

// Run the toggleStickyHeader function on page load
toggleStickyHeader();
/******************************************************************/
//courses side bar 
const links = document.querySelectorAll('.side-bar a');
const labels = document.querySelectorAll('.side-bar-labels span');

links.forEach((link, index) => {
  link.addEventListener('mouseover', () => {
    labels.forEach((label, idx) => {
      
      if (idx === index) {
        console.log(idx)
        label.style.display = 'block';
        label.style.transform = 'translate(0)';
        label.style.opacity = '1';
        label.style.transition = 'transform 0.5s ease, opacity 1s ease';
      } else {
        label.style.transform = 'translate(-60%, -10%) scale(0.1)';
        label.style.opacity = '0';
        label.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out';
      }
    });
  });

  link.addEventListener('mouseout', () => {
    labels.forEach((label, idx) => {
      console.log(idx)
      if (idx === index) {
        label.style.transform = 'translate(-60%, -10%) scale(0.1)';
        label.style.opacity = '0';
        label.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out';
      }
    });
  });
});
/************************************************************************************************/
//statistics numbers Animation
// Constructor function to handle statistics numbers animation
function StatisticsAnimation(valueDisplay, interval = 400) {
  this.valueDisplay = valueDisplay; // Store the elements to animate
  this.interval = interval; // Set the interval duration

  // Method to animate the numbers
  this.animateNumbers = function () {
    // Loop through each element in the valueDisplay NodeList
    for (let i = 0; i < this.valueDisplay.length; i++) {
      let v = this.valueDisplay[i]; // Store the current element in the loop
      let startValue = 0; // Initialize the start value for the counter
      let endValue = parseInt(v.getAttribute('data-val')); // Get the end value from the element's attribute
      let duration = Math.floor(this.interval / endValue); // Calculate the duration for each increment

      // Counter to increment the values at a specific duration
      let counter = setInterval(function () {
        startValue += 1; // Increment the start value
        v.textContent = startValue + "+"; // Display the incremented value with a "+" sign

        // Check if the start value has reached the end value
        if (startValue >= endValue) {
          clearInterval(counter); // If so, clear the interval
          v.textContent = endValue + "+"; // Ensure the final value displays correctly with a "+" sign
        }
      }, duration); // Set the interval for incrementing the value based on the duration
    }
  };
}
// Get the elements with the class '.number'
let valueDisplay = document.querySelectorAll('.number');

// Create an instance of StatisticsAnimation and start the number animation
const statsAnimation = new StatisticsAnimation(valueDisplay); //object
statsAnimation.animateNumbers(); //use animateNumbers method
/************************************************************************************************/
// teachers Swiper
var teachersSwiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 15,
  fade: true,
  grabCursor: true,
  slidesPerGroupSkip: 1,
  loop: false,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 4 ,
      slidesPerGroup: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/************************************************************************************************/
//Frequently Asked Questions
// Add an event listener to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select all elements with the class 'accordion' inside elements with class 'q-box'
  let accordions = document.querySelectorAll('.q-box .accordion');

  // Iterate through each 'accordion' element
  for (let i = 0; i < accordions.length; i++) {
    let acco = accordions[i];
    acco.onclick = () => {
      for (let j = 0; j < accordions.length; j++) {
        let subAcco = accordions[j];
        subAcco.classList.remove('active');
      }
      acco.classList.add('active');
    }
  }
});
// Selecting elements for different questions and answers
let QT1 = document.querySelector('.QT1');
let QT2 = document.querySelector('.QT2');
let QT3 = document.querySelector('.QT3');
let QT4 = document.querySelector('.QT4');

let q1Area=document.querySelector('.q1area');
let q2Area=document.querySelector('.q2area');
let q3Area=document.querySelector('.q3area');
let q4Area=document.querySelector('.q4area');

let a1Area=document.querySelector('.a1area');
let a2Area=document.querySelector('.a2area');
let a3Area=document.querySelector('.a3area');
let a4Area=document.querySelector('.a4area');

// Setting initial styles for the second question
QT2.style.color = '#ca0273';


// Adding event listeners for each question click event

// Handling click on Question 1
// Changing text and styles for Question 1 and its associated answer
QT1.addEventListener('click', function () {
  QT1.style.color = '#ca0273';
  QT2.style.color = '#3b3838';
  QT3.style.color = '#3b3838';
  QT4.style.color = '#3b3838';

  q1Area.innerHTML="How do I get started with Algorithmia?";
  a1Area.innerHTML="To begin your Algorithmia journey, simply visit our website, create an account, and explore our diverse range of computer science courses.";
  
  q2Area.innerHTML="How can I suggest new course topics?";
  a2Area.innerHTML="Share your insights in our dedicated Student Review section to propose new topics or areas for future courses.";

  q3Area.innerHTML="Is Algorithmia free to use?";
  a3Area.innerHTML="Absolutely! As of now, Algorithmia is entirely free, and no payment is required for access to our courses.";

  q4Area.innerHTML="Who created Algorithmia?";
  a4Area.innerHTML="Algorithmia was founded by three passionate friends—Malak, Arwa, and Aseel—in their shared quest for enriching computer science courses and enhancing their own skills.";
  
});
// Handling click on Question 2
// Changing text and styles for Question 2 and its associated answer
QT2.addEventListener('click', function () {
  QT1.style.color = '#3b3838';
  QT2.style.color = '#ca0273';
  QT3.style.color = '#3b3838';
  QT4.style.color = '#3b3838';

  q1Area.innerHTML="How to access course materials and resources?";
  a1Area.innerHTML="To access course materials, simply login to your Algorithmia account, navigate to the course you've enrolled in, and you'll find all the resources and materials you need for your learning journey conveniently organized within the course dashboard.";
  
  q2Area.innerHTML="Are course certificates provided upon completion?";
  a2Area.innerHTML="Absolutely! Upon successfully completing our courses, we provide course certificates as a testament to your accomplishment. These certificates serve as recognition of your dedication and effort throughout the course. If you have any further queries or need assistance, feel free to reach out!";

  q3Area.innerHTML="What prerequisites are required for advanced courses?";
  a3Area.innerHTML="Advanced courses typically require a strong foundation in [specific subjects] and proficiency in [relevant tools/technologies]. Completion of our intermediate-level courses in [related field] is recommended. For personalized guidance or if you're unsure about eligibility, contact us at [email/phone].";

  q4Area.innerHTML="How do I track my course progress?";
  a4Area.innerHTML="Tracking your course progress is simple! Once you've enrolled in our course, you'll have access to your personalized dashboard. From there, you can easily track your progress through the modules or lessons completed. We provide progress indicators, such as checkmarks or percentages, to show your advancement through the course material. If you have specific questions about tracking progress or encounter any issues, feel free to reach out to our support team for assistance.";
  
});
// Handling click on Question 3
// Changing text and styles for Question 3 and its associated answer
QT3.addEventListener('click', function () {
  QT1.style.color = '#3b3838';
  QT2.style.color = '#3b3838';
  QT3.style.color = '#ca0273';
  QT4.style.color = '#3b3838';

  q1Area.innerHTML="Do I need to pay for Algorithmia courses?";
  a1Area.innerHTML="No, Algorithmia currently offers all courses for free, and there are no payment requirements.";
  
  q2Area.innerHTML="Are there any hidden costs associated with Algorithmia courses?";
  a2Area.innerHTML="No, Algorithmia is entirely free, and there are no hidden fees or additional charges.";

  q3Area.innerHTML="Will there be premium courses with payment in the future?";
  a3Area.innerHTML="As of now, all Algorithmia courses are free, but stay tuned for any future updates.";

  q4Area.innerHTML="How can I access premium content without payment?";
  a4Area.innerHTML="Currently, all content on Algorithmia is accessible for free, with no payment needed.";
  
});

// Handling click on Question 4
// Changing text and styles for Question 4 and its associated answer
QT4.addEventListener('click', function () {
  QT1.style.color = '#3b3838';
  QT2.style.color = '#3b3838';
  QT3.style.color = '#3b3838';
  QT4.style.color = '#ca0273';

  q1Area.innerHTML="What should I do if I can't access a course video?";
  a1Area.innerHTML="Ensure your internet connection is stable. If the issue persists, try refreshing the page or clearing your browser cache.";
  
  q2Area.innerHTML="Why is the website loading slowly for me?";
  a2Area.innerHTML="Slow loading may be due to internet speed. Check your connection or try accessing the website during non-peak hours.";

  q3Area.innerHTML="How do I reset my password if I forget it";
  a3Area.innerHTML="Click on (Forgot Password) on the login page. Follow the instructions sent to your email to reset your password.";

  q4Area.innerHTML="How do I find specific topics in the course content?";
  a4Area.innerHTML="Use the search bar on the homepage to locate specific topics within the courses quickly.";
  
});
/************************************************************************************************/
//social media icons
// Get all the image elements with the 'image' class
const iconImages = document.querySelectorAll('.info .image');

// Loop through each image and add event listeners
for (let h = 0; h < iconImages.length; h++) {
  const image = iconImages[h];
  // Store the original image source in a 'data-original' attribute
  image.setAttribute('data-original', image.src);

  // Add event listeners for mouseover and mouseout
  image.addEventListener('mouseover', function() {
    // Change the image source to the hover image path stored in 'data-hover'
    this.src = this.getAttribute('data-hover');
  });

  image.addEventListener('mouseout', function() {
    // Restore the original image source from 'data-original'
    this.src = this.getAttribute('data-original');
  });
}
