document.addEventListener('DOMContentLoaded', () => {
    const imagen = document.querySelector('.imagen');
    const vermasBtn = document.querySelector('.vermas');
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const sectionHeight = heroSection.offsetHeight;
        
        const moveUp = Math.min(scrollY * 0.2, sectionHeight);
        
        imagen.style.transform = `translateY(-${moveUp}px)`;
        vermasBtn.style.transform = `translate(-50%, -${moveUp * 0.8}px)`;
    });
});