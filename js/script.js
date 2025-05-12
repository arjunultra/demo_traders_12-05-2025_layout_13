// gsap used with swiper to create custom animations
document.addEventListener("DOMContentLoaded", () => {
  // Make sure GSAP and Swiper are loaded
  if (typeof gsap === 'undefined') {
    console.error('GSAP is not loaded. Please include the GSAP library.');
    return;
  }
  
  if (typeof Swiper === 'undefined') {
    console.error('Swiper is not loaded. Please include the Swiper library.');
    return;
  }
  
  // Initialize GSAP plugins
  gsap.registerPlugin(ScrollTrigger);
  
  // Initialize Swiper with custom animation handling
  const homeCarouselSwiper = new Swiper(".home-carousel-swiper", {
    loop: true,
    speed: 0, // Set to 0 to disable Swiper's built-in animation
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    allowTouchMove: true,
    on: {
      init: function() {
        // Make sure the first slide is visible
        const activeSlide = document.querySelector(".swiper-slide-active");
        if (activeSlide) {
          gsap.set(activeSlide, { autoAlpha: 1, scale: 1, rotationY: 0 });
        }
      },
      beforeTransition: function() {
        // This runs right before slide changes
        const slides = document.querySelectorAll(".swiper-slide");
        gsap.set(slides, { clearProps: "all" });
      },
      slideChangeTransitionStart: function() {
        // Get the active and previous slides
        const activeSlide = this.slides[this.activeIndex];
        const prevSlide = this.slides[this.previousIndex];
        
        // Stop any running animations
        gsap.killTweensOf([activeSlide, prevSlide]);
        
        // Animate out the previous slide
        if (prevSlide) {
          gsap.to(prevSlide, {
            autoAlpha: 0,
            scale: 0.6,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              gsap.set(prevSlide, { visibility: "hidden" });
            }
          });
        }
        
        // Animate in the active slide with flip effect
        gsap.fromTo(
          activeSlide,
          {
            autoAlpha: 0,
            scale: 0.8,
            rotationY: -90,
            visibility: "visible"
          },
          {
            autoAlpha: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.1
          }
        );
      }
    }
  });
  
  // Optional: Add debug logging to verify animation triggers
  homeCarouselSwiper.on('slideChangeTransitionStart', function() {
    console.log('Slide change started - GSAP animations should trigger');
  });
});
// GSAP Button
document.addEventListener("DOMContentLoaded", () => {
  // Select the button
  const button = document.querySelector(".custom-btn");
  
  // Create a ripple element inside the button
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  button.appendChild(ripple);

  // On load animation (Fly-in + Rotate + Fade-in)
  gsap.fromTo(button, 
      {
          x: -100,  // Start off-screen to the left
          opacity: 0,
          rotation: -180  // Start rotated
      },
      {
          duration: 1,
          x: 0,            // Move to its normal position
          opacity: 1,      // Fade in
          rotation: 0,     // Remove rotation
          ease: "back.out(1.7)" // Smooth bounce effect
      }
  );

  // Infinite Ripple Animation
  const rippleAnimation = gsap.timeline({ repeat: -1 });
  rippleAnimation.fromTo(
      ripple,
      {
          width: 0,
          height: 0,
          opacity: 0.5,
      },
      {
          width: 150,
          height: 150,
          opacity: 0,
          duration: 1.5,
          ease: "power1.inOut",
      }
  );

  // Hover Animation
  button.addEventListener("mouseenter", () => {
      // Scale and shadow animation
      gsap.to(button, {
          duration: 0.5,
          scale: 1.05,
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#4b0082", // Change color on hover
          ease: "power1.out"
      });
  });

  // Hover Out Animation
  button.addEventListener("mouseleave", () => {
      gsap.to(button, {
          duration: 0.5,
          scale: 1,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#8b0000", // Return to original color
          ease: "power2.out"
      });
  });
});
// footer GSAP 
document.addEventListener('DOMContentLoaded', function() {
  // Ensure GSAP and ScrollTrigger are loaded
  if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
      gsap.registerPlugin(ScrollTrigger);

      // Footer columns animation
      const footerColumns = gsap.utils.toArray('.fireworks-footer .col-md-6, .fireworks-footer .col-lg-4, .fireworks-footer .col-lg-3');
      
      footerColumns.forEach((column, index) => {
          gsap.fromTo(column, 
              { 
                  opacity: 0, 
                  y: 50,
                  scale: 0.9
              },
              {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: 'power2.out',
                  scrollTrigger: {
                      trigger: column,
                      start: 'top 80%',
                      toggleActions: 'play none none reverse'
                  }
              }
          );
      });

      // Bottom row animation
      gsap.fromTo('.fireworks-footer .border-top', 
          { 
              opacity: 0, 
              y: 30 
          },
          {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                  trigger: '.fireworks-footer .border-top',
                  start: 'top 90%',
                  toggleActions: 'play none none reverse'
              }
          }
      );

      // Hover effects for logo
      const footerLogo = document.querySelector('.fireworks-footer img');
      
      if (footerLogo) {
          footerLogo.addEventListener('mouseenter', () => {
              gsap.to(footerLogo, {
                  rotation: 360,
                  duration: 0.8,
                  ease: 'power2.out'
              });
          });

          footerLogo.addEventListener('mouseleave', () => {
              gsap.to(footerLogo, {
                  rotation: 0,
                  duration: 0.8,
                  ease: 'power2.out'
              });
          });
      }

      // Hover effects for links
      const footerLinks = gsap.utils.toArray('.fireworks-footer .footer-links a, .fireworks-footer .developer-link');
      
      footerLinks.forEach(link => {
          link.addEventListener('mouseenter', () => {
              gsap.to(link, {
                  color: 'var(--color2)',
                  scale: 1.05,
                  duration: 0.2
              });
          });

          link.addEventListener('mouseleave', () => {
              gsap.to(link, {
                  color: 'var(--color5)',
                  scale: 1,
                  duration: 0.2
              });
          });
      });
  }
});