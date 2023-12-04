const courseStates = {};
const done = (course) => {
  // Check if the course state is undefined or not marked as done
  if (!courseStates[course]) {
    
    // Get the progress bar element
    const progressBar = document.getElementById('courseProgressBar');
    const progressText = document.getElementById('progress-text');

    // Get the current width of the progress bar
    let currentWidth = parseFloat(progressBar.style.width) || 0;
    
    // Increase the progress by a certain percentage 
    //since the completed progress represents 100% and there is 6 courses so, 100/6=16.6
    const increasePercentage = 16.60; 
    currentWidth += increasePercentage; //add 16.6 to the current width when the course

    // Update the width of the progress bar
    progressBar.style.width = currentWidth +1 +'%';
    // Optionally, you can also update other attributes like aria-valuenow
    progressBar.setAttribute('aria-valuenow', currentWidth);

    //check if all courses is done
    if (currentWidth >= 100) {
      // Change the text to "Done"
      progressText.textContent = 'Done';
    }

    // Mark the course as done to prevent further updates
    courseStates[course] = true;
  }
};
