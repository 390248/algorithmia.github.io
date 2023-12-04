//choose cs related emoji that will appear in the memory game
const emojis = ["🖥️", "🖥️", "🖱️", "🖱️", "👾", "👾", "🤖", "🤖", "🌐", "🌐", "🦾", "🦾", "💿", "💿", "👩🏻‍💻", "👩🏻‍💻"];

//sort the emojis and suffle
var shuf_emojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);

let openBoxes = []; //collect the open boxes
let tries = 0; //count the number of tries

// Initialize timer variables
let seconds = 0;
let minutes = 1;
let timerInterval;
let timerStarted = false;

// Function to start the timer
function startTimer() {
    timerStarted = true; //the timer will start once any box is clicked
    //change the time every 1000 milliseconds = 1 sec
    timerInterval = setInterval(() => {
        //stop the game and reload it if the time is up
        if (minutes === 0 && seconds === 0) {
            clearInterval(timerInterval);
            alert("Times Up!");
            window.location.reload(); //relode the page
        } 
        //decrement the minute if seconds reaches to 0
        else if (seconds === 0) {
            minutes--;
            seconds = 59;
        } 
        //decrement the second
        else {seconds--;}

        //update the time in the website by changing the content of the time element
        //use JQUERY framework
        $("#minutes").text((minutes < 10 ? "0" : "") + minutes);
        $("#seconds").text((seconds < 10 ? "0" : "") + seconds);
    }, 1000);
}

// Function to handle the click event on a box
function handleBoxClick() {
    //start the time after the click
    if (!timerStarted) {
        startTimer();
    }

    this.classList.add("boxOpen"); //apply the boxOpen design
    openBoxes.push(this); //push the open boxes to the openBoxes array

    //check if two boxes are opens
    if (openBoxes.length === 2) {
        //box1 = openBoxes[0], box2 = openBoxes[1];
        const [box1, box2] = openBoxes;
        tries++; //increment the tries after two open boxes
        //movement of the boxes to appear or disappear = 250 millisecond = 0.25 sec
        setTimeout(() => {
            //keep the two open boxes shown using boxMath styling if the two boxes are equal
            if (box1.innerHTML === box2.innerHTML) {
                box1.classList.add('boxMatch');
                box2.classList.add('boxMatch');
                
                //win case
                //if all the boxes are shown and matched
                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    alert(`Win\nNumber of tries: ${tries}`);
                    window.location.reload(); //reload the page after winning
                }
            } 
            //close the two boxes if they didn't match
            else {
                box1.classList.remove('boxOpen');
                box2.classList.remove('boxOpen');
            }
            //clear the openBoxes after each try
            openBoxes = [];
            //update the number of tries in the website 
            //use JQUERY framework
            $("#minutes").text((minutes < 10 ? "0" : "") + minutes);
            $("#tries").text(`${tries}`);
        }, 250);
    }
}

// Create boxes for each emoji and add event listeners for click events
for (let i = 0; i < emojis.length; i++) {
    let box = $('<div></div>').addClass('item').html(shuf_emojis[i]);
    box.on('click', handleBoxClick);
    $('.game').append(box);
}
