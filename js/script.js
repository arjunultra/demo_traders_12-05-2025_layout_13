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
// safety tips gsap code
document.addEventListener('DOMContentLoaded', function () {
  if (typeof gsap !== 'undefined' && typeof SplitText !== 'undefined') {
    // Register the SplitText plugin
    gsap.registerPlugin(SplitText);

    // Select all safety guideline cards
    const safetyCards = document.querySelectorAll('.safety-guidelines-card');
    let activeCard = null;

    // Loop through each card and initialize animations
    safetyCards.forEach(function (card) {
      const cardInner = card.querySelector('.safety-guidelines-card-inner');
      const frontTitle = card.querySelector('.safety-guidelines-card-title');
      const backText = card.querySelector('.safety-guidelines-card-text');

      // Create SplitText instances
      const frontTitleSplit = new SplitText(frontTitle, {
        type: "chars,words",
        position: "relative"
      });

      const backTextSplit = new SplitText(backText, {
        type: "words",
        position: "relative"
      });

      // Set initial states
      gsap.set(cardInner, {
        transformPerspective: 1000,
        rotateY: 0,
        transformStyle: "preserve-3d"
      });

      gsap.set(frontTitleSplit.chars, {
        opacity: 1,
        y: 0,
        transformOrigin: "center center"
      });

      gsap.set(backTextSplit.words, {
        opacity: 0,
        x: -10,
        transformOrigin: "left center"
      });

      // Hover In Animation
      const hoverInTimeline = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.inOut" }
      });

      hoverInTimeline
        .to(frontTitleSplit.chars, {
          opacity: 0,
          y: -15,
          duration: 0.4,
          stagger: {
            amount: 0.2,
            from: "random",
            ease: "power2.out"
          }
        }, 0)
        .to(cardInner, {
          rotateY: 180,
          duration: 0.8,
          ease: "power2.inOut"
        }, 0.1)
        .to(backTextSplit.words, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: {
            amount: 0.3,
            ease: "back.out(1.2)"
          }
        }, 0.4);

      // Hover Out Animation
      const hoverOutTimeline = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.inOut" }
      });

      hoverOutTimeline
        .to(backTextSplit.words, {
          opacity: 0,
          x: -10,
          duration: 0.4,
          stagger: {
            amount: 0.15,
            from: "end",
            ease: "power1.in"
          }
        }, 0)
        .to(cardInner, {
          rotateY: 0,
          duration: 0.8,
          ease: "power3.inOut"
        }, 0.1)
        .to(frontTitleSplit.chars, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: {
            amount: 0.25,
            from: "random",
            ease: "elastic.out(0.8, 0.6)"
          }
        }, 0.35);

      // Animation Control Logic
      card.addEventListener('mouseenter', function () {
        if (activeCard && activeCard !== card) {
          // If another card is active, reset it
          const previousInner = activeCard.querySelector('.safety-guidelines-card-inner');
          const previousBackText = activeCard.querySelector('.safety-guidelines-card-text');
          const previousTitle = activeCard.querySelector('.safety-guidelines-card-title');

          const previousTitleSplit = new SplitText(previousTitle, { type: "chars" });
          const previousBackTextSplit = new SplitText(previousBackText, { type: "words" });

          gsap.to(previousBackTextSplit.words, {
            opacity: 0,
            x: -10,
            duration: 0.4,
            stagger: 0.05
          });

          gsap.to(previousInner, {
            rotateY: 0,
            duration: 0.8,
            ease: "power3.inOut"
          });

          gsap.to(previousTitleSplit.chars, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05
          });

          activeCard = null;
        }

        hoverInTimeline.restart();
        activeCard = card;
      });

      card.addEventListener('mouseleave', function () {
        hoverOutTimeline.restart();
        activeCard = null;
      });
    });
  } else {
    console.warn('GSAP or SplitText plugin not loaded');
  }
});
// contact page gsap
// GSAP Animation for Fireworks Contact Section
document.addEventListener("DOMContentLoaded", function() {
  // Register SplitText plugin
  gsap.registerPlugin(ScrollTrigger, SplitText);
  
  // Header animations
  gsap.to(".fireworks-contact-badge", {
    scrollTrigger: {
      trigger: ".fireworks-contact-header",
      start: "top 80%",
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "back.out(1.7)"
  });
  
  gsap.to(".fireworks-contact-title", {
    scrollTrigger: {
      trigger: ".fireworks-contact-header",
      start: "top 80%",
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    delay: 0.2,
    ease: "back.out(1.2)"
  });
  
  gsap.to(".fireworks-contact-subtitle", {
    scrollTrigger: {
      trigger: ".fireworks-contact-header",
      start: "top 80%",
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    delay: 0.4,
    ease: "back.out(1.2)"
  });
  
  // Map animation
  gsap.to(".fireworks-contact-map-wrapper", {
    scrollTrigger: {
      trigger: ".fireworks-contact-map-wrapper",
      start: "top 85%",
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  });
  
  // Contact card animations with staggered effect
  const cards = document.querySelectorAll(".fireworks-contact-card");
  
  cards.forEach((card, index) => {
    // Card icon animation
    gsap.to(card.querySelector(".fireworks-contact-card-icon"), {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
      opacity: 1,
      scale: 1,
      duration: 0.6,
      delay: 0.1 * index,
      ease: "back.out(1.7)"
    });
    
    // Card title animation with split text
    const titleElement = card.querySelector(".fireworks-contact-card-title");
    if (titleElement) {
      const titleSplit = new SplitText(titleElement, { type: "chars" });
      gsap.from(titleSplit.chars, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        opacity: 0,
        x: -20,
        stagger: 0.03,
        duration: 0.6,
        delay: 0.2 + (0.1 * index),
        ease: "power3.out",
        onComplete: function() {
          titleElement.style.opacity = 1;
          titleElement.style.transform = "translateX(0)";
        }
      });
    }
    
    // Phone list animation
    const phoneList = card.querySelector(".fireworks-contact-phone-list");
    if (phoneList) {
      gsap.to(phoneList, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.4 + (0.1 * index),
        ease: "power3.out"
      });
    }
    
    // Email list animation
    const emailList = card.querySelector(".fireworks-contact-email-list");
    if (emailList) {
      gsap.to(emailList, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.4 + (0.1 * index),
        ease: "power3.out"
      });
    }
    
    // Hours list animation
    const hoursList = card.querySelector(".fireworks-contact-hours-list");
    if (hoursList) {
      gsap.to(hoursList, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.4 + (0.1 * index),
        ease: "power3.out"
      });
    }
    
    // Text content animation
    const cardText = card.querySelector(".fireworks-contact-card-text");
    if (cardText) {
      gsap.to(cardText, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.5 + (0.1 * index),
        ease: "power3.out"
      });
    }
    
    // Response note animation
    const responseNote = card.querySelector(".fireworks-contact-response-note");
    if (responseNote) {
      gsap.to(responseNote, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.6 + (0.1 * index),
        ease: "power3.out"
      });
    }
    
    // Festive note animation
    const festiveNote = card.querySelector(".fireworks-contact-festive-note");
    if (festiveNote) {
      gsap.to(festiveNote, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.6 + (0.1 * index),
        ease: "power3.out"
      });
    }
  });
  
  // Add hover animations
  cards.forEach(card => {
    card.addEventListener("mouseenter", function() {
      const titleElement = this.querySelector(".fireworks-contact-card-title");
      if (titleElement) {
        const titleHoverSplit = new SplitText(titleElement, { type: "chars" });
        gsap.to(titleHoverSplit.chars, {
          y: -5,
          stagger: 0.02,
          duration: 0.4,
          ease: "power2.out",
          onComplete: function() {
            gsap.to(titleHoverSplit.chars, {
              y: 0,
              stagger: 0.02,
              duration: 0.4,
              ease: "power2.out"
            });
          }
        });
      }
    });
  });
  
  // Create sparkle effect for highlight
  const highlight = document.querySelector(".fireworks-contact-highlight");
  if (highlight) {
    gsap.to(highlight, {
      scrollTrigger: {
        trigger: ".fireworks-contact-title",
        start: "top 80%",
      },
      onComplete: function() {
        highlight.addEventListener("mouseenter", function() {
          for (let i = 0; i < 5; i++) {
            createSparkle(highlight);
          }
        });
      }
    });
  }
  
  function createSparkle(element) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.position = "absolute";
    sparkle.style.width = "5px";
    sparkle.style.height = "5px";
    sparkle.style.borderRadius = "50%";
    sparkle.style.backgroundColor = "white";
    sparkle.style.boxShadow = "0 0 10px 2px gold";
    sparkle.style.pointerEvents = "none";
    
    // Random position within the element
    const x = Math.random() * element.offsetWidth;
    const y = Math.random() * element.offsetHeight;
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";
    
    element.appendChild(sparkle);
    
    // Animate and remove
    gsap.to(sparkle, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      onComplete: function() {
        if (sparkle.parentNode === element) {
          element.removeChild(sparkle);
        }
      }
    });
  }
});

