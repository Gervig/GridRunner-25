import Grid from "../data-structure/grid.js";

const scale = 0.5;

// sets game grid with hardcoded values
let rows = 10,
  cols = 10,
  cellSize;
if (window.innerWidth <= 480) {
  // mobile
  cols * scale;
  rows * scale;
  cellSize = "35px";
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

function log(text) {
  console.log(text);
}

// --- GAME LOGIC --- //

// The game consists of a grid, where every cell has a value:
// 0 means the cell is empty
// 1 means its occupied by the 'snake' -> the player
// 2 means its occupied by the 'apple' -> the goal

let gameGrid = new Grid(rows, cols);

export function writeToCell(row, col, value) {
  gameGrid.set({ row: row, col: col }, value);
  log(`Sat row: ${row}, col: ${col} to ${value}`);
}

export function readFromCell(row, col) {
  return gameGrid.get({ row: row, col: col });
}

export function getGrid() {
  return gameGrid;
}
