function createGrid (size = 16) {  //CSSgrid
  let grid = document.querySelector('#grid');
  grid.style.gridTemplateColumns = `repeat(${size}, 1px)`
  grid.style.gridTemplateRows = `repeat(${size}, 1px)`
  for (let j = size; j > 0; j--) {
    for (let i = size; i > 0; i--){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
        cell.addEventListener('mouseover', function handleMouseOver() {
          cell.style.background = 'blue';
      });
    }
  }
}

let size;
let button = document.querySelector('button');
button.addEventListener('click', function handleClick() {
  size = window.prompt("Please enter the number of squares per side for the new grid");
  createGrid(size);
});

//createGrid(size);
