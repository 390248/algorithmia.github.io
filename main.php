<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create DB connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create a new database named algorithimaDB
$sql = "CREATE DATABASE IF NOT EXISTS algorithimaDB"; // Specify SQL query
if (mysqli_query($conn, $sql)) {
    echo "Database algorithimaDB created successfully <br>";
} else {
    echo "Error creating database: " . mysqli_error($conn);
}

mysqli_close($conn); // Close DB connection

// Create DB connection to the newly created database
$conn = mysqli_connect($servername, $username, $password, "algorithimaDB");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "You are connected to algorithimaDB <br>";
}

// Create a table named users
$sql_users = "CREATE TABLE IF NOT EXISTS users (
    sid INT PRIMARY KEY,
    username VARCHAR(128),
    email VARCHAR(255),
    userpassword VARCHAR(255)
)";

if (mysqli_query($conn, $sql_users)) {
    echo "Table 'users' created successfully <br>";
} else {
    echo "Error creating table 'users': " . mysqli_error($conn) . "<br>";
}

// Inserting data into users table
$insert_sql_users = "INSERT INTO users (sid, username, email, userpassword) VALUES 
    (100, 'arwa', 'arwa@example.com', 'arwa5'),
    (200, 'malak', 'malak@example.com', 'malak5'),
    (300, 'aseel', 'aseel@example.com', 'aseel5'),
    (400, 'humaid', 'humaid@example.com', 'humaid5'),
    (500, 'bader', 'bader@example.com', 'bader5'),
    (600, 'ghusn', 'ghusn@example.com', 'ghusn5'),
    (700, 'ahmed', 'ahmed@example.com', 'ahmed5')";

if (mysqli_query($conn, $insert_sql_users)) {
    echo "Data inserted into 'users' table successfully <br>";
} else {
    echo "Error inserting data into 'users' table: " . mysqli_error($conn) . "<br>";
}

// Create a table named contact
$sql_contact = "CREATE TABLE IF NOT EXISTS contact (
    sid INT PRIMARY KEY,
    name VARCHAR(128),
    email VARCHAR(255),
    message VARCHAR(255)
)";

if (mysqli_query($conn, $sql_contact)) {
    echo "Table 'contact' created successfully <br>";
} else {
    echo "Error creating table 'contact': " . mysqli_error($conn) . "<br>";
}

// Inserting data into contact table
$insert_sql_contact = "INSERT INTO contact (sid, name, email, message) VALUES 
    (100, 'arwa', 'arwa@example.com', 'I\'m experiencing issues accessing course materials. I keep getting an error message when trying to log in. Can you assist?'),
    (200, 'malak', 'malak@example.com', 'I\'m interested in additional resources for the AI course. Are there any supplementary materials or recommended readings available?'),
    (300, 'aseel', 'aseel@example.com', 'I forgot my password and I\'m unable to reset it. Can you help me regain access to my account?'),
    (400, 'humaid', 'humaid@example.com', 'I have an idea for improving the user interface of the platform. How can I share my suggestions with the development team?'),
    (500, 'bader', 'bader@example.com', 'I\'ve been charged incorrectly for my subscription. Can you review my account and rectify the billing issue?'),
    (600, 'ghusn', 'ghusn@example.com', 'I\'m having trouble enrolling in the advanced web development course. Could you provide guidance on the enrollment process?'),
    (700, 'ahmed', 'ahmed@example.com', 'I\'m interested in learning more about the platform\'s certifications. Can you provide details on the certification programs available?')";

if (mysqli_query($conn, $insert_sql_contact)) {
    echo "Data inserted into 'contact' table successfully <br>";
} else {
    echo "Error inserting data into 'contact' table: " . mysqli_error($conn) . "<br>";
}

// Create a table named courses
$sql_courses = "CREATE TABLE IF NOT EXISTS courses (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(100),
    Instructor VARCHAR(50)
)";

if (mysqli_query($conn, $sql_courses)) {
    echo "Table 'courses' created successfully <br>";
} else {
    echo "Error creating table 'courses': " . mysqli_error($conn) . "<br>";
}

// Inserting data into courses table
$insert_sql_courses = "INSERT INTO courses (CourseID, CourseName, Instructor) VALUES 
    (100, 'WEB', 'Dr. Fatims Mohamed'),
    (200, 'AI', 'Prof. Alex Chang'),
    (300, 'SOFTWARE ENGINEERING', 'Dr. Sarah Thompson'),
    (400, 'MACHINE LEARNING and DEEP LEARNING', 'Dr. Ethan Miller'),
    (500, 'DATA ANALYSIS', 'Dr. Ava Pate'),
    (600, 'CYBER SECURITY', 'Dr. David Smith')";

if (mysqli_query($conn, $insert_sql_courses)) {
    echo "Data inserted into 'courses' table successfully <br>";
} else {
    echo "Error inserting data into 'courses' table: " . mysqli_error($conn) . "<br>";
}

// Fetching data from tables
$userSQL = "SELECT * FROM users";
$userResult = mysqli_query($conn, $userSQL);

$contactSQL = "SELECT * FROM contact";
$contactResult = mysqli_query($conn, $contactSQL);

$courseSQL = "SELECT * FROM courses";
$courseResult = mysqli_query($conn, $courseSQL);

mysqli_close($conn); // Close DB connection
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Data Display</title>
</head>
<body>
    <!-- Display User Data -->
    <h3>User Data:</h3>
    <table border="1">
        <tr>
            <th>SID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Userpassword</th>
        </tr>
        <?php
        // Fetching and displaying user data in a table
        while ($row = mysqli_fetch_assoc($userResult)) {
            echo "<tr><td>".$row['sid']."</td><td>".$row['username']."</td><td>".$row['email']."</td><td>".$row['userpassword']."</td></tr>";
        }
        ?>
    </table>

    <!-- Display Contact Data -->
    <h3>Contact Data:</h3>
    <table border="1">
        <tr>
            <th>SID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
        </tr>
        <?php
        // Fetching and displaying contact data in a table
        while ($row = mysqli_fetch_assoc($contactResult)) {
            echo "<tr><td>".$row['sid']."</td><td>".$row['name']."</td><td>".$row['email']."</td><td>".$row['message']."</td></tr>";
        }
        ?>
    </table>

    <!-- Display Courses Data -->
    <h3>Courses Data:</h3>
    <table border="1">
        <tr>
            <th>CourseID</th>
            <th>CourseName</th>
            <th>Instructor</th>
        </tr>
        <?php
        // Fetching and displaying courses data in a table
        while ($row = mysqli_fetch_assoc($courseResult)) {
            echo "<tr><td>".$row['CourseID']."</td><td>".$row['CourseName']."</td><td>".$row['Instructor']."</td></tr>";
        }
        ?>
    </table>
</body>
</html>

