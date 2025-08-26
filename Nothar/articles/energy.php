<?php
require_once '../config.php';
require '../includes/header.php';

$category = 'energy';
$stmt = $pdo->prepare("SELECT * FROM articles WHERE category = ?");
$stmt->execute([$category]);
$articles = $stmt->fetchAll();
?>

<section class="space">
  <div class="fixed-text">
    <h1>Discover Stories That Matter</h1>
    <p>Explore thoughts-provoking articles from writers around the world</p>
    <div class="btn"><a href="index.html">Back To Home</a></div>
  </div>
</section>

<div class="space"></div>
<h1><span class="letter1">S</span><span class="letter2">p</span><span class="letter3">a</span><span class="letter4">c</span><span class="letter5">e</span></h1>
<div class="space"></div>

<h4 data-aos="flip-right">Articles</h4>
<div class="all">

  <?php foreach ($articles as $article): ?>
    <div class="container" data-aos="flip-down" data-aos-delay="400" data-aos-duration="1000">
      <div class="box">
        <img src="../<?= htmlspecialchars($article['image_url']) ?>" alt="" style="background-color: aliceblue;">
        <span class="par" onclick="toggleContent(this)">
          <div class="hover-line"><?= htmlspecialchars($article['title']) ?></div>
        </span>
      </div>
      <div class="content">
        <p>
          <span class="letter">
            <?= strtoupper(substr(htmlspecialchars($article['content']), 0, 1)) ?>
          </span>
          <?= substr(htmlspecialchars($article['content']), 1) ?>
        </p>
        <small><?= htmlspecialchars($article['created_at']) ?></small>
      </div>
    </div>
  <?php endforeach; ?>

</div>


<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>AOS.init();</script>
<script src="../js/scripts.js"></script>

<?php require '../includes/footer.php'; ?>
