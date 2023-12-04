// Constructor function for ImageGallery
function ImageGallery(images) {
  // Initialize properties
  this.images = images;
  this.currentIndex = 0;
  
  // Method to display a specific image based on the index
  this.showImage = function(index) {
    for (let i = 0; i < this.images.length; i++) {
      if (i === index) {this.images[i].style.display = 'block';}
      else {this.images[i].style.display = 'none';}
    }
  };

  // Method to rotate through images at an interval
  this.rotateImages = function() {
    // Set interval to change images every 3000 milliseconds = 3 seconds
    setInterval(() => {
      // Increment the index and ensure it stays within the range of images using modulo
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      // Display the image based on the updated index
      this.showImage(this.currentIndex);
    }, 3000);
  };

  // Method to initialize the gallery by displaying the first image and starting rotation
  this.init = function() {
    this.showImage(this.currentIndex);
    this.rotateImages();
  };
}

// Access the images in the gallery
const images = document.querySelectorAll('.gallery img');
// Create an ImageGallery object and initialize it
const gallery = new ImageGallery(images);
gallery.init();
