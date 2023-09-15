const links = document.querySelectorAll('ul li a');
let originallyActiveLink;

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        originallyActiveLink = document.querySelector('ul li a.active');
        links.forEach(otherLink => {
            otherLink.classList.remove('active');
        });
    });

    link.addEventListener('mouseleave', () => {
        if (originallyActiveLink) {
            originallyActiveLink.classList.add('active');
        }
    });
});
