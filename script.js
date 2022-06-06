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
  let size = prompt('Please select any number ranging from 0 to 100.')
  // if statement inorder to add conditionals to prompt we want only numbers with a max limit of 100
  // debugger;
  if (parseInt(size) <= 100) {
    createGrid(size);
    hoverCell();
  } else {
    alert("Please select any number ranging from 0 to 100.")
  }

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

// Creat div container for button and title
const topContainer = document.createElement('div');
topContainer.classList.add('topContainer');

// create title
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Etch-A-Sketch'

// create button and add it to the DOM 
const gridButton = document.createElement('button');

//create a class
gridButton.classList.add('grid-button');
gridButton.textContent = 'New Grid';

topContainer.appendChild(title)
topContainer.appendChild(gridButton);
document.body.appendChild(topContainer)

// Add event-listener to gridButton
gridButton.addEventListener('click', myFunction);