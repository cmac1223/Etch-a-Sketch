// grab container div
const container = document.querySelector('#container');

// create grid div and grid class
function createGrid(x) {
  document.querySelector('#container').style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  for (let rows = 0; rows < x; rows++) {
    for (let columns = 0; columns < x; columns++) {
      const blah = document.createElement('div');
      blah.classList.add("grid");

      container.appendChild(blah)
    }
  }


}

// Clears Grid
function removeGrid() {
  container.innerHTML = '';
}

// call createGrid (function will run when page loads up)
createGrid(16);
hoverCell();



// test function to see rather or not we can change the grid cells
function myFunction() {
  removeGrid();
  let size = prompt('Pick a number')
  createGrid(size);
  hoverCell();

}

// this function changes cell color using event-listener
function hoverCell() {
  let grid = document.getElementsByClassName("grid");
  for (let cell of grid) {
    cell.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    })
  }
}

