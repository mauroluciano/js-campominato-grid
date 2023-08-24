//- creo una lista di numeri da 1 a 100
let button = document.getElementById("generate-grid");
button.addEventListener("click", function () {
  const cellsContainer = document.getElementById("cells-container");
  const totalCell = 10 * 10;

  for (let i = 1; i <= totalCell; i++) {
    const cell = document.createElement("li");
    cell.innerText = i;
    cell.classList.add("cell");
    cellsContainer.append(cell);

    cell.addEventListener("click", function () {
      cell.classList.add("yellow");
    });
  }
});



///////