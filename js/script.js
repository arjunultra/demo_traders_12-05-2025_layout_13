// gsap used with swiper to create custom animations
document.addEventListener("DOMContentLoaded", () => {
  // Make sure GSAP and Swiper are loaded
  if (typeof gsap === "undefined") {
    console.error("GSAP is not loaded. Please include the GSAP library.");
    return;
  }

  if (typeof Swiper === "undefined") {
    console.error("Swiper is not loaded. Please include the Swiper library.");
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
      init: function () {
        // Make sure the first slide is visible
        const activeSlide = document.querySelector(".swiper-slide-active");
        if (activeSlide) {
          gsap.set(activeSlide, { autoAlpha: 1, scale: 1, rotationY: 0 });
        }
      },
      beforeTransition: function () {
        // This runs right before slide changes
        const slides = document.querySelectorAll(".swiper-slide");
        gsap.set(slides, { clearProps: "all" });
      },
      slideChangeTransitionStart: function () {
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
            },
          });
        }

        // Animate in the active slide with flip effect
        gsap.fromTo(
          activeSlide,
          {
            autoAlpha: 0,
            scale: 0.8,
            rotationY: -90,
            visibility: "visible",
          },
          {
            autoAlpha: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.1,
          }
        );
      },
    },
  });

  // Optional: Add debug logging to verify animation triggers
  homeCarouselSwiper.on("slideChangeTransitionStart", function () {
    console.log("Slide change started - GSAP animations should trigger");
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
  gsap.fromTo(
    button,
    {
      x: -100, // Start off-screen to the left
      opacity: 0,
      rotation: -180, // Start rotated
    },
    {
      duration: 1,
      x: 0, // Move to its normal position
      opacity: 1, // Fade in
      rotation: 0, // Remove rotation
      ease: "back.out(1.7)", // Smooth bounce effect
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
      ease: "power1.out",
    });
  });

  // Hover Out Animation
  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      duration: 0.5,
      scale: 1,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#8b0000", // Return to original color
      ease: "power2.out",
    });
  });
});
// footer GSAP
document.addEventListener("DOMContentLoaded", function () {
  // Ensure GSAP and ScrollTrigger are loaded
  if (typeof gsap !== "undefined" && gsap.registerPlugin) {
    gsap.registerPlugin(ScrollTrigger);

    // Footer columns animation
    const footerColumns = gsap.utils.toArray(
      ".fireworks-footer .col-md-6, .fireworks-footer .col-lg-4, .fireworks-footer .col-lg-3"
    );

    footerColumns.forEach((column, index) => {
      gsap.fromTo(
        column,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: column,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Bottom row animation
    gsap.fromTo(
      ".fireworks-footer .border-top",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fireworks-footer .border-top",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Hover effects for logo
    const footerLogo = document.querySelector(".fireworks-footer img");

if (footerLogo) {
  footerLogo.addEventListener("mouseenter", () => {
    if (!gsap.isTweening(footerLogo)) {
      gsap.to(footerLogo, {
        rotation: 360,
        duration: 2,
        ease: "power2.out",
      });
    }
  });

  footerLogo.addEventListener("mouseleave", () => {
    if (!gsap.isTweening(footerLogo)) {
      gsap.to(footerLogo, {
        rotation: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  });
}
    // Hover effects for links
    const footerLinks = gsap.utils.toArray(
      ".fireworks-footer .footer-links a, .fireworks-footer .developer-link"
    );

    footerLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          color: "var(--color2)",
          scale: 1.05,
          duration: 0.2,
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          color: "var(--color5)",
          scale: 1,
          duration: 0.2,
        });
      });
    });
  }
});
// safety page gsap
document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap !== "undefined" && typeof SplitText !== "undefined") {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    // === Header Animation ===
    const header = document.querySelector(".safety-guidelines-header");
    if (header) {
      const headerTitle = new SplitText(
        header.querySelector(".section-title"),
        { type: "words,chars" }
      );
      const headerSubtitle = new SplitText(
        header.querySelector(".section-subtitle"),
        { type: "words" }
      );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
          },
        })
        .from(headerTitle.chars, {
          opacity: 0,
          y: 50,
          stagger: 0.02,
          duration: 0.6,
          ease: "back.out(1.7)",
        })
        .from(
          header.querySelector(".safety-guidelines-divider"),
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.4"
        )
        .from(
          headerSubtitle.words,
          {
            opacity: 0,
            y: 20,
            stagger: 0.03,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }

    // === Column Animations with ScrollTrigger Batching ===
    gsap.utils.toArray(".safety-guidelines-column").forEach((column, index) => {
      gsap.from(column, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: column,
          start: "top 85%",
          toggleActions: "play none none none",
          batch: true,
        },
      });
    });

    // === Cards Animation with Flip Logic (Opacity for Front) ===
    const cardState = new WeakMap();
    const allCards = gsap.utils.toArray(".safety-guidelines-card");
    let currentlyActiveCard = null;

    allCards.forEach((card) => {
      const cardInner = card.querySelector(".safety-guidelines-card-inner");
      const cardFront = card.querySelector(".safety-guidelines-card-front");
      const frontTitle = new SplitText(
        card.querySelector(".safety-guidelines-card-title"),
        { type: "chars" }
      );
      const backText = new SplitText(
        card.querySelector(".safety-guidelines-card-text"),
        { type: "words" }
      );

      cardState.set(card, { isFlipped: false, animation: null });

      function flipCard(direction) {
        const state = cardState.get(card);
        if (state.animation) state.animation.kill();

        const tl = gsap.timeline();

        if (direction === "toBack") {
          tl.to(frontTitle.chars, {
            opacity: 0,
            y: -10,
            stagger: 0.02,
            duration: 0.2,
          })
            .set(frontTitle.chars, { clearProps: "opacity,y" })
            .to(cardInner, {
              rotateY: 180,
              duration: 0.6,
              ease: "power3.inOut",
            })
            .to(
              cardFront,
              {
                opacity: 0,
                duration: 0.2,
                delay: 0.4, // Ensure rotation is mostly done
              },
              "<"
            )
            .fromTo(
              backText.words,
              {
                opacity: 0,
                x: -10,
              },
              {
                opacity: 1,
                x: 0,
                stagger: 0.03,
                duration: 0.4,
              },
              "<0.2"
            );
        } else {
          tl.to(backText.words, {
            opacity: 0,
            x: 10,
            stagger: 0.02,
            duration: 0.2,
          })
            .set(backText.words, { clearProps: "opacity,x" })
            .to(cardInner, {
              rotateY: 0,
              duration: 0.6,
              ease: "power3.inOut",
            })
            .to(
              cardFront,
              {
                opacity: 1,
                duration: 0.2,
                delay: 0.4, // Ensure rotation is mostly done
              },
              "<"
            )
            .fromTo(
              frontTitle.chars,
              {
                opacity: 0,
                y: 15,
              },
              {
                opacity: 1,
                y: 0,
                stagger: 0.02,
                duration: 0.4,
              },
              "<0.2"
            );
        }
        cardState.set(card, {
          isFlipped: direction === "toBack",
          animation: tl,
        });
      }

      card.addEventListener("mouseenter", () => {
        if (currentlyActiveCard && currentlyActiveCard !== card) {
          const previousState = cardState.get(currentlyActiveCard);
          if (previousState.isFlipped) {
            flipCard.call(currentlyActiveCard, "toFront");
          }
        }
        if (!cardState.get(card).isFlipped) {
          flipCard("toBack");
          currentlyActiveCard = card;
        }
      });

      card.addEventListener("mouseleave", () => {
        if (cardState.get(card).isFlipped && currentlyActiveCard === card) {
          flipCard("toFront");
          currentlyActiveCard = null;
        }
      });

      card.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          if (currentlyActiveCard && currentlyActiveCard !== card) {
            const previousState = cardState.get(currentlyActiveCard);
            if (previousState.isFlipped) {
              flipCard.call(currentlyActiveCard, "toFront");
            }
          }

          const state = cardState.get(card);
          if (state.isFlipped) {
            flipCard("toFront");
            currentlyActiveCard = null;
          } else {
            flipCard("toBack");
            currentlyActiveCard = card;
          }
        },
        { passive: false }
      );
    });

    // === CTA Animation ===
    const cta = document.querySelector(".safety-guidelines-cta");
    if (cta) {
      gsap.from(cta, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cta,
          start: "top 90%",
        },
      });
    }
  } else {
    console.warn("GSAP or SplitText plugin not loaded");
  }
});

