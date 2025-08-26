<?php
    // Include the configuration file and header
    require_once '../config.php';

    require '../includes/header.php';
 
?>


<body>
<!-- Hero Section Start -->
<section class="hero">
    <div class="hero-text">
        <h1>Discover Stories That Matter</h1>
        <p>Explore thought-provoking articles from writers around the world</p>
    </div>
</section>
<!-- Hero Section End -->

<!-- About Section Start -->
<section class="about" id="about">
    <h2>About</h2>
    <div class="who">
        <p><b style="color:#7e3650; font-size: 30px;">Nothar</b> is a knowledge platform that showcases articles in various fields. <br>
            It was created by <b style="color:#7e3650;">Manar Taha</b> & <b style="color:#7e3650;">Heba-t-Allah</b> to reach the largest possible number of people. <br>
            These articles explain some of the phenomena occurring around us and predict what will happen in the future.
        </p>
    </div>
    <div class="row">
        <div class="container" data-aos="flip-down" data-aos-delay="400" data-aos-duration="1000">
            <div class="box">
                <img src="../images/manar.png" alt="Manar Taha">
                <span class="card-text" onclick="toggleContent(this)">
                    <h3>Manar Taha</h3>
                </span>
            </div>
        </div>
        <div class="container" data-aos="flip-down" data-aos-delay="400" data-aos-duration="1000">
            <div class="box">
                <img src="../images/heba.png" alt="Heba-t-Allah">
                <span class="card-text" onclick="toggleContent(this)">
                    <h3>Heba-t-Allah</h3>
                </span>
            </div>
        </div>
    </div>
</section>
<!-- About Section End -->

 

    <!-- Display message if the user is logged in -->
    <?php if (isset($_SESSION['user_id'])): ?>
    <div class="user-welcome">
        <h3>Welcome back, <?= htmlspecialchars($_SESSION['username']); ?>!</h3>
        <p>
            <a href="../pages/logout.php" style="color: #c0392b;">Logout</a> <!-- adjust path as needed -->
        </p>
    </div>
    <?php else: ?>
        <div class="user-welcome">
            <h3>Welcome to Nothar!</h3>
            <p>Please <a href="#" onclick="toggleModal('loginModal')">log in</a> to access more features.</p>
        </div>
    <?php endif; ?>

</section>


<!-- Login and Register Modal (include these only once) -->
<?php 
    include('login_modal.php');  // Ensure this includes your login modal
    include('register_madal.php');  // Ensure this includes your registration modal
?>

<!-- Footer Section -->
<?php include('../includes/footer.php'); ?>

<script src="../js/scripts.js"></script>
    </body>


