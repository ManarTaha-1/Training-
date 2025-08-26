<?php
require_once '../config.php';
require '../includes/header.php';
require_once '../includes/session_control.php';
requireLogin(); // Ensure user is logged in

// Handle form submission
$messageSent = null;
if (isset($_POST['submit'])) {
    $to = 'your-email@example.com'; // Change this
    $subject = 'Contact Us Form Submission';
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $emailContent = "New message from the contact form:\n\n";
    $emailContent .= "Name: $name\n";
    $emailContent .= "Email: $email\n\n";
    $emailContent .= "Message:\n$message\n";

    if (mail($to, $subject, $emailContent, $headers)) {
        $messageSent = 'success';
    } else {
        $messageSent = 'error';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact Us</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .contact-form {
            background-color: #fff;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 600px;
            animation: fadeIn 0.8s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }
        h1 {
            text-align: center;
            color: #343a40;
            margin-bottom: 20px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 6px;
            font-weight: 600;
            color: #555;
        }
        input, textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ced4da;
            border-radius: 8px;
            font-size: 15px;
            transition: 0.3s;
        }
        input:focus, textarea:focus {
            border-color: #80bdff;
            outline: none;
        }
        button {
            background-color: #17a2b8;
            color: white;
            padding: 12px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
            transition: background 0.3s;
        }
        button:hover {
            background-color: #138496;
        }
        .call-now-btn {
            background-color: #ffc107;
            margin-top: 15px;
        }
        .call-now-btn:hover {
            background-color: #e0a800;
        }
        .message {
            text-align: center;
            margin-top: 15px;
            font-weight: bold;
        }
        .success { color: #28a745; }
        .error { color: #dc3545; }
    </style>
</head>
<body>

<div class="contact-form">
    <h1>Contact Us</h1>
    <form action="contactus.php" method="POST">
        <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit" name="submit">Send Message</button>
    </form>

    <a href="tel:+201234567890">
        <button class="call-now-btn">Call Now</button>
    </a>

    <?php if ($messageSent === 'success'): ?>
        <div class="message success">Your message has been sent successfully!</div>
    <?php elseif ($messageSent === 'error'): ?>
        <div class="message error">Sorry, something went wrong. Please try again.</div>
    <?php endif; ?>
</div>

<?php require '../includes/footer.php'; ?>

</body>
</html>
