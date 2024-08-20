


const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and content
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // Add active class to the clicked tab and corresponding content
    tab.classList.add("active");
    const tabNumber = tab.getAttribute("data-tab");
    const tabContent = document.getElementById(tabNumber);
    tabContent.classList.add("active");
  });
});

// Set the first tab and content as active initially
tabs[0].classList.add("active");
contents[0].classList.add("active");
