const Url = "https://fakestoreapi.com/products";

fetch(Url)
  .then((response) => response.json())
  .then((data) => {
    let rows = "";
    data.forEach((product) => {
      rows += `
              <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td> <img src="${product.image}"/> </td>
              </tr>
            `;
    });
    const TableBody = document.getElementById("table-body");

    TableBody.innerHTML = rows;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
