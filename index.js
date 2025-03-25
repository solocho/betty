document.querySelectorAll(".dropdown-menu li").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelector(".category").value = this.textContent;
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const con1 = document.querySelector('.con-1');
    setTimeout(() => {
        con1.classList.add('show');
    }, 500); // Delay to make it feel smooth
});



let currentIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
let autoSlideInterval;
let pauseAfterLoop = 60000; // 1 min pause after looping

// Function to go to a specific slide
function goToSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
    resetAutoSlide();
}

// Function to move to the next slide
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

// Function to move to the previous slide
function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : dots.length - 1;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
    resetAutoSlide();
}

// Update active dot
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

// Reset auto-slide when user interacts
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Start Auto-Sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 10000);
}

// Attach click events to buttons
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Start the auto-slide initially
startAutoSlide();
