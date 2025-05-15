<?php $page = "home"; ?>
<!DOCTYPE html>
<html lang="en">

<head itemscope itemtype="http://www.schema.org/website">
	<title></title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta property="og:title" content="">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="">
	<meta property="og:url" content="https://.com">
	<meta property="og:image" content="https://.com/images/android-icon-192x192.png">
	<meta name="keywords" content="">
	<meta property="og:description" name="description" content="">
	<meta name="robots" content="all">
	<meta name="revisit-after" content="10 Days">
	<meta name="copyright" content="">
	<meta name="language" content="English">
	<meta name="distribution" content="Global">
	<meta name="web_author" content="srisoftwarez.com">
	<meta name="msapplication-TileImage" content="images/ms-icon-144x144.png">
	<link rel="icon" type="image/png" sizes="96x96" href="images/favicon-96x96.png">
	<link rel="apple-touch-icon" sizes="72x72" href="images/apple-icon-72x72.png">
	<link rel="icon" sizes="192x192" href="images/android-icon-192x192.png">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/hover-min.css">
	<link rel="stylesheet" href="css/swiper.css">
	<link rel="stylesheet" href="css/odometer-theme.css">
	<link rel="stylesheet" href="css/style.css">
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
</head>

<body itemscope itemtype="http://schema.org/WebPage">
	<?php include_once "header.php"; ?>
	<!--index carousel -->
	<section class="home-carousel">
		<div class="swiper home-carousel-swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="images/index-slide-1.webp" class="img-fluid" alt="Fireworks Slide 1">
				</div>
				<div class="swiper-slide">
					<img src="images/index-slide-2.webp" class="img-fluid" alt="Fireworks Slide 2">
				</div>
			</div>
		</div>
	</section>
	<!-- index page first section -->
	<!-- Welcome Section -->
	<section class="welcome-section">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6 col-lg-6">
					<h1 class="welcome-heading">Welcome to Demo Traders</h1>
					<h2 class="welcome-subheading">Premium Fireworks for Every Celebration</h2>
					<p class="welcome-text">
						Discover our extensive collection of high-quality fireworks for retail and wholesale purchase.
						From colorful sparklers to grand finale displays, we have everything to make your
						celebrations memorable and spectacular.
					</p>
					<a href="products.php">
						<button class="welcome-cta">
							Shop Now
							<i class="bi bi-arrow-right welcome-cta-icon"></i>
						</button>
					</a>

					<div class="welcome-features">
						<div class="welcome-feature-item">
							<i class="bi bi-check-circle welcome-feature-icon"></i>
							<span class="welcome-feature-text">Premium Quality Products</span>
						</div>
						<div class="welcome-feature-item">
							<i class="bi bi-truck welcome-feature-icon"></i>
							<span class="welcome-feature-text">Fast Nationwide Delivery</span>
						</div>
						<div class="welcome-feature-item">
							<i class="bi bi-shield-check welcome-feature-icon"></i>
							<span class="welcome-feature-text">Safety Certified Products</span>
						</div>
					</div>
				</div>

				<div class="col-12 col-md-6 col-lg-6">
					<img src="images/hero-image.webp" alt="Colorful Fireworks Display" class="welcome-image">
				</div>
			</div>
		</div>
	</section>
	<!-- Index Achievements Section -->
	<section class="index-achievements">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<h2 class="index-achievements-heading">Our Fireworks Legacy</h2>
					<p class="index-achievements-subtext">Creating magical moments and lighting up celebrations across
						the nation with premium quality fireworks</p>
				</div>
			</div>

			<div class="row index-achievements-counters">
				<!-- Counter 1 -->
				<div class="col-12 col-md-6 col-lg-3">
					<div class="index-achievements-counter-box">
						<i class="bi bi-calendar-check index-achievements-icon"></i>
						<div class="index-achievements-count">
							<span class="index-achievements-number odometer" data-count="25">0</span>
							<span class="index-achievements-suffix">+</span>
						</div>
						<h3 class="index-achievements-title">Years Experience</h3>
					</div>
				</div>

				<!-- Counter 2 -->
				<div class="col-12 col-md-6 col-lg-3">
					<div class="index-achievements-counter-box">
						<i class="bi bi-box-seam index-achievements-icon"></i>
						<div class="index-achievements-count">
							<span class="index-achievements-number odometer" data-count="500">0</span>
							<span class="index-achievements-suffix">+</span>
						</div>
						<h3 class="index-achievements-title">Product Varieties</h3>
					</div>
				</div>

				<!-- Counter 3 -->
				<div class="col-12 col-md-6 col-lg-3">
					<div class="index-achievements-counter-box">
						<i class="bi bi-people-fill index-achievements-icon"></i>
						<div class="index-achievements-count">
							<span class="index-achievements-number odometer" data-count="15000">0</span>
							<span class="index-achievements-suffix">+</span>
						</div>
						<h3 class="index-achievements-title">Happy Customers</h3>
					</div>
				</div>

				<!-- Counter 4 -->
				<div class="col-12 col-md-6 col-lg-3">
					<div class="index-achievements-counter-box">
						<i class="bi bi-award index-achievements-icon"></i>
						<div class="index-achievements-count">
							<span class="index-achievements-number odometer" data-count="30">0</span>
							<span class="index-achievements-suffix">+</span>
						</div>
						<h3 class="index-achievements-title">Industry Awards</h3>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- index products swiper -->
	<section class="products-section py-5">
		<div class="container-fluid">
			<div class="row mb-4">
				<div class="col-12 text-center">
					<h2 class="products-section-title">Our Premium Fireworks</h2>
					<p class="products-section-subtitle">Discover our wide range of high-quality fireworks for all
						occasions</p>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<!-- Swiper -->
					<div class="products-swiper-container">
						<div class="swiper-wrapper">
							<!-- Slide 1: Bombs -->
							<div class="swiper-slide products-swiper-slide">
								<div class="products-card">
									<div class="products-card-image-container">
										<img src="images/product-1.webp" alt="Firework Bombs"
											class="products-card-image img-fluid">
									</div>
									<div class="products-card-content">
										<h3 class="products-card-title">Bombs</h3>
										<p class="products-card-description">Experience the thrill of our premium
											explosive bombs with vibrant colors and thunderous sound effects.</p>
										<a href="products.php"><button class="products-card-button">Buy Now</button></a>
									</div>
								</div>
							</div>

							<!-- Slide 2: Ground Chakkars -->
							<div class="swiper-slide products-swiper-slide">
								<div class="products-card">
									<div class="products-card-image-container">
										<img src="images/product-2.webp" alt="Ground Chakkars"
											class="products-card-image img-fluid">
									</div>
									<div class="products-card-content">
										<h3 class="products-card-title">Ground Chakkars</h3>
										<p class="products-card-description">Mesmerizing spinning wheels that create
											beautiful circular patterns of sparks and colors on the ground.</p>
										<button class="products-card-button">Buy Now</button>
									</div>
								</div>
							</div>

							<!-- Slide 3: Flowerpots -->
							<div class="swiper-slide products-swiper-slide">
								<div class="products-card">
									<div class="products-card-image-container">
										<img src="images/product-3.webp" alt="Flowerpots"
											class="img-fluid products-card-image">
									</div>
									<div class="products-card-content">
										<h3 class="products-card-title">Flowerpots</h3>
										<p class="products-card-description">Spectacular fountains that emit colorful
											showers of sparks resembling blooming flowers in the night sky.</p>
										<button class="products-card-button">Buy Now</button>
									</div>
								</div>
							</div>

							<!-- Slide 4: Sparklers -->
							<div class="swiper-slide products-swiper-slide">
								<div class="products-card">
									<div class="products-card-image-container">
										<img src="images/product-4.webp" alt="Sparklers"
											class="products-card-image img-fluid">
									</div>
									<div class="products-card-content">
										<h3 class="products-card-title">Sparklers</h3>
										<p class="products-card-description">Hand-held fireworks that emit bright
											sparkles and colorful flames, perfect for all ages and celebrations.</p>
										<button class="products-card-button">Buy Now</button>
									</div>
								</div>
							</div>

							<!-- Slide 5: Rockets -->
							<div class="swiper-slide products-swiper-slide">
								<div class="products-card">
									<div class="products-card-image-container">
										<img src="images/product-5.webp" alt="Rockets"
											class="products-card-image img-fluid">
									</div>
									<div class="products-card-content">
										<h3 class="products-card-title">Rockets</h3>
										<p class="products-card-description">High-flying fireworks that soar into the
											sky before exploding into breathtaking aerial displays.</p>
										<button class="products-card-button">Buy Now</button>
									</div>
								</div>
							</div>

							<!-- Slide 6: Kids Crackers -->
							<div class="swiper-slide products-swiper-slide">
								<div class="products-card">
									<div class="products-card-image-container">
										<img src="images/product-6.webp" alt="Kids Crackers"
											class="products-card-image img-fluid">
									</div>
									<div class="products-card-content">
										<h3 class="products-card-title">Kids Crackers</h3>
										<p class="products-card-description">Safe and fun fireworks specially designed
											for children to enjoy festivities with minimal supervision.</p>
										<button class="products-card-button">Buy Now</button>
									</div>
								</div>
							</div>
						</div>

						<!-- Add Navigation -->
						<div class="products-swiper-button-next swiper-button-next"></div>
						<div class="products-swiper-button-prev swiper-button-prev"></div>

						<!-- Add Pagination -->
						<div class="products-swiper-pagination swiper-pagination"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Index GSAP parallax -->
	<section class="fireworks-parallax">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<h2 class="fireworks-parallax-heading">Lighting Up Celebrations Nationwide</h2>
					<p class="fireworks-parallax-subtext">Experience the magic of premium fireworks with every
						celebration.</p>
					<a class="rounded-lg btn btn-lg btn-outline-danger text-uppercase mt-5" href="contact.php">Contact
						Us</a>
				</div>
			</div>
		</div>
	</section>
	<!-- index brands  -->
	<section class="brands-section py-5">
		<div class="container">
			<div class="row mb-4">
				<div class="col-12">
					<h2 class="brands-section-title text-center">Our Featured Brands</h2>
					<p class="brands-section-subtitle text-center">Discover premium fireworks from top manufacturers
						around the world</p>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<div class="brands-swiper-container swiper">
						<div class="swiper-wrapper">
							<!-- Brand Slide 1 -->
							<div class="swiper-slide brands-swiper-slide">
								<div class="brands-card">
									<div class="brands-image-container">
										<img src="images/brand1.webp" alt="Black Cat Fireworks"
											class="brands-image img-fluid">
									</div>
									<h3 class="brands-name">Brand1</h3>
								</div>
							</div>

							<!-- Brand Slide 2 -->
							<div class="swiper-slide brands-swiper-slide">
								<div class="brands-card">
									<div class="brands-image-container">
										<img src="images/brand2.webp" alt="Phantom Fireworks"
											class="brands-image img-fluid">
									</div>
									<h3 class="brands-name">Brand2</h3>
								</div>
							</div>

							<!-- Brand Slide 3 -->
							<div class="swiper-slide brands-swiper-slide">
								<div class="brands-card">
									<div class="brands-image-container">
										<img src="images/brand3.webp" alt="TNT Fireworks"
											class="brands-image img-fluid">
									</div>
									<h3 class="brands-name">Brand3</h3>
								</div>
							</div>

							<!-- Brand Slide 4 -->
							<div class="swiper-slide brands-swiper-slide">
								<div class="brands-card">
									<div class="brands-image-container">
										<img src="images/brand4.webp" alt="Brothers Pyrotechnics"
											class="brands-image img-fluid">
									</div>
									<h3 class="brands-name">Brand4</h3>
								</div>
							</div>

							<!-- Brand Slide 5 -->
							<div class="swiper-slide brands-swiper-slide">
								<div class="brands-card">
									<div class="brands-image-container">
										<img src="images/brand5.webp" alt="Winda Fireworks"
											class="brands-image img-fluid">
									</div>
									<h3 class="brands-name">Brand5</h3>
								</div>
							</div>

							<!-- Brand Slide 6 -->
							<div class="swiper-slide brands-swiper-slide">
								<div class="brands-card">
									<div class="brands-image-container">
										<img src="images/brand6.webp" alt="Shogun Fireworks"
											class="brands-image img-fluid">
									</div>
									<h3 class="brands-name">Brand6</h3>
								</div>
							</div>

							<!-- Brand Slide 7 -->
							<div class="swiper-slide brands-swiper-slide">
								<div class="brands-card">
									<div class="brands-image-container">
										<img src="images/brand7.webp" alt="Pyro King Fireworks"
											class="brands-image img-fluid">
									</div>
									<h3 class="brands-name">Brand7</h3>
								</div>
							</div>

							<!-- Brand Slide 8 -->
							<div class="swiper-slide brands-swiper-slide">
								<div class="brands-card">
									<div class="brands-image-container">
										<img src="images/brand8.webp" alt="Golden Dragon Fireworks"
											class="brands-image img-fluid">
									</div>
									<h3 class="brands-name">Brand8</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<?php include_once "footer.php"; ?>
	<div class="fixed point w0">
		<a href="https://api.whatsapp.com/send?phone=919999999999">
			<img src="images/whatsappicon.png" class="priceicn float-left" alt="whatsapp contact" title="demo traders">
		</a>
	</div>
	<div class="fixed point1 w0 d-none d-lg-block">
		<span class="time-of-year">
			<img src="images/callicon.png" class="priceicn float-left" alt="phone contact" title="Demo Traders">
			<div class="tooltip text-white carter text-center"> For More Details Call <br>
				<i class="fa fa-phone text-white"></i> +91 99999 99999
			</div>
		</span>
	</div>
	<div class="fixed point1 w0 d-lg-none">
		<a href="tel:+919999999999">
			<img src="images/callicon.png" class="priceicn float-left" alt="" title="Demo Traders">
		</a>
	</div>
	<div class="fixed point2">
		<a href="products.php">
			<img src="images/quickpurchase.png" class="priceicn2 float-right blink" alt="" title="">
		</a>
	</div>
	<script src="js/odometer.min.js"></script>
	<script src="js/swiper-bundle.min.js"></script>
	<script src="js/simpleParallax.js"></script>
	<script src="js/gsap.min.js"></script>
	<script src="js/SplitText.min.js"></script>
	<script src="js/ScrollTrigger.min.js"></script>
	<script src="js/script.js"></script>
</body>

</html>