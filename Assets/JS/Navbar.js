const links = document.querySelectorAll("ul li a");
const balanceElement = document.querySelector("#balance");
balanceElement.innerHTML = `Balance: $${numberWithCommas(
  localStorage.getItem("money")
)}`;
let originallyActiveLink;

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = (e) => {
  if (e.key == 123) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "I") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "C") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "J") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key == "U") {
    e.preventDefault();
  }
};

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    originallyActiveLink = document.querySelector("ul li a.active");
    links.forEach((otherLink) => {
      otherLink.classList.remove("active");
    });
  });

  link.addEventListener("mouseleave", () => {
    if (originallyActiveLink) {
      originallyActiveLink.classList.add("active");
    }
  });
});
