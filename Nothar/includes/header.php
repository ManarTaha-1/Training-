<?php if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
 ?> <!-- Start session to manage user login status -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- main style sheet -->
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/st-dashboard.css">
    <!-- font awesome icond -->
     <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="shortcut icon" href="../images/nothar.png" type="image/x-icon">
    <title>Nothar</title>
<body>
    <section class="hero">
        <header class="header">
            <div class="nav">
                <i id="icon" class="fas fa-bars" onclick="showMenu()"></i>
                <nav class="drop-down" id="dropdown">
                    <a href="../html/index.html">HOME</a>
                    <a href="#about">ABOUT</a>
                    <div class="topics"> Topics
                        <a href="../articles/future.php">Future</a>
                        <a href="../articles/space.php">Space</a>
                        <a href="../articles/energy.php">Energy</a>
                        <a href="../articles/science.php">Science</a>
                        <a href="../articles/tech.php">Tech</a>
                    </div>
                    <a href="#contactus">CONTACT US</a>
                </nav>
            </div>
            <div class="logo">
                <a href="#">
                    <img src="../images/nothar.png" alt="nothar logo">
                </a>
            </div> 
            <div class="categories" id="topics">
                <ul>
                    <li><a href="../articles/future.php">Future</a></li>
                    <li><a href="../articles/space.php">Space</a></li>
                    <li><a href="../articles/energy.php">Energy</a></li>
                    <li><a href="../articles/science.php">Science</a></li>
                    <li><a href="../articles/tech.php">Tech</a></li>
                </ul>
            </div>
            
            <div class="btn">
                <?php if (isset($_SESSION['user_id'])): ?>
                    <!-- If the user is logged in, show logout button -->
                    <a href="logout.php">Log out</a>
                <?php else: ?>
                    <!-- If the user is not logged in, show login button -->
                    <a href="#" onclick="toggleModal('loginModal')">Log in</a>
                <?php endif; ?>
            </div>
        </header>
    </section>
</body>
</html>


