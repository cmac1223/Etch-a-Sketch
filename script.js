const container = document.querySelector('#container');

// create grid div and grid class

function createGrid(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let columns = 0; columns < x; columns++) {
      const grid = document.createElement('div');
      grid.classList.add("grid");
      container.appendChild(grid)
    }
  }

}

createGrid(16);

let grid = document.getElementsByClassName("grid");
// console.log(test);

for (let cell of grid) {
  cell.addEventListener("mouseover", function (e) {
    // debugger;
    e.target.style.backgroundColor = "purple";
  })
}

// test.addEventListener("mouseover", function (e) {
//   // debugger;
//   e.target.style.color = "purple";
// })