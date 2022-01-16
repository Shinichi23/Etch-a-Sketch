const container = document.querySelector("#container");
const reset = document.createElement("button");
reset.textContent = "RESET";
const clear = document.createElement("button");
clear.textContent = "CLEAR";
const buttons = document.querySelector("#buttons");

buttons.appendChild(clear);
buttons.appendChild(reset); //

/*function gridCreate() {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  container.appendChild(grid);
}*/

// gridCreate();
function box(num) {
  for (let i = 0; i < num ** 2; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
  }
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", function (e) {
      const Color1 = Math.floor(Math.random() * 256);
      const Color2 = Math.floor(Math.random() * 256);
      const Color3 = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
    });
  });
}

box(16);

function deleteGrid() {
  let boxes = document.querySelectorAll(".grid");
  boxes.forEach((box) => {
    container.removeChild(box);
  });
}

const buttonReset = reset.addEventListener("click", () => {
  deleteGrid();
  let num = prompt();
  if (num > 99 || num < 2) {
    (num = prompt()), box(num);
  } else return box(num);
});

const buttonClear = clear.addEventListener("click", () => {
  deleteGrid();
  box(16);
});
