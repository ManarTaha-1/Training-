<?php 
require_once '../config.php';
require '../includes/header.php';
require_once '../includes/session_control.php';
requireAdmin()  
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="../css/style.css"> <!-- Replace with your correct CSS path -->
  
</head>
<body>

<!-- Add Article Form -->
<section class="add-article-section">
  <h2>Add New Article</h2>
  <form action="../add_article.php" method="POST" enctype="multipart/form-data" class="article-form">
    <input type="text" name="title" placeholder="Title" required><br>
    <textarea name="content" placeholder="Content" required></textarea><br>
    <input type="file" name="image" accept="image/*" required><br>
    <select name="category">
      <option value="tech">Tech</option>
      <option value="space">Space</option>
      <option value="Future">Future</option>
      <option value="energy">Energy</option>
      <option value="science">Science</option>
    </select><br>
    <button type="submit">Add Article</button>
  </form>
</section>

<hr>

<!-- Display Articles as Static-Style Cards -->
<section class="article-display">
  <?php
  $stmt = $pdo->query("SELECT * FROM articles ORDER BY created_at DESC");
  while ($row = $stmt->fetch()):
  ?>
  <div class="container" data-aos="flip-down" data-aos-delay="400" data-aos-duration="1000">
    <div class="box">
      <img src="../<?= htmlspecialchars($row['image_url']) ?>" style="background-color: aliceblue;">
      <span class="par" onclick="toggleContent(this)">
        <div class="hover-line">
          <?= htmlspecialchars($row['title']) ?>
        </div>    
      </span>
    </div>
    <div class="content">
      <p><span class="letter"><?= strtoupper(substr($row['content'], 0, 1)) ?></span><?= substr($row['content'], 1) ?></p>
      <p><strong>Category:</strong> <?= htmlspecialchars($row['category']) ?></p>
      <form action="../delete_article.php" method="POST">
        <input type="hidden" name="id" value="<?= $row['id'] ?>">
        <button type="submit">Delete</button>
      </form>
    </div>
  </div>
  <?php endwhile; ?>
</section>

<?php require '../includes/footer.php'; ?>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>AOS.init();</script>
<script src="../js/dashboard.js"></script>
</body>
</html>
