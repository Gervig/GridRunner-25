import Grid from "../data-structure/grid.js";

const scale = 0.5;

let rows = 16,
  cols = 16,
  cellSize;
if (window.innerWidth <= 480) {
  // mobile
  cols * scale;
  rows * scale;
  cellSize = "20px";
} else if (window.innerWidth <= 768) {
  // tablet
  cols * scale;
  rows * scale;
  cellSize = "32px";
} else {
  // desktop
  cols * scale;
  rows * scale;
  cellSize = "40px";
}

export function getNumOfCols() {
  return cols;
}

export function getNumofRows() {
  return rows;
}

// sets the variables in the style.css
const gridElement = document.getElementById("grid");

gridElement.style.setProperty("--rows", rows);
gridElement.style.setProperty("--cols", cols);
gridElement.style.setProperty("--cell-size", cellSize);

const totalCells = cols * rows;
