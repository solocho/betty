document.addEventListener("DOMContentLoaded", function () {
    // Dropdown Menu Logic
    const dropdown = document.querySelector(".category");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (dropdown && dropdownMenu) {
        dropdown.addEventListener("click", () => {
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        });

        document.querySelectorAll(".dropdown-menu li").forEach(item => {
            item.addEventListener("click", function () {
                dropdown.value = this.textContent;
                dropdownMenu.style.display = "none";
            });
        });

        document.addEventListener("click", (event) => {
            if (!dropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = "none";
            }
        });
    }

    // Smooth Fade-in Effect for `.con-1`
    const con1 = document.querySelector('.con-1');
    if (con1) {
        setTimeout(() => {
            con1.classList.add('show');
        }, 500);
    }

    // Slider Functionality
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

    // Attach Click Events to Buttons Only if They Exist
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);
    }

    // Attach Click Events to Dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => goToSlide(index));
    });

    // Start Auto-Sliding
    startAutoSlide();
});
