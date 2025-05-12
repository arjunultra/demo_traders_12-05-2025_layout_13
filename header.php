<!-- Marquee Topbar -->
<div id="headerTop" class="para-font sparkle-header-topbar py-2 text-center marquee-left">
    <i class="bi bi-stars text-warning"></i>Diwali sale is open now. Buy early for the best discounts! Happy
    Diwali...!!!!
    &nbsp; <i class="bi bi-whatsapp text-success"></i> +91 9999999999
    &nbsp; <i class="bi bi-telephone text-primary"></i> +91 8888888888, +91 7777777777
</div>

<!-- Main Header -->
<header>
    <!-- Contact Bar Section -->
    <section class="section-contact-bar text-white py-2">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-4 contact-info d-flex align-items-center explosive-clip">
                    <i class="bi bi-geo-alt-fill mr-2"></i>
                    <span class="contact-text">123, Demo Complex, Sivakasi - 626123</span>
                </div>
                <div class="col-12 col-md-4 col-lg-4 contact-info d-flex align-items-center explosive-clip">
                    <i class="bi bi-telephone-fill mr-2"></i>
                    <span class="contact-text">+91 88888 88888</span>
                </div>
                <div class="col-12 col-md-4 col-lg-4 contact-info d-flex align-items-center explosive-clip">
                    <i class="bi bi-envelope-fill mr-2"></i>
                    <span class="contact-text">info@demotraders.com</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Navigation Section -->
    <section class="section-main-nav position-relative">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="logo-container">
                    <div class="logo-background">
                        <img src="images/logo.webp" alt="Sparkle Fireworks Logo" class="logo-img">
                    </div>
                </div>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain"
                    aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-list"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarMain">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item px-2 hvr-bounce-to-top">
                            <a class="nav-link <?php if ($page == 'home')
                                echo 'active'; ?>" href="index.php">Home</a>
                        </li>
                        <li class="nav-item px-2 hvr-bounce-to-top">
                            <a class="nav-link <?php if ($page == 'about')
                                echo 'active'; ?>" href="about.php">About
                                Us</a>
                        </li>
                        <li class="nav-item px-2 hvr-bounce-to-top">
                            <a class="nav-link <?php if ($page == 'products')
                                echo 'active'; ?>" href="products.php">Products</a>
                        </li>
                        <li class="nav-item px-2 hvr-bounce-to-top">
                            <a class="nav-link <?php if ($page == 'safetytips')
                                echo 'active'; ?>" href="safetytips.php">Safety Tips</a>
                        </li>
                        <li class="nav-item px-2 hvr-bounce-to-top">
                            <a class="nav-link <?php if ($page == 'contact')
                                echo 'active'; ?>" href="contact.php">Contact Us</a>
                        </li>
                    </ul>

                    <div class="download-btn">
                        <a href="pricelist.pdf" class="custom-btn text-white">Download Price List</a>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</header>





<script src="js/marquee.js"></script>
<script>
    $('.marquee-left').marquee({
        duration: 16000,
        gap: 150,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: false,
        pauseOnHover: true
    });
</script>