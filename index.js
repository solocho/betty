document.addEventListener("DOMContentLoaded", function () {
    // Dropdown menu click event
    document.querySelectorAll(".dropdown-menu li").forEach(item => {
        item.addEventListener("click", function () {
            document.querySelector(".category").value = this.textContent;
        });
    });

    // Smooth fade-in effect for `.con-1`
    const con1 = document.querySelector('.con-1');
    if (con1) {
        setTimeout(() => {
            con1.classList.add('show');
        }, 500);
    }

    // Slider functionality
    let currentIndex = 0;
    const slides = document.querySelector(".slides");
    const dots = document.querySelectorAll(".dot");
    let autoSlideInterval;
    const pauseAfterLoop = 60000; // 1 min pause after looping

    function goToSlide(index) {
        currentIndex = index;
        slides.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
        resetAutoSlide();
    }

    function nextSlide() {
        if (currentIndex < dots.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
            clearInterval(autoSlideInterval);
            setTimeout(startAutoSlide, pauseAfterLoop);
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : dots.length - 1;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
        resetAutoSlide();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 10000);
    }

    // Attach click events to buttons only if they exist
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);
    }

    // Start the auto-slide
    startAutoSlide();
});
