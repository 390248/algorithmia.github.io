<?php

class contactSubmission {
    public $contactArr;

    public function __construct($data) {
        // Assign value to object properties
        $this->contactArr = $data;
    }

    public function displayInfo() {
        // Display header for Contact Information
        echo "<h2>Contact Information:</h2>";
    
        // Display table structure
        echo "<table border='1'>";
        echo "<tr><th>Name</th><th>Email</th><th>Message</th></tr>";
        echo "<tr>";
    
        // Loop through each value in the contactArr array
        foreach ($this->contactArr as $value) {
            // Check if the value is empty
            if ($value == "") {
                // If empty, display a cell with a red message indicating the field was empty
                echo "<td style=\"color:red;\">This field was empty!</td>";
            } else {
                // If not empty, display the value in a table cell
                echo "<td>{$value}</td>";
            }
        }
        
        // Close the table row and table
        echo "</tr>";
        echo "</table>";
    }    
}

// Assuming $_POST contains the form data
// Create an object of contactSubmission class using $_POST data
$name = $_POST['contactname'];
$email = $_POST['contactemail'];
$message = $_POST['message'];
$contactArrInfo = [$name,$email,$message];
$submissions = new contactSubmission($contactArrInfo);
// Call the displayInfo method to show the information
$submissions->displayInfo();


?>