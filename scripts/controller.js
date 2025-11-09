"use strict";
import * as view from "./view.js";
import * as model from "./model.js";

function startController() {
  // kald view.register
  view.registerEventHandlers();

  let numOfRows = model.getNumofRows();
  let numOfCol = model.getNumOfCols();

  // gets access to other modules
  // when controller is started
  window.model = model;
  window.view = view;

  const grid = document.getElementById("grid");

  log(`Rows: ${numOfRows}, Col: ${numOfCol}`);

  for (let row = 0; row < numOfRows; row++) {
    for (let col = 0; col < numOfCol; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.textContent = "";
      grid.appendChild(cell);
    }
  }

  // initialize the view after the DOM cells
  view.initView();

  // model.startGame();
  tick();
}

startController();

function log(text) {
  console.log(text);
}

function tick() {
  // setup next game tick
  setTimeout(tick, 500);

  //TODO: do stuff

  // update the display of the entire model
  view.displayGrid();
}
