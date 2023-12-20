<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "algorithimaDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL code for creating the table
$tableCreationSQL = "CREATE TABLE IF NOT EXISTS eventRegistration (
    id INT AUTO_INCREMENT PRIMARY KEY,
    team_name VARCHAR(255),
    idea_title VARCHAR(255),
    idea_name TEXT
)";

// Execute the SQL query to create the table
if ($conn->query($tableCreationSQL) === TRUE) {
    echo "Table 'eventRegistration' created successfully<br>";
} else {
    echo "Error creating table: " . $conn->error . "<br>";
}

class HackathonSubmission {
    // Properties for team name, idea title, and idea
    private $teamName;
    private $title;
    private $idea;

    // Setter method for team name
    public function setTeamName($teamName) {
        $this->teamName = $teamName;
    }

    // Getter method for team name
    public function getTeamName() {
        return $this->teamName;
    }

    // Setter method for idea title
    public function setTitle($title) {
        $this->title = $title;
    }

    // Getter method for idea title
    public function getTitle() {
        return $this->title;
    }

    // Setter method for idea
    public function setIdea($idea) {
        $this->idea = $idea;
    }

    // Getter method for idea
    public function getIdea() {
        return $this->idea;
    }

    // Constructor to initialize properties based on provided data
    public function __construct($data) {
        // If the 'team_name' key exists in the data array, assign its value to $teamName; otherwise, set it to an empty string
        $this->teamName = isset($data['team_name']) ? $data['team_name'] : "";

        // If the 'hackathon-idea-title' key exists in the data array, assign its value to $title; otherwise, set it to an empty string
        $this->title = isset($data['hackathon-idea-title']) ? $data['hackathon-idea-title'] : "";

        // If the 'hackathon-idea' key exists in the data array, assign its value to $idea; otherwise, set it to an empty string
        $this->idea = isset($data['hackathon-idea']) ? $data['hackathon-idea'] : "";
    }

    public function validateData() {
        if (empty($this->teamName) || empty($this->title) || empty($this->idea)) {
            return false; // Validation failed
        }
        return true; // Validation successful
    }

    public function saveToDatabase($conn) {
        if ($this->validateData()) {
            $sql = "INSERT INTO eventRegistration (team_name, idea_title, idea_name)
                    VALUES ('$this->teamName', '$this->title', '$this->idea')";

            if (mysqli_query($conn, $sql)) {
                echo "Data inserted into 'eventRegistration' table successfully<br>";
            } else {
                echo "Error inserting data: " . mysqli_error($conn) . "<br>";
            }
        }
    }


    public function displayInfo($conn) {
        // SQL query to select all data from the eventRegistration table
        $SQL = "SELECT * FROM eventRegistration";
    
        // Execute the SQL query
        $result = mysqli_query($conn, $SQL);
    
        // Display header for Hackathon Submission Information
        echo "<h2>Hackathon Submission Information:</h2>";
    
        // Loop through the fetched rows and display data in a table format
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<table border='1'>";
            echo "<tr><td>Team Name</td><td>{$row['team_name']}</td></tr>";
            echo "<tr><td>Idea Title</td><td>{$row['idea_title']}</td></tr>";
            echo "<tr><td>Idea</td><td>{$row['idea_name']}</td></tr>";
            echo "</table>";
            echo "<br>";
            echo "<br>";
        }
    }
    
    public function searchFromDatabase($conn, $searchTerm) {
        // SQL query to search for a specific team name in the eventRegistration table
        $SQL = "SELECT * FROM eventRegistration WHERE team_name = '$searchTerm'";
    
        // Execute the SQL query
        $result = mysqli_query($conn, $SQL);
    
        // Display search results in a table format
        if (mysqli_num_rows($result) > 0) {
            echo "<h2>Search Results:</h2>";
            echo "<table border='1'>";
            echo "<tr><th>ID</th><th>Team Name</th><th>Idea Title</th><th>Idea</th></tr>";
    
            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr><td>{$row['id']}</td><td>{$row['team_name']}</td><td>{$row['idea_title']}</td><td>{$row['idea_name']}</td></tr>";
            }
    
            echo "</table>";
        } else {
            echo "No results found.";
        }
    }
    
    public function deleteFromDatabase($conn) {
        // SQL query to delete data from eventRegistration based on team_name
        $sql = "DELETE FROM eventRegistration WHERE team_name = '$this->teamName'";
    
        // Execute the SQL query to delete data
        if (mysqli_query($conn, $sql)) {
            echo "Data deleted from 'eventRegistration' table successfully<br>";
        } else {
            echo "Error deleting data: " . mysqli_error($conn) . "<br>";
        }
    }
    
 
}

// Assuming $_POST contains the form data
$submissions = new HackathonSubmission($_POST);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['searchButton'])) {
        $searchTerm = $_POST['search'];
        $submissions->searchFromDatabase($conn, $searchTerm);
    }
}

// Call the saveToDatabase method to save information to the database
$submissions->saveToDatabase($conn);
// Call the displayInfo method to show the information
$submissions->displayInfo($conn);

?>

<!-- Form for search -->
<form method="post">
    <input type="text" name="search">
    <input type="submit" name="searchButton" value="Search">
</form>
