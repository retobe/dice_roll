const links = document.querySelectorAll('ul li a');
const balanceElement = document.querySelector("#balance");
balanceElement.innerHTML = `Balance: $${numberWithCommas(localStorage.getItem("money"))}`;
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