// contact page gsap
// GSAP Animation for Fireworks Contact Section
document.addEventListener("DOMContentLoaded", function () {
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
    ease: "back.out(1.7)",
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
    ease: "back.out(1.2)",
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
    ease: "back.out(1.2)",
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
    ease: "power3.out",
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
      ease: "back.out(1.7)",
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
        delay: 0.2 + 0.1 * index,
        ease: "power3.out",
        onComplete: function () {
          titleElement.style.opacity = 1;
          titleElement.style.transform = "translateX(0)";
        },
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
        delay: 0.4 + 0.1 * index,
        ease: "power3.out",
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
        delay: 0.4 + 0.1 * index,
        ease: "power3.out",
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
        delay: 0.4 + 0.1 * index,
        ease: "power3.out",
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
        delay: 0.5 + 0.1 * index,
        ease: "power3.out",
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
        delay: 0.6 + 0.1 * index,
        ease: "power3.out",
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
        delay: 0.6 + 0.1 * index,
        ease: "power3.out",
      });
    }
  });

  // Add hover animations
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const titleElement = this.querySelector(".fireworks-contact-card-title");
      if (titleElement) {
        const titleHoverSplit = new SplitText(titleElement, { type: "chars" });
        gsap.to(titleHoverSplit.chars, {
          y: -5,
          stagger: 0.02,
          duration: 0.4,
          ease: "power2.out",
          onComplete: function () {
            gsap.to(titleHoverSplit.chars, {
              y: 0,
              stagger: 0.02,
              duration: 0.4,
              ease: "power2.out",
            });
          },
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
      onComplete: function () {
        highlight.addEventListener("mouseenter", function () {
          for (let i = 0; i < 5; i++) {
            createSparkle(highlight);
          }
        });
      },
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
      onComplete: function () {
        if (sparkle.parentNode === element) {
          element.removeChild(sparkle);
        }
      },
    });
  }
});

