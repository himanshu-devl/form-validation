<?php
// Establish database connection
$servername = "localhost";
$username = "admin";
$password = "Admin@123";
$dbname = "trainingsample";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$phone_number = $_POST['phone_number'];
$password = $_POST['password'];

// Prepare and execute SQL statement
$stmt = $conn->prepare("INSERT INTO `form data`(`fname`, `lname`, `email`, `phone_number`, `password`) VALUES ('$fname ','$lname','$email','$phone_number','$password')");
$stmt->bind_param("sssss", $fname, $lname, $email, $phone_number, $password);
$stmt->execute();

// Check if the data was inserted successfully
if ($stmt->affected_rows > 0) {
    echo "Data inserted successfully";
} else {
    echo "Error inserting data";
}

// Close the database connection
$stmt->close();
$conn->close();
?>
