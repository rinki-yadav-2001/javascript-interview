// event.target:

// event.target refers to the actual element on which the event originally occurred (the most deeply nested element that triggered the event).
// It represents the element that triggered the event, even if the event has bubbled up or propagated through several nested elements.
// For example, if you have nested elements and you click on the innermost element, event.target will refer to that specific inner element that was clicked.

/* event.currentTarget: */

// event.currentTarget refers to the element that the event handler is currently attached to.
// It always refers to the element on which the event handler is registered, regardless of where the event originated or which element triggered the event.
// Unlike event.target, event.currentTarget remains constant throughout the event bubbling or capturing phase.
// This is useful when you want to maintain a reference to a specific element (the element with the event listener) regardless of where the event occurred.

const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
child.addEventListener(
  "click",
  function () {
    console.log("I am child");
  },
  false
);

parent.addEventListener(
  "click",
  function (e) {
    //   e.stopPropagation();
    console.log("I am parent");
  },
  false
);

grandparent.addEventListener(
  "click",
  function () {
    console.log("I am grandparent");
  },
  false
);

// Event propagation refers to the way events propagate or travel through the DOM (Document Object Model) hierarchy in a web page. There are two main phases of event propagation:

// Capturing Phase (Event capturing):

// During this phase, the event is captured by the outermost element and then moves towards the target element.
// It starts from the top of the DOM hierarchy and moves downwards to the target element where the event originated.
// This phase allows you to capture the event at the top-level elements before it reaches the target element.

// Bubbling Phase (Event bubbling):

// After the event reaches the target element and triggers the event handlers attached to it, it then bubbles up through its ancestors.
// It starts from the target element and moves upwards through the DOM hierarchy towards the outermost elements.
// This phase allows you to handle the event as it bubbles up through various nested elements.