// index achievements counter
document.addEventListener("DOMContentLoaded", () => {
  // Only execute if the .index-achievements section is found
  const achievementsSection = document.querySelector(".index-achievements");
  if (!achievementsSection) {
    return;
  }

  function handleCounterAnimation() {
    const counters = document.querySelectorAll(".index-achievements .odometer");

    if (!gsap || !ScrollTrigger) {
      console.error("GSAP or ScrollTrigger not found. Ensure they are included via CDN.");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const animateCounters = () => {
      if (!achievementsSection.classList.contains("counted")) {
        counters.forEach((counter) => {
          const finalValue = counter.getAttribute("data-count");
          counter.innerText = finalValue;
        });
        achievementsSection.classList.add("counted");
      }
    };

    ScrollTrigger.create({
      trigger: achievementsSection,
      start: "top 80%", // Adjust start position as needed
      end: "bottom 20%", // Adjust end position as needed
      once: true, // Only trigger once
      // markers: true,
      onEnter: animateCounters,
    });

    // Hover effect
    const counterItems = document.querySelectorAll(".index-achievements-counter-box");
    counterItems.forEach((item) => {
      const icon = item.querySelector(".index-achievements-icon");
      item.addEventListener("mouseenter", () => icon.classList.add("icon-hover"));
      item.addEventListener("mouseleave", () => icon.classList.remove("icon-hover"));
    });
  }

  // Initialize the animation if the section is found
  handleCounterAnimation();
});

// products swiper init
gsap.registerPlugin(SplitText);

let activeSplitTexts = new Map(); // Store SplitText instances for active slides

document.addEventListener('DOMContentLoaded', function () {
    const productsSwiper = new Swiper('.products-swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.products-swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-swiper-button-next',
            prevEl: '.products-swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 35
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 42
            }
        },
        on: {
            init: function () {
                initProductsAnimations(this);
                highlightActiveSlides(this); // Renamed to plural
            },
            slideChangeTransitionEnd: function () {
                highlightActiveSlides(this); // Renamed to plural
            }
        }
    });

    function initProductsAnimations(swiperInstance) {
        const slides = swiperInstance.slides;

        slides.forEach(slide => {
            const card = slide.querySelector('.products-card');
            const image = slide.querySelector('.products-card-image');

            // Subtle floating animation for all cards
            gsap.to(card, {
                y: -5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                overwrite: true
            });

            // Subtle zoom animation for all images
            gsap.to(image, {
                scale: 1.03,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                overwrite: true
            });
        });
    }

    function highlightActiveSlides(swiperInstance) {
        const activeSlides = swiperInstance.slides.filter(slide => slide.classList.contains('swiper-slide-active') || swiperInstance.params.slidesPerView > 1 && slide.classList.contains('swiper-slide-visible'));

        // Reset styles for all slides
        gsap.to('.products-swiper-slide .products-card', {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderColor: "transparent",
            borderWidth: 0,
            filter: "none",
            duration: 0.3,
            overwrite: true
        });
        gsap.to('.products-swiper-slide .products-card-title', {
            color: "var(--color1)",
            fontWeight: 600,
            y: 0,
            opacity: 1,
            duration: 0.3,
            overwrite: true
        });
        gsap.to('.products-swiper-slide .products-card-description', {
            opacity: 1,
            y: 0,
            duration: 0.3,
            overwrite: true
        });
        gsap.to('.products-swiper-slide .products-card-button', {
            opacity: 1,
            y: 0,
            duration: 0.3,
            overwrite: true
        });

        activeSlides.forEach(slide => {
            const card = slide.querySelector('.products-card');
            const title = slide.querySelector('.products-card-title');
            const description = slide.querySelector('.products-card-description');
            const button = slide.querySelector('.products-card-button');

            // Apply active styling
            gsap.to(card, {
                boxShadow: "0 15px 30px rgba(139, 0, 0, 0.25)",
                borderColor: "rgba(139, 0, 0, 0.15)",
                borderWidth: 1,
                borderStyle: "solid",
                filter: "drop-shadow(0 0 8px rgba(139, 0, 0, 0.3))",
                duration: 0.4,
                ease: "power2.out",
                overwrite: true
            });

            // Animate in text and button using SplitText (if not already animated)
            if (title && !activeSplitTexts.has(title)) {
                const splitTitle = new SplitText(title, { type: "words,chars" });
                gsap.from(splitTitle.chars, {
                    opacity: 0,
                    y: 20,
                    stagger: 0.09,
                    duration: 0.6,
                    ease: "power3.out",
                    overwrite: true,
                    onComplete: () => activeSplitTexts.set(title, splitTitle) // Store SplitText instance
                });
            } else if (title && activeSplitTexts.has(title)) {
                // Ensure it's visible if it was previously animated out
                gsap.to(title, { opacity: 1, y: 0, duration: 0.3, overwrite: true });
            }

            gsap.fromTo(description, { opacity: 0, y: 15 }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.2,
                ease: "power2.out",
                overwrite: true
            });

            gsap.fromTo(button, { opacity: 0, y: 10 }, {
                opacity: 1,
                y: 0,
                duration: 0.4,
                delay: 0.3,
                ease: "power2.out",
                overwrite: true
            });
        });

        // Animate out the content of the slides that are no longer active/visible
        swiperInstance.slides.forEach(slide => {
            if (!activeSlides.includes(slide)) {
                const card = slide.querySelector('.products-card');
                const title = slide.querySelector('.products-card-title');
                const description = slide.querySelector('.products-card-description');
                const button = slide.querySelector('.products-card-button');

                gsap.to(card, {
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    borderColor: "transparent",
                    borderWidth: 0,
                    filter: "none",
                    duration: 0.3,
                    overwrite: true
                });
                gsap.to(title, { opacity: 0.6, y: -10, duration: 0.3, overwrite: true });
                gsap.to(description, { opacity: 0.6, y: -5, duration: 0.3, overwrite: true });
                gsap.to(button, { opacity: 0.6, y: -5, duration: 0.3, overwrite: true });

                // Revert SplitText if it was active on this title
                if (title && activeSplitTexts.has(title)) {
                    activeSplitTexts.get(title).revert();
                    activeSplitTexts.delete(title);
                }
            }
        });
    }
});
// parallax GSAP animation
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded event fired.');

  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);
  console.log('GSAP and ScrollTrigger registered successfully.');

  // Parallax Effect
  console.log('Initializing parallax animation.');
  gsap.to('.fireworks-parallax', {
    backgroundPosition: '50% 20%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.fireworks-parallax',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onEnter: () => console.log('Parallax animation started.'),
      onLeave: () => console.log('Parallax animation ended.')
    }
  });

  // SplitText Animation
  console.log('Initializing SplitText animations.');
  const headingText = new SplitText('.fireworks-parallax-heading', { type: 'words, chars' });
  const subText = new SplitText('.fireworks-parallax-subtext', { type: 'words, chars' });
  console.log('SplitText applied:', headingText, subText);

  gsap.from(headingText.chars, {
    opacity: 0,
    y: 50,
    stagger: 0.05,
    duration: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.fireworks-parallax',
      start: 'top 80%',
      toggleActions: 'play reset play reset',
      onEnter: () => console.log('Heading text animation triggered.')
    }
  });

  gsap.from(subText.words, {
    opacity: 0,
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.fireworks-parallax',
      start: 'top 80%',
      toggleActions: 'play reset play reset',
      onEnter: () => console.log('Subtext animation triggered.')
    }
  });

  console.log('Animations initialized. Waiting for scroll events.');
});
// index brands
document.addEventListener('DOMContentLoaded', function() {
  // Only execute if the .brands-swiper-container section is found
  const swiperContainer = document.querySelector('.brands-swiper-container');
  if (!swiperContainer) {
    console.log('Swiper container not found');
    return;
  }
  console.log('Brands section script initialized');
  console.log('Swiper container found:', swiperContainer);

  gsap.registerPlugin(ScrollTrigger);

  try {
      const brandsSwiper = new Swiper('.brands-swiper-container', {
          slidesPerView: 1,
          spaceBetween: 20,
          speed: 800,
          grabCursor: true,
          loop: true,
          autoplay: {
              delay: 3000,
              disableOnInteraction: false,
          },
          breakpoints: {
              768: {
                  slidesPerView: 2,
                  spaceBetween: 30
              },
              992: {
                  slidesPerView: 4,
                  spaceBetween: 30
              }
          },
          on: {
              slideChangeTransitionEnd: function () {
                  animateCurrentSlide(this.el.querySelector('.swiper-slide-active'));
              }
          }
      });

      function animateCurrentSlide(slide) {
          if (slide) {
              const brandCards = slide.querySelectorAll('.brands-card');

              brandCards.forEach((card, index) => {
                  const brandNameElement = card.querySelector('.brands-name');
                  const splitText = new SplitText(brandNameElement, { type: "chars" });
                  const chars = splitText.chars;

                  // Set initial state for the card and characters
                  gsap.set(card, { rotationY: 90, opacity: 0, transformStyle: "preserve-3d" });
                  gsap.set(chars, { opacity: 0, y: 10 });

                  const cardTimeline = gsap.timeline({ overwrite: true });

                  // Card flip animation
                  cardTimeline.to(card, {
                      rotationY: 0,
                      opacity: 1,
                      duration: 0.6,
                      ease: 'power3.out'
                  }).add(() => {
                      // Text reveal animation after the card starts flipping in
                      gsap.to(chars, {
                          opacity: 1,
                          y: 0,
                          duration: 0.3,
                          stagger: 0.03,
                          ease: 'power2.out'
                      });
                  }, "-=0.3"); // Start text animation slightly before the card flip ends
              });
          }
      }

      // Initial animation of the first active slide on load
      animateCurrentSlide(swiperContainer.querySelector('.swiper-slide-active'));

      console.log('Swiper initialization complete');

  } catch(error) {
      console.error('Swiper initialization error:', error);
  }
});


