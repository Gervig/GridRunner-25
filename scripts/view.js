import * as controller from "./controller.js";

export function registerEventHandlers() {
  log(`Register event handlers`);

  //TODO: handle button clicks
  document.querySelector("#buttons").addEventListener("click", clickedButton);
}

function clickedButton(event) {
  const button = event.target;
}

function log(text) {
  console.log(text);
}
