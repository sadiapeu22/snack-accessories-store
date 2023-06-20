<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $product = $_POST["product"];
    $quantity = $_POST["quantity"];
  
    // Perform any necessary processing or validation
  
    // Example: Store order details in a database
    // Replace the database connection details with your own
    $servername = "localhost";
    $username = "your_username";
    $password = "your_password";
    $dbname = "your_database";
  
    // Create a connection
    $conn = new mysqli($servername, $username, $password, $dbname);
  
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
  
    // Prepare and execute the SQL statement to insert the order into the database
    $sql = "INSERT INTO orders (name, email, product, quantity) VALUES ('$name', '$email', '$product', '$quantity')";
  
    if ($conn->query($sql) === TRUE) {
      echo "Order placed successfully!";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
  
    // Close the database connection
    $conn->close();
  }


?>