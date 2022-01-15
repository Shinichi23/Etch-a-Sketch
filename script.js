const container = document.querySelector("#container");
const reset = document.createElement("button");
reset.textContent = "RESET";
const body = document.querySelector("body");

body.appendChild(reset); //

function grid(grid) {
  for (let i = 0; i < 16 ** 2; i++) {
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

function resetSketch() {
  const num = prompt();
  return (
    (document.getElementById(
      "container"
    ).style.gridTemplateColumns = `repeat(${num}, 30px)`),
    (document.getElementById(
      "container"
    ).style.gridTemplateRows = `repeat(${num}, 30px)`)
  );
}

reset.addEventListener("click", (e) => {
  resetSketch(e);
});

/*
 */

grid();
