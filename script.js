const container = document.querySelector("#container");
const num = prompt();

function grid(grid) {
  for (let i = 0; i < num ** 2; i++) {
    grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
  }

  const grids = document.querySelectorAll(".grid");

  grids.forEach((grid) => {
    grid.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "red";
    });
  });
}

grid();
