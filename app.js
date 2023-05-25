function scrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            element.classList.add('visible');
        }
    });
}

// Add event listener to detect scroll
window.addEventListener('scroll', scrollReveal);


var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}



const darkBtn = document.getElementById('dark-btn');
const bodyEl = document.body;

darkBtn.addEventListener('click', () => {
bodyEl.classList.toggle('dark-mode');
});

darkBtn.addEventListener('mouseenter', () => {
darkBtn.style.cursor = 'pointer';
});

darkBtn.addEventListener('mouseleave', () => {
darkBtn.style.cursor = 'auto';
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));