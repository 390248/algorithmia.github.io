
//Inziallize all the eleemnt
const viewPopup = document.getElementById("view-popup");
let nameInput = document.getElementById("nameInput");
let view = document.getElementById("view");
const stars = document.querySelectorAll(".stars i");
const scrollers = document.querySelectorAll(".scroller");

//views slider
// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  for (let s = 0; s < scrollers.length; s++) {
    // add data-animated="true" to every `.scroller` on the page
    scrollers[s].setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scrollers[s].querySelector(".scroller__inner");
    const scrollerContent = Array.prototype.slice.call(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    for (let a = 0; a < scrollerContent.length; a++) {
      const duplicatedItem = scrollerContent[a].cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    }
  }
}

//function to popup the card
function openPopup(){
  //apply pop class styling
    viewPopup.classList.add("pop");
}
function closePopup(){
  //remove pop class styling
    viewPopup.classList.remove("pop");
    //reset all the inputs
    nameInput.value = "";
    view.value = "";
    //reset the stars to original style
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("selected");
    }
}
//when clicking in any place in the website the card will be removed
window.addEventListener("click", function (event) {
    if (event.target == viewPopup) {
        viewPopup.classList.remove("pop");
    }
});

//rating star
let starNo;
// Loop through the "stars" NodeLists
for (let idx1 = 0; idx1 < stars.length; idx1++) {
    // Add an event listener that runs a function when the "click" event is triggered
    stars[idx1].addEventListener("click", () => {
      starNo = idx1+1;
      // Loop through the "stars" NodeList Again
      for (let idx2 = 0; idx2 < stars.length; idx2++) {
        // Add the "selected" class to the clicked star and any stars with a lower index
        // and remove the "selected" class from any stars with a higher index
        if (idx1 >= idx2) {
          stars[idx2].classList.add("selected");
        } else {
          stars[idx2].classList.remove("selected");
        }
      }
    });
  }



  //adding a review to the website

  //initialize the array of abjects with the defualt reviews 
  let opinions = [
    //bjects having: name, content, stars, profileImage as instant variables
    {
        name: "Emily Turner",
        content: "Algorithmia turned my coding hobby into a career, thanks to its top notch instructors and resources.",
        stars: 5,
        profileImage: `/img/06 pic1.jpg`
      },
      {
        name: "Sophia Chen",
        content: "The cybersecurity course at Algorithmia made me a pro, securing my dream job in tech.",
        stars: 5,
        profileImage:`/img/06 pic4.jpg`
      },
      {
        name: "Isabella Scott",
        content: "Algorithmia data science courses empowered me to harness data's potential and drive real- world insights.",
        stars: 5,
        profileImage:`/img/06 pic6.jpg`
      },
      {
        name: "Daniel White",
        content: "I dove into AI with Algorithmia and emerged with expertise, ready to innovate in the field.",
        stars: 5,
        profileImage:`/img/06 pic3.jpg`
      },
      {
        name: "Liam Patel",
        content: "From novice to software engineer, Algorithmia fueled my coding journey with hands-on learning and guidance.",
        stars: 5,
        profileImage:`/img/06 pic2.jpg`
      },
      {
        name: "Olivia Carter",
        content: "Algorithmia platform is a treasure trove for aspiring developers, offering a clear path to success.",
        stars: 5,
        profileImage:`/img/06 pic5.jpg`
      },    
  ]; // Array to store opinions
 
  
  //add the review when clicking done
  function addReview() {
    //intialize the needed tags
    const reviewContent = document.getElementById("view").value;
    const userName = document.getElementById("nameInput").value;
  
    // Create a new opinion object
    const newOpinion = {
      name: userName,
      content: reviewContent,
      stars: starNo,
      profileImage: `/img/black.jpeg`
    };
    //push the new object(review) to the opinions
    opinions.push(newOpinion);
    
    // Render opinions based on the updated array
    renderOpinions(); //to display all the cards in the opinions array in the website
    closePopup() //close the card when done
  }
  
  //to display all the cards in the opinions array in the website
  function renderOpinions() {
    //to access both col1 and col2 when adding
    const col1 = document.querySelector('.col1');
    const col2 = document.querySelector('.col2');
    //reset them
    col1.innerHTML = '';
    col2.innerHTML = '';
    let currentColumn = 1; // Variable to track the current column to add to

    //loop through each review card (object) in the opinions card to display them
    for (let index = 0; index < opinions.length; index++) {
      const opinion = opinions[index];
      const newReview = document.createElement("div"); //create new element div
      newReview.classList.add("op-card"); //add op-card class inside div
      
      //upgadte the content of div element
      newReview.innerHTML = `
        <div class="line">
          <img src="${opinion.profileImage}" alt="student profile">
          <h3>${opinion.name}</h3>
          <i class="fa fa-quote-right"></i>
        </div>
        <p>"${opinion.content}"</p>
        <div class="stars">
          ${getStarsHTML(opinion.stars)}
        </div>
      `;
      
      //alternate between cols when adding the revie cards
      if (currentColumn === 1) {
        col1.appendChild(newReview);
      } else {
        col2.appendChild(newReview);
      }
      
      //change the currentColumn to add to
      currentColumn = (currentColumn === 1) ? 2 : 1;
    }    
  }
  
  // Helper function to generate star icons HTML based on the number of stars
  function getStarsHTML(numStars) {
    let starsHTML = '';
    //to display specific number of stars
    for (let i = 0; i < numStars; i++) {
      starsHTML += '<span class="fa fa-star checked" style="color:#ff7f71;"></span>';
    }
    return starsHTML;
  }
  