// Reusable function to mimic AOS
document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  const welcomeSection = document.querySelector('.welcome-section');
  if (!welcomeSection) {
      console.log("Welcome section not found. Skipping animation.");
      return;
  }

  function animateSectionOnScroll(triggerElement, targetElements, animationProperties, startPosition = "top 80%", endPosition = "bottom 20%", staggerValue = 0.1, easeValue = "power2.out", durationValue = 0.6) {
      gsap.fromTo(targetElements,
          { ...animationProperties.from },
          {
              ...animationProperties.to,
              duration: durationValue,
              stagger: staggerValue,
              ease: easeValue,
              overwrite: true,
              scrollTrigger: {
                  trigger: triggerElement,
                  start: startPosition,
                  end: endPosition,
                  // markers: true, // Keep for debugging
                  scrub: false,
                  toggleActions: 'play none none reverse'
              }
          }
      );
  }

  const welcomeHeading = document.querySelector('.welcome-heading');
  const welcomeSubheading = document.querySelector('.welcome-subheading');
  const welcomeText = document.querySelector('.welcome-text');
  const welcomeCta = document.querySelector('.welcome-cta');
  const welcomeFeatures = document.querySelectorAll('.welcome-feature-item');
  const welcomeImage = document.querySelector('.welcome-image');

  const slideFadeIn = { from: { y: 40, opacity: 0 }, to: { y: 0, opacity: 1 } };
  const slideInLeft = { from: { x: -50, opacity: 0 }, to: { x: 0, opacity: 1 } };
  const slideInRight = { from: { x: 50, opacity: 0 }, to: { x: 0, opacity: 1 } };
  const scaleUpFadeIn = { from: { scale: 0.9, opacity: 0 }, to: { scale: 1, opacity: 1 } };

  animateSectionOnScroll(welcomeSection, [welcomeHeading, welcomeSubheading], slideFadeIn, "top 70%");
  animateSectionOnScroll(welcomeSection, welcomeText, slideFadeIn, "top 60%", "+=100");
  animateSectionOnScroll(welcomeSection, welcomeCta, scaleUpFadeIn, "top 50%", "+=50");
  animateSectionOnScroll(welcomeSection, welcomeFeatures, slideInLeft, "top 40%", "+=150", 0.2);
  animateSectionOnScroll(welcomeSection, welcomeImage, slideInRight, "top 50%");
});

