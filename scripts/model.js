import Grid from "../data-structure/grid.js";

const scale = 0.5;

let rows, cols, cellSize;
if (window.innerWidth <= 480) {
  // mobile
  cols = 20*scale;
  rows = 36*scale;
  cellSize = "24px";
} else if (window.innerWidth <= 768) {
  // tablet
  cols = 32*scale;
  rows = 48*scale;
  cellSize = "32px";
} else {
  // desktop
  cols = 48*scale;
  rows = 27*scale;
  cellSize = "40px";
}

export function getNumOfCols() {
  return cols;
}

export function getNumofRows() {
  return rows;
}

// sets the variables in the style.css
const gridElement = document.getElementById('grid');

gridElement.style.setProperty('--rows', rows);
gridElement.style.setProperty('--cols', cols);
gridElement.style.setProperty('--cell-size', cellSize);

const totalCells = cols * rows;