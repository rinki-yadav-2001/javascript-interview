const searchInput = document.getElementById("searchInput");
const defaultresult = document.getElementById("default");
const debounceresult = document.getElementById("debounceResults");
const throttleresult = document.getElementById("throttleResults");

function performSearch(query) {
  //   debounceresult.textContent = query;
  throttleresult.textContent = query;
}

function debounce(cb, delay = 300) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

// const debounceText = debounce(performSearch, 1000);
const throttleText = throttle(performSearch, 1000);

searchInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  //   debounceText(e.target.value);
  throttleText(e.target.value);
});

function throttle(cb, d) {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
}