// achievements section animation
document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  // 🌟 Animate the Entire Section
  const achievementsSection = document.querySelector('.index-achievements');

  gsap.fromTo(
    achievementsSection,
    { y: -100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: achievementsSection,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      }
    }
  );

  // 🌟 Animate Counter Boxes
  const counterBoxes = document.querySelectorAll('.index-achievements-counter-box');

  counterBoxes.forEach((box, index) => {
    ScrollTrigger.create({
      trigger: box,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
      onEnter: () => {
        gsap.fromTo(
          box,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.1 * index
          }
        );
      },
      onEnterBack: () => {
        gsap.fromTo(
          box,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.1 * index
          }
        );
      }
    });
  });
});
// products section animation
document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  // Targeting the section elements
  const productsSection = document.querySelector('.products-section');
  if (!productsSection) {
      console.warn('⚠️ .products-section not found. Animation will not execute.');
      return;
  }

  const sectionTitle = document.querySelector('.products-section-title');
  const sectionSubtitle = document.querySelector('.products-section-subtitle');
  const swiperSlides = document.querySelectorAll('.products-swiper-slide');

  // ✅ Animate the Title and Subtitle on section entry
  gsap.fromTo(
      [sectionTitle, sectionSubtitle],
      { x: -100, opacity: 0 },
      {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
              trigger: productsSection,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
              onEnter: () => console.log('🟢 Products Section Entered Viewport'),
              onLeaveBack: () => console.log('🔄 Products Section Left Viewport'),
          },
      }
  );

  // ✅ Animate each Swiper slide
  gsap.fromTo(
      swiperSlides,
      { scale: 0.8, opacity: 0 },
      {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
              trigger: productsSection,
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play none none reverse',
              onEnter: () => {
                  console.log('🟢 Swiper Slides Animation Triggered');
                  swiperSlides.forEach((slide, index) => {
                      console.log(`Animating Slide ${index + 1}`);
                  });
              },
          },
      }
  );
});

