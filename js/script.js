function createGrid (size) {
  let grid = document.querySelector('#grid');
  for (let j = size; j > 0; j--) {
    grid.gridRow += 0;
    for (let i = size; i > 0; i--){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
        cell.addEventListener('mouseover', function handleMouseOver() {
          cell.style.background = 'blue';
      });
        grid.gridRow++;
    }
  }
}

let size = 16;
let button = document.querySelector('button');
button.addEventListener('click', function handleClick() {
  prompt("Please enter the size of the squared grid", size)
});

createGrid(size);
