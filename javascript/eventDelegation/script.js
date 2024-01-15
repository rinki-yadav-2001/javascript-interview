const parent = document.querySelector(".parent");

parent.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    // window.location.href += "/" + e.target.className;
    console.log("Clicked on:", e.target.textContent);
  }
});

// Event delegation is a design pattern in JavaScript where instead of attaching event handlers to
//  individual elements, you attach a single event handler to a parent element that manages events
//   for all its descendants. This technique takes advantage of event bubbling in the DOM.
