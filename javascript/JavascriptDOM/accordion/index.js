import "./style.css";

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion-title");

  title.addEventListener("click", () => {
    for (let i = 0; i < accordionItems.length; i++) {
      if (accordionItems[i] === item) {
        item.classList.toggle("active");
      } else {
        accordionItems[i].classList.remove("active");
      }
    }
  });
});