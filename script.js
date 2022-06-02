// grid needs to be  960px x 960px
// prompt asking using for # of cells

const container = document.querySelector('#container');
// const cell = document.getElementsByClassName("grid");

// create grid div and grid class

function createGrid(x) {
  document.querySelector('#container').style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  for (let rows = 0; rows < x; rows++) {
    for (let columns = 0; columns < x; columns++) {
      const blah = document.createElement('div');
      blah.classList.add("grid");
      blah.innerText = '_';

      // blah.id = `${columns + 1} `;
      // console.log(cell.id, "++<>")
      // blah.style.height = "48px"
      // blah.style.height = "70px"
      // blah.style.width = "48px"

      // const cell = document.querySelectorAll(".grid");
      // cell.style.gridTemplateColumns = "repeat(x, 1fr)";

      // blah.style.gridTemplateRows = "repeat(x, 1fr)";


      container.appendChild(blah)
    }
  }
  // container.style.gridTemplateColumns = "repeat(x, 1fr)";
  // container.style.gridTemplateRows = "repeat(x, 1fr)";

}

// Clears Grid
function removeGrid() {
  container.innerHTML = '';
}

// call createGrid (function will run when page loads up)
createGrid(16);
hoverCell();

// this function re size the grid with the accurate cell count
// function reSizeGrid(size) {
//   document.querySelector('#container').style.gridTemplateColumns = `repeat(${size}, 1fr)`;
// }

// test function to see rather or not we can change the grid cells
function myFunction() {
  removeGrid();
  let size = prompt('Pick a number')
  createGrid(size);
  hoverCell();
  // debugger;
  // reSizeGrid(size);
}

function hoverCell() {
  let grid = document.getElementsByClassName("grid");
  for (let cell of grid) {
    cell.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    })
  }
}

// test.addEventListener("mouseover", function (e) {
//   // debugger;
//   e.target.style.color = "purple";
// })