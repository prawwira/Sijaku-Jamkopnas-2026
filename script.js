// Hero background slideshow — fade otomatis tiap beberapa detik
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.hero-bg-slide');
    if (slides.length <= 1) return; // gak perlu slideshow kalau cuma 1 gambar
 
    let current = 0;
    const intervalTime = 4000; // ganti gambar tiap 4 detik
 
    setInterval(function () {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, intervalTime);
});