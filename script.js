function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


document.getElementById('menu-toggle').addEventListener('click', toggleMenu);


document.querySelectorAll('.navbar a').forEach((item) => {
    item.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('active');
    });
});


document.querySelectorAll('.navbar a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Remove the "#" from the href
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress .bar span');
    skillBars.forEach((bar) => {
        const skillValue = bar.parentElement.previousElementSibling.querySelector('span').innerText.replace('%', '');
        bar.style.width = skillValue + '%';
    });
}


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}


window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    if (isElementInViewport(skillsSection)) {
        animateSkillBars();
    }
});


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been submitted.');
});


document.querySelectorAll('.home-sci a').forEach((icon) => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#007bff'; 
    });
    icon.addEventListener('mouseout', () => {
        icon.style.color = ''; 
    });
});
