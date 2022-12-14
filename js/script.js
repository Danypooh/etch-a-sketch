let gridSize;    //variable for size of grid
let flag = 1;   //variable to handle clearGrid when Grid size button is pushed
let button = document.querySelector('#grid-size');  //addEventListener to GridSize button
button.addEventListener('click', function handleClick() {
  if (flag != 1) {
    clearGrid();
  }
  gridSize = window.prompt("Please enter the number of squares per side for the new grid");
  if (gridSize > 100) {  //only accept values between 0 and 100
    window.alert("Please enter a value between 0 and 100");
  }
  else {
  createGrid(gridSize);
  flag++;
  }
});

let clear = document.querySelector('#clear'); //addEventListener to Clear button
clear.addEventListener('click', function handleClick() {
  flag = 1;
  try {
    clearGrid();
  }
  catch (error) {
    console.log("There's nothing to clear");
  }
}); 

function createGrid (gridSize = 16) {  //CSSgrid
  let grid = document.querySelector('#grid');
  grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`
  grid.style.gridTemplateRows = `repeat(${gridSize}, auto)`
  for (let j = gridSize; j > 0; j--) {
    for (let i = gridSize; i > 0; i--){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
        cell.addEventListener('mouseover', function handleMouseOver() {
          cell.style.background = 'blue';
      });
    }
  }
}

function clearGrid () {
  let grid = document.querySelector('#grid');
  for (let j = gridSize; j > 0; j--) {
    for (let i = gridSize; i > 0; i--){
        let cell = document.querySelector('.cell');
        grid.removeChild(cell);
    }
  }
}

/*let erase = document.querySelector('#erase');  //addEventListener to Erase button
erase.addEventListener('click', function handleEraseClick() {
  try {
    if (flag != 1) {
      eraseGrid();
    }
  }
  catch (error) {
    console.log(error);
  }
});

function eraseGrid () {
  flag = 1;
  let grid = document.querySelector('#grid');
  for (let j = gridSize; j > 0; j--) {
    for (let i = gridSize; i > 0; i--){
        let cell = document.querySelector('.cell');
        cell.classList.add('');
    }
  }
}*/