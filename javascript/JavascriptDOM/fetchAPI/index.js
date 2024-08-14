async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await res.json();
  renderTable(result);
}

document.getElementById("btn").addEventListener("click", fetchData);

function renderTable(data) {
  let rows = "";
  data.forEach((item) => {
    rows += `<tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.body}</td>
        <td>${item.userId}</td>
    </tr>`;
  });
  const tableBody = document.getElementById("tbody");
  tableBody.innerHTML = rows;
}