// brands section animation
// brands section animation
document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  // Target elements
  const brandsSection = document.querySelector('.brands-section');
  if (!brandsSection) {
      console.warn('⚠️ .brands-section not found. Animation will not execute.');
      return;
  }

  const brandsTitle = document.querySelector('.brands-section-title');
  const brandsSubtitle = document.querySelector('.brands-section-subtitle');
  const brandSlides = document.querySelectorAll('.brands-swiper-slide');

  // ✅ Animate the Title and Subtitle
  gsap.fromTo(
      [brandsTitle, brandsSubtitle],
      { y: 20, opacity: 0 },
      {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
              trigger: brandsSection,
              start: 'top 50%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
          },
      }
  );

  // ✅ Animate each Brand Card
  gsap.fromTo(
      brandSlides,
      { rotateY: -90, opacity: 0 },
      {
          rotateY: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
              trigger: brandsSection,
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play none none reverse',
              onEnter: () => console.log('🟢 Brands Section Animation Triggered'),
              onLeaveBack: () => console.log('🔄 Brands Section Left Viewport'),
          },
      }
  );
});
// GSAP Animation for About Intro Section
document.addEventListener('DOMContentLoaded', function() {
  // Check if .about-intro exists before executing any animation
  const aboutIntroSection = document.querySelector('.about-intro');
  
  if (!aboutIntroSection) {
    console.warn("`.about-intro` not found. Skipping GSAP animations for this section.");
    return;
  }
  // Initialize GSAP 
  gsap.registerPlugin(ScrollTrigger, SplitText);
  
  // Split text for title animation
  const splitTitle = new SplitText('.about-intro-title', {type: 'chars, words'});
  const chars = splitTitle.chars;
  
  // Initialize the main timeline
  const aboutIntroTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about-intro',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none'
    }
  });
  
  // Title animation
  aboutIntroTl.from(chars, {
    opacity: 0,
    y: 50,
    rotationX: -90,
    stagger: 0.02,
    duration: 0.8,
    ease: 'back.out(1.7)'
  });
  
  // Subtitle animation
  aboutIntroTl.from('.about-intro-subtitle', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'power2.out'
  }, '-=0.4');
  
  // Divider animation
  aboutIntroTl.from('.about-intro-divider', {
    scaleX: 0,
    transformOrigin: 'left center',
    duration: 0.6,
    ease: 'power1.out'
  }, '-=0.2');
  
  // Content text animation
  aboutIntroTl.from('.about-intro-text', {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.7,
    ease: 'power2.out'
  }, '-=0.3');
  
  // Stats animation
  aboutIntroTl.from('.about-intro-stat-item', {
    opacity: 0,
    x: -30,
    stagger: 0.15,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.4');
  
  // CTA button animation
  aboutIntroTl.from('.about-intro-btn', {
    opacity: 0,
    y: 20,
    scale: 0.9,
    duration: 0.5,
    ease: 'back.out(1.5)'
  }, '-=0.2');
  
  // Images animation
  aboutIntroTl.from('.about-intro-image-main', {
    opacity: 0,
    x: 50,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=1.2');
  
  aboutIntroTl.from('.about-intro-image-accent', {
    opacity: 0,
    x: -30,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6');
  
  // Background shapes animation
  aboutIntroTl.from('.about-intro-shape', {
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    duration: 1,
    ease: 'power1.out'
  }, '-=0.8');
  
  // Interactive stats elements with reveal effects instead of counters
  const statItems = document.querySelectorAll('.about-intro-stat-item');
  
  // Create shimmering effect on stat numbers
  statItems.forEach(item => {
    const statNumber = item.querySelector('.about-intro-stat-number');
    
    // Create shimmer effect timeline
    const shimmerTl = gsap.timeline({
      scrollTrigger: {
        trigger: statNumber,
        start: 'top 80%',
        once: true
      }
    });
    
    // Add gradient overlay for shimmer effect
    shimmerTl.fromTo(statNumber, 
      { 
        textShadow: "0 0 0 rgba(220, 20, 60, 0)" 
      },
      { 
        textShadow: "0 0 10px rgba(220, 20, 60, 0.4), 0 0 20px rgba(220, 20, 60, 0.2)",
        duration: 1,
        ease: "power2.out"
      }
    );
    
    // Create interactive hover effects
    item.addEventListener('mouseenter', () => {
      // Create a burst effect
      gsap.to(statNumber, {
        scale: 1.2,
        color: 'var(--color3)',
        textShadow: "0 0 15px rgba(153, 50, 204, 0.6)",
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
      
      // Animate the label with a slight bounce
      gsap.to(item.querySelector('.about-intro-stat-label'), {
        y: -5,
        opacity: 1,
        fontWeight: 600,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(statNumber, {
        scale: 1,
        color: 'var(--color1)',
        textShadow: "0 0 10px rgba(220, 20, 60, 0.2)",
        duration: 0.3,
        ease: 'power2.in'
      });
      
      gsap.to(item.querySelector('.about-intro-stat-label'), {
        y: 0,
        opacity: 0.8,
        fontWeight: 400,
        duration: 0.3,
        ease: 'power2.in'
      });
    });
  });
  
  // Add floating animations to the shapes for continuous movement
  gsap.to('.about-intro-shape-1', {
    y: '-=20',
    x: '+=10',
    rotation: 15,
    duration: 4,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true
  });
  
  gsap.to('.about-intro-shape-2', {
    y: '+=15',
    x: '-=10',
    rotation: -10,
    duration: 5,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
  
  // Add magnetic effect to the CTA button
  const btn = document.querySelector('.about-intro-btn');
  const btnIcon = btn.querySelector('i');
  
  btn.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Move the icon slightly toward the cursor
    gsap.to(btnIcon, {
      x: (x - rect.width / 2) / 10,
      y: (y - rect.height / 2) / 10,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  btn.addEventListener('mouseleave', function() {
    // Reset the icon position
    gsap.to(btnIcon, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});
// about page parallax section gsap code
document.addEventListener('DOMContentLoaded', function () {
  // === Initialize GSAP Plugins ===
  function registerGSAPPlugins() {
    try {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      console.log("✅ GSAP Plugins Registered Successfully");
    } catch (error) {
      console.error("❌ Failed to register GSAP plugins:", error.message);
    }
  }

  // === Parallax Background Images ===
  function initParallaxImages() {
    const images = document.querySelectorAll('.parallax-img');
    if (images.length > 0) {
      new SimpleParallax(images, {
        scale: 1.5,
        delay: 5.0,
        transition: 'cubic-bezier(0,0,0,1)',
        orientation: 'up'
      });
      console.log("✅ Parallax images initialized");
    } else {
      console.warn("⚠️ No .parallax-img elements found for parallax effect.");
    }
  }

  // === SplitText Animations ===
function initSplitTextAnimations() {
  const splitTitleEl = document.querySelector('.parallax-section-title');
  const splitTextEl = document.querySelector('.parallax-section-text');

  // Wait for fonts to load
  document.fonts.ready.then(() => {
    requestAnimationFrame(() => {
      // Title Animation
      if (splitTitleEl) {
        const splitTitle = new SplitText(splitTitleEl, { type: 'words, chars' });

        gsap.from(splitTitle.chars, {
          scrollTrigger: {
            trigger: splitTitleEl,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            onEnter: () => console.log("🟢 Title Entered Viewport"),
          },
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power1.out'
        });

        console.log("✅ SplitText Title Animation Initialized");
      } else {
        console.warn("⚠️ No .parallax-section-title element found for animation.");
      }

      // Text Animation
      if (splitTextEl) {
        const splitText = new SplitText(splitTextEl, { type: 'lines' });

        gsap.from(splitText.lines, {
          scrollTrigger: {
            trigger: splitTextEl,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            onEnter: () => console.log("🟢 Text Entered Viewport"),
          },
          opacity: 0,
          y: 20,
          stagger: 0.5,
          duration: 1,
          ease: 'power1.out'
        });

        console.log("✅ SplitText Text Animation Initialized");
      } else {
        console.warn("⚠️ No .parallax-section-text element found for animation.");
      }

      // Refresh ScrollTrigger after initialization
      ScrollTrigger.refresh();
    });
  }).catch((err) => {
    console.warn("❌ Font loading failed:", err.message);
  });
}

  // === Particle Animation ===
  function initParticleAnimation() {
    console.log("particle animation function called");
  
    const particles = document.querySelectorAll('.parallax-section-particle');
    console.log(`🟢 Found ${particles.length} particles`);
  
    if (particles.length > 0) {
      particles.forEach((particle, index) => {
        console.log(`🌀 Animating particle ${index + 1}`);
        gsap.to(particle, {
          duration: 2,         // Reduced for quick debugging
          x: '+=50',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.5,
          onUpdate: () => {
            const transform = window.getComputedStyle(particle).transform;
            // console.log(`🔄 Particle ${index + 1} Transform Matrix:`, transform);
          }
        });
      });
      console.log("✅ Particle Animation Initialized");
    } else {
      console.warn("⚠️ No .parallax-section-particle elements found for animation.");
    }
  }
  

  // === Main Initializer ===
  function initializeParallaxSection() {
    const aboutParallax = document.querySelector(".parallax-section");
    if (!aboutParallax) {
      console.warn("⚠️ about parallax not found.");
      return;
    }

    registerGSAPPlugins();
    initParallaxImages();
    initSplitTextAnimations();
    initParticleAnimation();
  }

  // Call the Main Initializer
  initializeParallaxSection();
});
// GSAP Animation for Why Choose Us Section
window.onload = function () {
  // === Main Initialization Function ===
  function initializeWhyChooseUsAnimations() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      console.error("❌ GSAP or ScrollTrigger not loaded");
      return;
    }

    // ✅ Clear any lingering ScrollTrigger states
    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.refresh();
    gsap.registerPlugin(ScrollTrigger);
    console.log("✅ GSAP Plugins Registered Successfully");

    // Get the main section element
    const whyChooseUsSection = document.querySelector(".why-choose-us");

    if (whyChooseUsSection) {
      console.log("✅ .why-choose-us section found, initializing animations...");
      initSectionAnimations(whyChooseUsSection);
      initTitleAnimations(whyChooseUsSection);
      initCardAnimations();
      initIconAnimations();
      initTextAnimations();
      initCTAAnimation();
      initCardHoverEffects();
    } else {
      console.warn("⚠️ .why-choose-us section not found. Animations skipped.");
    }
  }

  // === Section Animation ===
  function initSectionAnimations(section) {
    if (section) {
      gsap.from(".why-choose-us .container", {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }
  }

  // === Title Animations ===
  function initTitleAnimations(section) {
    gsap.from(".why-choose-us-heading", {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: -30,
      duration: 1.2,
      ease: "back.out(1.7)",
    });

    gsap.from(".why-choose-us-subtitle", {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 1.2,
      delay: 0.2,
      ease: "back.out(1.7)",
    });
  }

  // === Card Animations ===
  function initCardAnimations() {
    const cardRow = document.querySelector(".why-choose-us .row:nth-child(2)");
    if (cardRow) {
      gsap.from(".why-choose-us-card", {
        scrollTrigger: {
          trigger: cardRow,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        rotationX: 360,
        y: 100,
        x: (index) => (index % 2 === 0 ? -50 : 50),
        stagger: 0.15,
        duration: 1.5,
        ease: "power3.out",
        transformOrigin: "center center",
      });
    }
  }

  // === Icon Animations ===
  function initIconAnimations() {
    const iconRow = document.querySelector(".why-choose-us .row:nth-child(2)");
    if (iconRow) {
      gsap.from(".why-choose-us-icon", {
        scrollTrigger: {
          trigger: iconRow,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        scale: 0,
        rotation: 180,
        stagger: 0.2,
        delay: 0.5,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    }
  }

  // === Card Titles and Text Animation ===
  function initTextAnimations() {
    const textRow = document.querySelector(".why-choose-us .row:nth-child(2)");
    if (textRow) {
      gsap.from(".why-choose-us-card-title", {
        scrollTrigger: {
          trigger: textRow,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20,
        stagger: 0.2,
        delay: 0.7,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".why-choose-us-card-text", {
        scrollTrigger: {
          trigger: textRow,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20,
        stagger: 0.2,
        delay: 0.9,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }

  // === CTA Animation ===
  function initCTAAnimation() {
    const ctaRow = document.querySelector(".why-choose-us .row:nth-child(3)");
    if (ctaRow) {
      gsap.from(".why-choose-us-cta", {
        scrollTrigger: {
          trigger: ctaRow,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "back.out(1.7)",
      });
    }
  }

  // === Card Hover Effects ===
  function initCardHoverEffects() {
    const cards = document.querySelectorAll(".why-choose-us-card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        gsap.to(this, {
          rotationY: 10,
          rotationX: -10,
          y: -10,
          scale: 1.03,
          boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
          duration: 0.4,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", function () {
        gsap.to(this, {
          rotationY: 0,
          rotationX: 0,
          y: 0,
          scale: 1,
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });
  }

  // === Call Main Initialization ===
  initializeWhyChooseUsAnimations();
};


